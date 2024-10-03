/* eslint-disable react/prop-types */
// HeroSection.jsx
import Img1 from '../assets/new-project-img01.jpg';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';


const HeroSection = ({ titleRef }) => {
  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: -180,
      scale: 10.7,
      scrollTrigger: {
        trigger: titleRef.current,
        scroller: "body",
        start: "top 55%",
        end: "bottom -5%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <section
        style={{ backgroundImage: `url(${Img1})` }}
        className="min-h-screen  bg-cover bg-center bg-no-repeat "
      >
      </section>
  );
};

export default HeroSection;
