import { useRef } from "react";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";

const Banner = () => {
  const titleRef = useRef()
  return (
    <div>
      <HeroSection  titleRef={titleRef}/>
      <Navbar titleRef={titleRef} />
    </div>
  );
};

export default Banner;