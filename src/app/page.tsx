import { About } from "@/components/about";
import { Atmosphere } from "@/components/atmosphere";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Experiments } from "@/components/experiments";
import { Hero } from "@/components/hero";
import { Proof } from "@/components/proof";
import { SelectedWork } from "@/components/selected-work";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <Proof />
      <SelectedWork />
      <Experiments />
      <Experience />
      <Atmosphere />
      <About />
      <Contact />
    </main>
  );
}
