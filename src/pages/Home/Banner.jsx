// import { useRef, } from 'react';
// import Img1 from '../../assets/new-project-img01.jpg';
// import Img2 from '../../assets/new-project-img02.jpg';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(ScrollTrigger);

// const Banner = () => {
//   const titleRef = useRef(null);
//   const dRef = useRef(null);
//   const navRef = useRef(null);
//   const imgRef = useRef(null);

//   useGSAP(() => {
//     const tl = gsap.timeline()
//     tl.to(titleRef.current, {
//       y: 50,
//       fontSize: 0,
//       opacity: 0,
//       duration: 3,
//       scrollTrigger: {
//         trigger: titleRef.current,
//         start: 'top 50%',
//         end: 'top 0%',
//         scrub: true,
//       }
//     })
//     const tlText = gsap.timeline({
//       scrollTrigger: {
//         trigger: navRef.current,
//         scroller: 'body',
//         start: 'top 0%',
//         end:'top -100%',
//         markers: true,
//         pin: true,
//         scrub: true,
//       }
//     })
//     tlText.to('.dis', {
//       y: 120,
//       opacity: 0,
//       zIndex: -10,
//     })
//     tlText.to(dRef.current, {
//       y: -130,
//       zIndex: 20,
//     })
//     tlText.to('.dis2', {
//       y: 120,
//       opacity: 0,
//       zIndex: -10,
//     })
//     tlText.to(dRef.current, {
//       y: -260,
//       zIndex: 20,  
//     })
//     tlText.to('.dis3', {
//       y: 120,
//       opacity: 0,
//       zIndex: -10,
//     })
//     tlText.to(dRef.current, {
//       y: -390,  
//       zIndex: 20,
//     })
//     tlText.to('.dis4', {
//       y: 120,
//       opacity: 0,
//       zIndex: -10,
//     })
//     tlText.to(dRef.current, {
//       y: -490,  
//       zIndex: 20,
//     })
//     tlText.to(navRef.current, {
//       display: 'fixed',
//       top: 0,
//     })

//   }, []);
//   return (
//     <div id='banner-container' className="w-full h-screen relative">
//       <div className="w-full h-full relative flex flex-col">
//         <img className="w-full h-full object-cover" src={Img1} alt="" />
//         <h1 ref={titleRef} className="absolute text-white bottom-0 text-[14vw] font-bold text-center w-full">
//           MinimalGoods
//         </h1>
//       </div>
//       <div ref={navRef} className="h-screen w-full bg-gray-400">
//         <div className="max-w-7xl mx-auto py-5 border-b-2">
//           <nav className="flex justify-between items-center">
//             <div className="flex items-center gap-8 font-bold">
//               <p>Article</p>
//               <p>Shop</p>
//               <p>Submit</p>
//             </div>
//             <div className="text-lg font-bold">
//               <p>(2021), All rights reserved</p>
//             </div>
//           </nav>
//           {/* nav content */}
//         </div>
//         <div ref={dRef} className='text-center text-9xl font-semibold my-5'>
//           <h1 className='text-white font-bold dis'>Discover</h1>
//           <h1 className='italic font-bold dis2'>the best in</h1>
//           <h1 className='text-white font-bold dis3'>minimal</h1>
//           <h1 className='text-white font-bold dis4'>design</h1>
//           <img ref={imgRef} className='h-[600px] w-[600px] mx-auto rounded-full' src={Img2} alt="" />
//         </div>
//       </div>
//       <div className='min-h-screen'>

//       </div>
//     </div>
//   );
// };

// export default Banner;

// Banner.jsx
import { useRef } from 'react';// Adjust the import path as necessary
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';

const Banner = () => {
  const titleRef = useRef(null);
  const dRef = useRef(null);
  const navRef = useRef(null);
  const imgRef = useRef(null);

  return (
    <div id="banner-container" className="w-full h-screen relative">
      <HeroSection titleRef={titleRef} />
      <Navbar navRef={navRef} dRef={dRef} imgRef={imgRef} />
    </div>
  );
};

export default Banner;
