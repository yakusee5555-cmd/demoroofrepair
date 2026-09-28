import Hero from "../components/Hero";
import { Contact, Reviews } from "../components/Sections";
import { DarkList, FullBleed, Pricing, Stacked, Work } from "../components/Showcase";
import { RouteFX } from "../components/PageBits";

export default function Home() {
  return (
    <>
      <RouteFX
        title="Ironclad Roofing | Roof Repair & Replacement in Newark, NJ"
        description="Ironclad Roofing — roof repair, full roof replacement, storm & hail damage response, and honest roof inspections across Newark and Essex County, NJ. Free estimates."
      />
      <Hero />
      <Stacked />
      <DarkList />
      <FullBleed />
      <Work />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
}
