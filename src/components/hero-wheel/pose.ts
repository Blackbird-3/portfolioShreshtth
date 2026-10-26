export const CARD_COUNT = 34;
export const CARD_W = 168;
export const CARD_H = (CARD_W * 16) / 9;

export function wrap(deg: number) {
  const turned = ((deg % 360) + 540) % 360 - 180;
  return turned === 0 ? 0 : turned;
}

export function homeAngle(index: number) {
  return (index * 360) / CARD_COUNT;
}

function clamp01(t: number) {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return t;
}

function easeOutCubic(t: number) {
  const x = clamp01(t);
  return 1 - (1 - x) ** 3;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function r(n: number) {
  const v = Math.round(n * 100) / 100;
  return v === 0 ? 0 : v;
}

/** Rank by distance from straight up. Left and right share a rank, then / max so the furthest card is 1. */
export function dealOrders() {
  const items = Array.from({ length: CARD_COUNT }, (_, i) => ({
    i,
    key: Math.round(Math.abs(wrap(homeAngle(i))) * 1e6),
  }));
  items.sort((a, b) => a.key - b.key || a.i - b.i);

  const ranks = new Array<number>(CARD_COUNT).fill(0);
  let rank = 0;
  let prev = items[0].key;
  for (const item of items) {
    if (item.key !== prev) {
      rank += 1;
      prev = item.key;
    }
    ranks[item.i] = rank;
  }

  const max = rank || 1;
  return ranks.map((value) => value / max);
}

export const dealOrder = dealOrders();

export type CardPose = {
  transform: string;
  visibility: "visible" | "hidden";
  angle: number;
};

export function cardPose(
  index: number,
  order: number,
  deal: number,
  lift: number,
  spin: number,
): CardPose {
  const p = easeOutCubic((deal - order * 0.6) / 0.4);
  const radius = lerp(580, 1010, lift) * p;
  const pivotY = lerp(500, 814, lift) + (1 - p) * 140;
  const angle = homeAngle(index) + (1 - p) * 70 - 28 * lift + spin;
  const flip = lerp(180, 0, p);
  const scale = lerp(0.7, 1, p) * lerp(1, 1.35, lift);
  const fromTop = Math.abs(wrap(angle));
  const depth = -fromTop * 0.8;

  return {
    angle,
    visibility: fromTop <= 100 ? "visible" : "hidden",
    transform:
      `translate3d(0, ${r(pivotY)}px, ${r(depth)}px) ` +
      `rotateZ(${r(angle)}deg) ` +
      `translate3d(0, ${r(-radius)}px, 0) ` +
      `rotateY(${r(flip)}deg) ` +
      `scale(${r(scale)})`,
  };
}

/** Fit the design-pixel wheel to the hero frame so the lifted top card clears the top edge. */
export function sceneFit(heroHeight: number) {
  const reach = ((1010 - 814) + CARD_H * 1.35) * 1.14;
  const cos = Math.cos((12 * Math.PI) / 180);
  const fit = (heroHeight / 2 - 16) / (reach / cos);
  return Math.max(0.25, fit);
}

export function sceneTransform(fit: number, lift: number) {
  const scale = fit * lerp(1, 1.14, lift);
  return `scale(${r(scale)}) rotateX(${r(12 * lift)}deg)`;
}
