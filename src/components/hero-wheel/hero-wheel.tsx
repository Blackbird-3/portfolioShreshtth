"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { ProjectDemo } from "@/components/project-demos";
import { focusRing } from "@/lib/styles";
import { site } from "@/lib/site";
import { CLOUD_SRC, SKY_SRC, wheelCards } from "./cards";
import { cardPose, dealOrder, sceneFit, sceneTransform, wrap } from "./pose";
import "./hero-wheel.css";

const DEG_PER_PX = 0.16;
const WHEEL_PER_PX = 0.1;

type Gesture = {
  dragging: boolean;
  touch: boolean;
  moved: number;
  totalX: number;
  totalY: number;
  lock: "spin" | "scroll" | null;
  lastX: number;
  lastY: number;
  lastT: number;
  velocity: number;
  target: number;
  shown: number;
  drift: number;
};

type CardNode = {
  el: HTMLAnchorElement;
  video: HTMLVideoElement | null;
  transform: string;
  visibility: string;
  pending: boolean;
};

function decodeElement(img: HTMLImageElement) {
  const ready = img.decode?.() ?? Promise.resolve();
  return ready.catch(
    () =>
      new Promise<void>((resolve) => {
        if (img.complete) {
          resolve();
          return;
        }
        img.onload = () => resolve();
        img.onerror = () => resolve();
      }),
  );
}

