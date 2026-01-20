import Hero from "../components/sections/Hero";
import Problems from "../components/sections/Problems";
import AboutIntro from "../components/sections/AboutIntro";
import ServicesOverview from "../components/sections/ServicesOverview";
import TrackRecord from "../components/sections/TrackRecord";
import HowWeThink from "../components/sections/HowWeThink";
import WhoWeServe from "../components/sections/WhoWeServe";
import FinalCTA from "../components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <AboutIntro />
      <ServicesOverview />
      <TrackRecord />
      <HowWeThink />
      <WhoWeServe />
      <FinalCTA />
    </>
  );
}
