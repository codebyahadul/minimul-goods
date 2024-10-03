/* eslint-disable react/prop-types */
// Navbar.jsx
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Img2 from '../assets/new-project-img02.jpg';
import { useRef } from 'react';

const Navbar = ({ titleRef }) => {
  const imgRef = useRef()
  const navRef = useRef()
  const dRef = useRef()
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current,
        scroller: "body",
        scrub: 5.5,
        start: "top -5%",
        end: "top 0%",
      },
    })
    tl.to(navRef.current, {
      position: "sticky",
      zIndex: 50,
    })
    tl.to('.dis', {
      y: 100,
      zIndex: -10,
      
      opacity: 0,
    })
    tl.to(dRef.current, {
      y: -100,
      zIndex: 10,
      
      opacity: 1,
    })
    tl.to('.dis2', {
      y: 100,
      zIndex: -10,
      
      opacity: 0,
    })
    tl.to(dRef.current, {
      y: -200,
      zIndex: 10,
      
      opacity: 1,
    })
    tl.to('.dis3', {
      y: 100,
      zIndex: -10,
      
      opacity: 0,
    })
    tl.to(dRef.current, {
      y: -300,
      zIndex: 10,
      
      opacity: 1,
    })
    tl.to('.dis4', {
      y: 100,
      zIndex: -10,
      
      opacity: 0,
    })
    tl.to(dRef.current, {
      y: -600,
      zIndex: 10,
      
      opacity: 1,
    })

    tl.to(imgRef.current, {
      height: "100%",
      width: "100%",
      duration: 3,
      y: -15,
      borderRadius: "0px",
      scrollTrigger: {
        trigger: "#banner-image-container",
        scrub: true,
        // markers: true,
        start: "top 15%",
        end: "bottom 80%",
        pin: true
      }
    })
  }, []);

  return (
    <div>

      <div ref={navRef} className="px-8 w-full top-0 bg-gray-600 " >
        <nav
          className="text-white w-full  font-medium text-base flex justify-between py-7 border-b "
        >
          <ul className="flex items-center gap-3">
            <li>ARTICLES</li>
            <li>SHOP</li>
            <li>SUBMIT</li>
          </ul>
          <h1 ref={titleRef} className="font-bold text-xl">
            MinimalGoods
          </h1>
          <h2>(2021), All rights reserved</h2>
        </nav>
      </div>
      <div className='text-center text-9xl font-semibold h-screen bg-gray-600'>
        <div ref={dRef} className=' flex flex-col justify-center items-center'>
          <h1 className='text-white font-bold dis'>Discover</h1>
          <h1 className='italic font-bold dis2'>the best in</h1>
          <h1 className='text-white font-bold dis3'>minimal</h1>
          <h1 className='text-white font-bold dis4'>design</h1>
        </div>
        <div id="banner-image-container" className="flex items-center justify-center bg-gray-600 min-h-[calc(100vh-100px)] max-w-full" >
          <div ref={imgRef} style={{ backgroundImage: `url(${Img2})` }} className="min-h-96 min-w-96 bg-center bg-no-repeat bg-cover rounded-full " >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