export function HeroWheel() {
  const frameRef = useRef<HTMLElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const finishRef = useRef<() => void>(() => {});
  const gesture = useRef<Gesture>({
    dragging: false,
    touch: false,
    moved: 0,
    totalX: 0,
    totalY: 0,
    lock: null,
    lastX: 0,
    lastY: 0,
    lastT: 0,
    velocity: 0,
    target: 0,
    shown: 0,
    drift: 0,
  });

  const deal = useMotionValue(0);
  const lift = useMotionValue(0);
  const chrome = useMotionValue(0);
  const chromeY = useTransform(chrome, [0, 1], [12, 0]);

  const [phase, setPhase] = useState<"loading" | "dealing" | "lifting" | "done">("loading");
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const view = viewRef.current;
    const scene = sceneRef.current;
    const sky = skyRef.current;
    const clouds = cloudRef.current;
    if (!frame || !view || !scene || !sky || !clouds) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const g = gesture.current;
    g.dragging = false;
    g.moved = 0;
    g.velocity = 0;
    g.target = 0;
    g.shown = 0;
    g.drift = 0;

    const nodes: CardNode[] = [...scene.querySelectorAll<HTMLAnchorElement>(".wheel-card")].map(
      (el) => ({
        el,
        video: el.querySelector("video"),
        transform: "",
        visibility: "",
        pending: false,
      }),
    );

    let fit = 1;
    let sceneCache = "";
    let skyCache = "";
    let cloudCache = "";
    const measure = () => {
      fit = sceneFit(frame.clientHeight || 1);
      view.style.perspective = `${Math.round((frame.clientHeight || 1) * 1.35)}px`;
    };
    measure();

    const writeScene = (liftV: number) => {
      const next = sceneTransform(fit, liftV);
      if (next !== sceneCache) {
        scene.style.transform = next;
        sceneCache = next;
      }
      const skyOpacity = String(Math.round(liftV * 1000) / 1000);
      if (skyOpacity !== skyCache) {
        sky.style.opacity = skyOpacity;
        skyCache = skyOpacity;
      }
      const cloudTf = `translate3d(0, ${Math.round((1 - liftV) * 11000) / 100}%, 0)`;
      if (cloudTf !== cloudCache) {
        clouds.style.transform = cloudTf;
        cloudCache = cloudTf;
      }
    };

    const opener = reduced ? 1 : 0;
    writeScene(opener);
    for (let i = 0; i < nodes.length; i++) {
      const pose = cardPose(i, dealOrder[i], opener, opener, 0);
      nodes[i].el.style.transform = pose.transform;
      nodes[i].transform = pose.transform;
      nodes[i].el.style.visibility = pose.visibility;
      nodes[i].visibility = pose.visibility;
    }

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const dealV = deal.get();
      const liftV = lift.get();

      if (!g.dragging) {
        g.target += g.velocity * dt;
        g.velocity *= Math.exp(-dt * 3.2);
        if (Math.abs(g.velocity) < 0.01) g.velocity = 0;
      }

      const follow = 1 - Math.exp(-dt * 9);
      g.shown += (g.target - g.shown) * follow;
      if (!reduced) g.drift -= 7 * liftV * dt;

      const spin = g.drift + g.shown;
      writeScene(liftV);

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pose = cardPose(i, dealOrder[i], dealV, liftV, spin);
        if (pose.transform !== node.transform) {
          node.el.style.transform = pose.transform;
          node.transform = pose.transform;
        }
        if (pose.visibility !== node.visibility) {
          node.el.style.visibility = pose.visibility;
          node.visibility = pose.visibility;
        }

        const video = node.video;
        if (!video || reduced) continue;
        const active = liftV > 0.6 && Math.abs(wrap(pose.angle)) < 40;
        if (active) {
          if (video.paused && !node.pending) {
            node.pending = true;
            video.play().then(
              () => {
                node.pending = false;
              },
              () => {
                node.pending = false;
              },
            );
          }
        } else if (!video.paused) {
          video.pause();
        }
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const controls: Array<{ stop: () => void }> = [];
    let ended = false;
    let lifting = false;
    let assetsReady = false;
    let cancelled = false;

    const finish = () => {
      if (ended) return;
      ended = true;
      for (const control of controls) control.stop();
      deal.set(1);
      lift.set(1);
      chrome.set(1);
      setPhase("done");
    };
    finishRef.current = finish;

    const maybeLift = () => {
      if (ended || lifting || !assetsReady || deal.get() < 0.999) return;
      lifting = true;
      setPhase("lifting");
      controls.push(
        animate(lift, 1, {
          duration: 1.9,
          ease: [0.5, 0, 0.15, 1],
          onComplete: () => {
            if (!ended) setPhase("done");
          },
        }),
        animate(chrome, 1, {
          duration: 0.8,
          delay: 1,
          ease: [0.5, 0, 0.15, 1],
        }),
      );
    };

    const cleanVideo: Array<() => void> = [];
    for (const node of nodes) {
      const video = node.video;
      if (!video) continue;
      video.muted = true;
      const onPlaying = () => video.classList.add("is-on");
      const onPause = () => video.classList.remove("is-on");
      video.addEventListener("playing", onPlaying);
      video.addEventListener("pause", onPause);
      cleanVideo.push(() => {
        video.removeEventListener("playing", onPlaying);
        video.removeEventListener("pause", onPause);
        video.pause();
      });
    }

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      const card = (event.target as Element | null)?.closest?.(".wheel-card");
      if (!card) return;
      g.dragging = true;
      g.touch = event.pointerType === "touch";
      g.moved = 0;
      g.totalX = 0;
      g.totalY = 0;
      g.lock = null;
      g.lastX = event.clientX;
      g.lastY = event.clientY;
      g.lastT = performance.now();
      g.velocity = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!g.dragging) return;
      const dx = event.clientX - g.lastX;
      const dy = event.clientY - g.lastY;
      const now = performance.now();
      const dt = (now - g.lastT) / 1000;
      g.lastX = event.clientX;
      g.lastY = event.clientY;
      g.lastT = now;
      g.totalX += dx;
      g.totalY += dy;
      g.moved += Math.abs(dx);

      if (g.touch && !g.lock) {
        if (Math.abs(g.totalX) < 8 && Math.abs(g.totalY) < 8) return;
        g.lock = Math.abs(g.totalX) > Math.abs(g.totalY) ? "spin" : "scroll";
        if (g.lock === "spin") scene.setPointerCapture(event.pointerId);
      }
      if (g.lock === "scroll") {
        g.dragging = false;
        g.velocity = 0;
        return;
      }
      if (!g.touch && g.moved <= 8) return;
      if (!g.touch && !scene.hasPointerCapture(event.pointerId)) {
        scene.setPointerCapture(event.pointerId);
      }

      const deg = dx * DEG_PER_PX;
      g.target += deg;
      if (dt > 0.001 && dt < 0.08) {
        const next = deg / dt;
        g.velocity = Math.max(-540, Math.min(540, next));
      } else {
        g.velocity = 0;
      }
    };

    const onPointerUp = () => {
      if (!g.dragging) return;
      g.dragging = false;
      if (performance.now() - g.lastT > 80) g.velocity = 0;
    };

    const onClick = (event: MouseEvent) => {
      if (g.moved > 8) {
        event.preventDefault();
        event.stopPropagation();
        g.moved = 0;
      }
    };

    const onWheel = (event: WheelEvent) => {
      const band = clouds.getBoundingClientRect();
      const overClouds = band.height > 0 && event.clientY >= band.top;
      const card = (event.target as Element | null)?.closest?.(".wheel-card");
      if (overClouds || !card) return;
      event.preventDefault();
      g.target += (event.deltaY + event.deltaX) * WHEEL_PER_PX;
      g.velocity = 0;
    };

    const onKey = (event: KeyboardEvent) => {
      if (ended || (deal.get() >= 1 && lift.get() >= 1)) return;
      if (event.key === "Escape" || event.key === "Tab") finish();
    };

    scene.addEventListener("pointerdown", onPointerDown);
    scene.addEventListener("pointermove", onPointerMove);
    scene.addEventListener("pointerup", onPointerUp);
    scene.addEventListener("pointercancel", onPointerUp);
    scene.addEventListener("click", onClick, true);
    scene.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);

    const observer = new ResizeObserver(measure);
    observer.observe(frame);

    if (reduced) {
      ended = true;
      deal.set(1);
      lift.set(1);
      chrome.set(1);
      queueMicrotask(() => {
        if (!cancelled) setPhase("done");
      });
    } else {
      deal.set(0);
      lift.set(0);
      chrome.set(0);
      const stopDealWatch = deal.on("change", (value) => {
        if (value >= 0.999) maybeLift();
      });

      const preload = async () => {
        const imgs = [...scene.querySelectorAll<HTMLImageElement>(".wheel-front img")];
        const groups = new Map<string, HTMLImageElement[]>();
        for (const img of imgs) {
          const src = img.getAttribute("src") ?? "";
          const list = groups.get(src);
          if (list) list.push(img);
          else groups.set(src, [img]);
        }
        const scenery = [...frame.querySelectorAll<HTMLImageElement>(".hero-sky img, .hero-clouds img")];
        let done = 0;
        const total = groups.size || 1;
        await Promise.all([
          ...[...groups.values()].map(async (list) => {
            await Promise.all(list.map((img) => decodeElement(img)));
            done += 1;
            if (!cancelled) setProgress(Math.round((done / total) * 100));
          }),
          ...scenery.map((img) => decodeElement(img)),
        ]);
        if (!cancelled && groups.size === 0) setProgress(100);
        if (cancelled || ended) return;
        assetsReady = true;
        setPhase("dealing");
        controls.push(animate(deal, 1, { duration: 2.6, ease: "linear" }));
      };

      void preload();

      return () => {
        cancelled = true;
        ended = true;
        cancelAnimationFrame(raf);
        stopDealWatch();
        for (const control of controls) control.stop();
        for (const clean of cleanVideo) clean();
        observer.disconnect();
        scene.removeEventListener("pointerdown", onPointerDown);
        scene.removeEventListener("pointermove", onPointerMove);
        scene.removeEventListener("pointerup", onPointerUp);
        scene.removeEventListener("pointercancel", onPointerUp);
        scene.removeEventListener("click", onClick, true);
        scene.removeEventListener("wheel", onWheel);
        window.removeEventListener("keydown", onKey);
      };
    }

    return () => {
      cancelled = true;
      ended = true;
      cancelAnimationFrame(raf);
      for (const control of controls) control.stop();
      for (const clean of cleanVideo) clean();
      observer.disconnect();
      scene.removeEventListener("pointerdown", onPointerDown);
      scene.removeEventListener("pointermove", onPointerMove);
      scene.removeEventListener("pointerup", onPointerUp);
      scene.removeEventListener("pointercancel", onPointerUp);
      scene.removeEventListener("click", onClick, true);
      scene.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [chrome, deal, lift]);

  const showCounter = phase === "loading" || phase === "dealing";

  return (
    <section className="hero-wheel" ref={frameRef}>
      {phase !== "done" ? (
        <button type="button" className={`wheel-skip ${focusRing}`} onClick={() => finishRef.current()}>
          Skip intro
        </button>
      ) : null}

      <div className="hero-clip">
        <div className="hero-sky" ref={skyRef} aria-hidden="true">
          {/* Plain img so the entrance can decode the file before the deal starts. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SKY_SRC} alt="" />
        </div>
        <div className="hero-view" ref={viewRef}>
          <div className="hero-scene" ref={sceneRef}>
            {wheelCards.map((card) => (
                <a
                  key={card.index}
                  href={card.href}
                  className={`wheel-card ${focusRing}`}
                  draggable={false}
                >
                  <span className="sr-only">{card.title}</span>
                  <span className="wheel-face wheel-front">
                    <ProjectDemo id={card.id} bare />
                    {card.video ? (
                      <video muted loop playsInline preload="none" src={card.video} />
                    ) : null}
                  </span>
                  <span className="wheel-face wheel-back" aria-hidden="true">
                    <span className="wheel-mark">S</span>
                  </span>
                </a>
            ))}
          </div>
        </div>
        <div className="hero-clouds" ref={cloudRef} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CLOUD_SRC} alt="" />
        </div>
      </div>

      <motion.div className="hero-chrome" style={{ opacity: chrome, y: chromeY }}>
        <h1 className="wheel-name" translate="no">
          {site.displayLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
      </motion.div>

      {phase === "done" ? (
        <a href="#about" className={`wheel-scroll ${focusRing}`}>
          Scroll
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 9.5 12 16l7-6.5" />
          </svg>
        </a>
      ) : null}

      {showCounter ? (
        <p className="wheel-progress" role="status">
          <span className="sr-only">Covers loaded </span>
          {progress}%
        </p>
      ) : null}
    </section>
  );
}
