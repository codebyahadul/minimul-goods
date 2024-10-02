import { useRef,} from 'react';
import Img1 from '../../assets/new-project-img01.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const navTitleRef = useRef(null);

  useGSAP(() => {
    // Pin the navbar so it stays at the top during the scroll
    ScrollTrigger.create({
      trigger: navTitleRef.current,
      start: 'top top', 
      end: '+=100%', 
      pin: true, // Pins the navbar
      pinSpacing: false,
    });
    const tl = gsap.timeline()
    tl.to(titleRef.current, {
        y:50,
        duration: 5,
        fontSize:0,
        opacity: 0,
        scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 50%',
            end: 'top 0%',
            scrub: true,
        }
    })


  }, []);

  return (
    <div className="w-full h-screen relative ">
      <div className="w-full h-full relative flex flex-col">
        <img ref={imgRef} className="w-full h-full object-cover" src={Img1} alt="" />
        <h1 ref={titleRef} className="absolute text-white bottom-0 text-[14vw] font-bold text-center w-full">
          MinimalGoods
        </h1>
      </div>
      <div className="h-screen w-full bg-gray-400 trigger">
        <div className="max-w-7xl mx-auto py-5 border-b-2">
          <nav ref={navTitleRef} className="flex justify-between items-center">
            <div className="flex items-center gap-8 font-bold">
              <p>Article</p>
              <p>Shop</p>
              <p>Submit</p>
            </div>
            <div className="text-lg font-bold">
              <p>(2021), All rights reserved</p>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Banner;
