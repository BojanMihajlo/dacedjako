import HomeHero from "./HomeHero";
import About from "./About";
import Services from "./Services";
import Clients from "./Clients";
import { useOutletContext } from "react-router-dom";

const Interface = () => {
  const [subtitleState] = useOutletContext();
  return (
    <>
      <HomeHero subtitleState={subtitleState} />
      <About subtitleState={subtitleState} />
      <Services subtitleState={subtitleState} />
      <Clients subtitleState={subtitleState} />
    </>
  );
};

export default Interface;
