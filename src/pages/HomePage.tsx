import AboutProjects from "../components/AboutProjects";
import Clients from "../components/Clients";
import Hero from "../components/Hero";
import Quality from "../components/Quality";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutProjects />
      <Quality />
      <WhyUs />
      <Clients />
    </>
  );
}
