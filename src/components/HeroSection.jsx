// HeroSection.jsx
import Img1 from '../assets/new-project-img01.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ titleRef }) => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(titleRef.current, {
      y: 50,
      fontSize: 0,
      opacity: 0,
      zIndex: 20,
      duration: 3,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 50%',
        end: 'top 0%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full h-full relative flex flex-col">
      <img className="w-full h-full object-cover" src={Img1} alt="" />
      <h1 ref={titleRef} className="absolute text-white bottom-0 text-[14vw] font-bold text-center w-full">
        MinimalGoods
      </h1>
    </div>
  );
};

export default HeroSection;
