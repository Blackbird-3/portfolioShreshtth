import { About } from "@/components/about";
import { Atmosphere } from "@/components/atmosphere";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <About />
      <Atmosphere />
      <Experience />
      <SelectedWork />
      <Skills />
      <Contact />
    </main>
  );
}
