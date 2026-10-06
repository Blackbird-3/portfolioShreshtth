import type { Metadata } from "next";
import Link from "next/link";
import { PageFoot } from "@/components/page-foot";
import { ScaleColumn } from "@/components/scale-column";
import { textLink } from "@/lib/styles";

export const metadata: Metadata = {
  title: "About",
  description: "Shreshtth Kumar Agarwaal, an AI engineer studying in Amberg.",
};

export default function AboutPage() {
  return (
    <main id="content">
      <ScaleColumn className="my-12 sm:my-16">
        <header className="text-center">
          <p className="chapter-num">II</p>
          <h1 className="chapter-title">About</h1>
        </header>
        <div className="about-copy mt-10">
          <p>
            I&apos;m Shreshtth, an AI engineer studying in Amberg. The program is
            artificial intelligence for industrial applications at OTH Amberg-Weiden.
          </p>
          <p>
            Three pieces are on{" "}
            <Link href="/work" className={textLink}>
              Work
            </Link>
            : a voice platform, a chest X-ray study with Grad-CAM, and EduQuery,
            which answers from university policy pages. The links under this note
            are how to reach me.
          </p>
        </div>
        <PageFoot />
      </ScaleColumn>
    </main>
  );
}
