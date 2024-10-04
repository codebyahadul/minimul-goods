/* eslint-disable react/prop-types */
// Navbar.jsx
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Img2 from '../assets/new-project-img02.jpg';
import Img1 from '../assets/new-project-img01.jpg';
import { useRef } from 'react';
import fur1 from '../assets/new-project-img03.jpeg';
import fur2 from '../assets/new-project-img04.jpeg';
import fur3 from '../assets/new-project-img05.jpeg';
import fur4 from '../assets/new-project-img06.jpeg';
import decor1 from '../assets/new-project-img07.jpeg';
import decor2 from '../assets/new-project-img08.jpeg';
import decor3 from '../assets/new-project-img09.jpeg';
import decor4 from '../assets/new-project-img10.jpeg';
import office1 from '../assets/new-project-img11.jpeg';
import office2 from '../assets/new-project-img12.jpeg';
import office3 from '../assets/new-project-img13.jpeg';
import office4 from '../assets/new-project-img14.jpeg';
const Navbar = () => {
  const imgRef = useRef()
  const navRef = useRef()
  const dRef = useRef()
  const titleRef = useRef()
  const productRef = useRef()

  var text = ['Furniture', 'Decor']
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
        // markers: true,
        start: "top 15%",
        end: "bottom 80%",
        pin: true
      }
    })

    const pTL = gsap.timeline({
      scrollTrigger: {
        trigger: productRef.current,
        scroller: 'body',
        start: 'top 0%',
        end: 'top -100%',
        scrub: true,
        markers: true,
        pin: true,
      }
    });
    pTL
      .to('.text-container', {
        y: '-100%'
      })
      .to('.furniture div', {opacity: 1, y: '-200%', duration: 2.5,})
      .fromTo('.head1', {opacity: 1,}, {opacity: 0})
      .fromTo('.head2', {opacity: 0,}, {opacity: 1,})
      .to('.decor div', {opacity: 1, y: '-200%', duration: 2.5,})
      .fromTo('.head2', {opacity: 1,}, {opacity: 0})
      .fromTo('.head3', {opacity: 0,}, {opacity: 1,})
      .to('.office div', {opacity: 1, y: '-200%', duration: 2.5,})
  }, []);
  return (
    <>
      <section
        style={{ backgroundImage: `url(${Img1})` }}
        className="min-h-screen  bg-cover bg-center bg-no-repeat "
      >
      </section>
      <div className='bg-[#424142] main'>
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
        <div ref={productRef} className='min-h-screen'>
          <div className='min-h-screen max-w-7xl mx-auto flex flex-col justify-between '>
            <div className='space-y-3 mt-10 text-container'>
              <div className='flex justify-center items-center gap-10 text-2xl font-medium *:border-2 *:rounded-full *:px-8 *:py-2'>
                <button>Travel</button>
                <button>Travel</button>
                <button>Travel</button>
                <button>Travel</button>
                <button>Travel</button>
              </div>
              <div className='flex justify-center items-center gap-10 text-2xl font-medium *:border-2 *:rounded-full *:px-8 *:py-2'>
                <button>Travel</button>
                <button>Travel</button>
                <button>Travel</button>
                <button>Travel</button>
              </div>
              <div className='flex justify-center items-center gap-10 text-2xl font-medium *:border-2 *:rounded-full *:px-8 *:py-2'>
                <button>Travel</button>
                <button>Travel</button>
                <button>Travel</button>
              </div>
            </div>
            <div>
              {/* furniture div */}
              <div className='absolute bottom-0 furniture'>
                <h1 className='text-[200px] font-black head1 absolute opacity-100 '>Furniture</h1>
                <div className=' flex gap-10 max-w-7xl office mx-auto opacity-0'>
                  <img className='w-[350px] h-[300px] -mt-20' src={fur1} alt="" />
                  <img className='w-[300px] h-[300px] mt-10' src={fur2} alt="" />
                  <img className='w-[300px] h-[300px] -mt-20' src={fur3} alt="" />
                  <img className='w-[300px] h-[300px]' src={fur4} alt="" />
                </div>
              </div>
              <div className='absolute bottom-0 decor'>
                <h1 className='text-[200px] font-black head2 absolute opacity-0 '>Decor</h1>
                <div className=' flex gap-10 max-w-7xl office mx-auto opacity-0'>
                  <img className='w-[350px] h-[300px] -mt-20' src={decor1} alt="" />
                  <img className='w-[300px] h-[300px] mt-10' src={decor2} alt="" />
                  <img className='w-[300px] h-[300px] -mt-20' src={decor3} alt="" />
                  <img className='w-[300px] h-[300px]' src={decor4} alt="" />
                </div>
              </div>
              <div className='absolute bottom-0 office'>
                <h1 className='text-[200px] font-black head3 absolute opacity-0 '>Office</h1>
                <div className=' flex gap-10 max-w-7xl office mx-auto opacity-0'>
                  <img className='w-[350px] h-[300px] -mt-20' src={office1} alt="" />
                  <img className='w-[300px] h-[300px] mt-10' src={office2} alt="" />
                  <img className='w-[300px] h-[300px] -mt-20' src={office3} alt="" />
                  <img className='w-[300px] h-[300px]' src={office4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
