/* eslint-disable react/prop-types */
// Navbar.jsx
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Img2 from '../assets/new-project-img02.jpg';
const Navbar = ({ navRef, dRef }) => {
  useGSAP(() => {
    const tlText = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current,
        scroller: 'body',
        start: 'top 0%',
        end: 'top -100%',
        markers: true,
        pin: true,
        scrub: true,
      },
    });
    tlText.to('.dis', {
      y: 120,
      opacity: 0,
      zIndex: -10,
    });
    tlText.to(dRef.current, {
      y: -130,
      zIndex: 20,
    });
    tlText.to('.dis2', {
      y: 120,
      opacity: 0,
      zIndex: -10,
    });
    tlText.to(dRef.current, {
      y: -260,
      zIndex: 20,
    });
    tlText.to('.dis3', {
      y: 120,
      opacity: 0,
      zIndex: -10,
    });
    tlText.to(dRef.current, {
      y: -390,
      zIndex: 20,
    });
    tlText.to('.dis4', {
      y: 120,
      opacity: 0,
      zIndex: -10,
    });
    tlText.to(dRef.current, {
      y: -490,
      zIndex: 20,
    });
  }, []);

  return (
    <div ref={navRef} className="h-screen w-full bg-gray-400">
      <div className="max-w-7xl mx-auto py-5 border-b-2">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-8 font-bold">
            <p>Article</p>
            <p>Shop</p>
            <p>Submit</p>
          </div>
          <div className="text-lg font-bold">
            <p>(2021), All rights reserved</p>
          </div>
        </nav>
        {/* nav content */}
      </div>
      <div ref={dRef} className="text-center text-9xl font-semibold my-5">
        <h1 className="text-white font-bold dis">Discover</h1>
        <h1 className="italic font-bold dis2">the best in</h1>
        <h1 className="text-white font-bold dis3">minimal</h1>
        <h1 className="text-white font-bold dis4">design</h1>
        <img  className="h-[600px] w-[600px] mx-auto rounded-full" src={Img2} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
