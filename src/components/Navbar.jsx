/* eslint-disable react/prop-types */
// Navbar.jsx
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Img2 from '../assets/new-project-img02.jpg';
import Img1 from '../assets/new-project-img01.jpg';
import { useRef } from 'react';
import Furniture from './Furniture';
const Navbar = () => {
  const imgRef = useRef()
  const navRef = useRef()
  const dRef = useRef()
  const titleRef = useRef()
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
      background: '#424142'
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
      y: -100,
      zIndex: 10,

      opacity: 1,
    })
    tl.to('.dis3', {
      y: 150,
      zIndex: -10,
      opacity: 0,
    })
    tl.to(dRef.current, {
      y: -100,
      zIndex: 10,
      opacity: 1,
    })
    tl.to('.dis4', {
      y: 50,
      zIndex: -10,
      opacity: 0,
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
        start: "top 15%",
        end: "bottom 80%",
        pin: true
      }
    })

  }, []);
  return (
    <>
      <section
        style={{ backgroundImage: `url(${Img1})` }}
        className="min-h-screen  bg-cover bg-center bg-no-repeat "
      >
      </section>
      <div>
        <div ref={navRef} className="px-8 w-full top-0 " >
          <nav
            className="text-white w-full  font-medium text-base flex justify-between py-7 border-b nav"
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
        <div className='text-center text-9xl font-semibold h-screen'>
          <div ref={dRef} className=' flex flex-col justify-center items-center'>
            <h1 className='text-white font-bold dis mt-10'>Discover</h1>
            <h1 className='italic font-bold dis2'>the best in</h1>
            <h1 className='text-white font-bold dis3'>minimal</h1>
            <h1 className='text-white font-bold dis4'>design</h1>
          </div>
          <div id="banner-image-container" className="flex items-center justify-center min-h-[calc(100vh-100px)] max-w-9xl mx-auto" >
            <div ref={imgRef} style={{ backgroundImage: `url(${Img2})` }} className="min-h-96 min-w-96 bg-center bg-no-repeat bg-cover rounded-full " >
            </div>
          </div>
        </div>
        <div className='min-h-screen'></div>
        <Furniture />
      </div>
    </>
  );
};

export default Navbar;
