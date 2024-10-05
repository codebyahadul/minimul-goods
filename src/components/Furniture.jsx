import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import image1 from "../assets/new-project-img03.jpeg";
import image2 from "../assets/new-project-img04.jpeg";
import image3 from "../assets/new-project-img04.jpeg";
import image4 from "../assets/new-project-img04.jpeg";
import image5 from "../assets/new-project-img05.jpeg";
import image6 from "../assets/new-project-img06.jpeg";
import image7 from "../assets/new-project-img07.jpeg";
import image8 from "../assets/new-project-img08.jpeg";
import image9 from "../assets/new-project-img09.jpeg";
import image10 from "../assets/new-project-img10.jpeg";
import image11 from "../assets/new-project-img11.jpeg";
import image12 from "../assets/new-project-img12.jpeg";
import image13 from "../assets/new-project-img13.jpeg";
import image14 from "../assets/new-project-img14.jpeg";
import image15 from "../assets/new-project-img15.jpeg";
import image16 from "../assets/new-project-img16.jpeg";
import image17 from "../assets/new-project-img17.jpeg";
import image18 from "../assets/new-project-img18.jpeg";
import image19 from "../assets/new-project-img19.jpeg";
import image20 from "../assets/new-project-img20.jpeg";

export default function Furniture() {
    const [activeTitle, setActiveTitle] = useState(0);
    const imgSectionCardRef = useRef([]);
    
    const imageCollections = [
        [image1, image2, image3, image4],
        [image5, image6, image7, image8, image9, image10],
        [image11, image12, image13, image14],
        [image15, image16, image17, image18, image19, image20],
    ];

    const titles = ["Furniture", "Chair", "Office", "Tech"];

    useGSAP(() => {
        let ItemsTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#items-title-container",
                scroller: "body",
                start: "top 50%",
                end: "bottom -30%",
                scrub: true,
            },
        });

        ItemsTl.to("#items-title-container h1", { position: "sticky" });

        imgSectionCardRef.current.forEach((div, idx) => {
            const imgElements = div.querySelectorAll("img");

            let imgSectionTl = gsap.timeline({
                scrollTrigger: {
                    trigger: div,
                    scroller: "body",
                    start: `top ${idx === 0 ? "10%" : "80%"}`,
                    markers: true,
                    end: `bottom ${idx === 1 || idx === 3 ? "70%" : "top"}`,
                    scrub: 2,
                    onEnter: () => setActiveTitle(idx),
                    onEnterBack: () => setActiveTitle(idx),
                },
            });
            imgElements.forEach((img, imgIdx) => {
                imgSectionTl.to(
                    img,
                    {
                        y: imgIdx === 1 || imgIdx === 2 || imgIdx === 4 ? -100 : imgIdx === 5 && -230,
                    },
                    0
                );
            });
        });
    });

    return (
        <section id="items-title-container">
            <div className="space-y-3 text-container">
                {[...Array(3)].map((_, idx) => (
                    <div key={idx} className="flex justify-center items-center gap-5 text-2xl font-medium *:border-2 *:rounded-full *:px-8 *:py-2 *:border-black">
                        <button>Travel</button>
                        <button>Travel</button>
                        <button>Travel</button>
                        <button>Travel</button>
                        {idx < 2 && <button>Travel</button>}
                    </div>
                ))}
            </div>

            <section className="px-7">
                {titles.map((text, idx) => (
                    <h1
                        key={idx}
                        className={`text-[15vw] top-[50%] font-bold ${idx === activeTitle ? "block" : "hidden"}`}
                    >
                        {text}
                    </h1>
                ))}

                <section className="space-y-52">
                    {imageCollections.map((images, index) => (
                        <div
                            key={index}
                            ref={(el) => (imgSectionCardRef.current[index] = el)}
                            id="img-section"
                            className={`${index === 1 || index === 3 ? "min-h-[150vh]" : "min-h-screen"} relative`}
                        >
                            {images.map((image, idx) => (
                                <img
                                    key={idx}
                                    src={image}
                                    alt=""
                                    className={`absolute ${(idx === 0 && "max-h-80") ||
                                        (idx === 1 && "max-h-80 left-[60%] top-5") ||
                                        (index === 1 || index === 3
                                            ? idx === 2 && "max-h-72 top-[20%] left-[30%]"
                                            : idx === 2 && "max-h-[32rem] top-[30%] left-[30%]") ||
                                        (index === 1 || index === 3
                                            ? idx === 3 && "max-h-[60vh] top-[25%] right-0"
                                            : idx === 3 && "max-h-[60vh] bottom-0 right-0") ||
                                        (idx === 4 && "max-h-[60vh] bottom-0 left-0") ||
                                        (idx === 5 && "max-h-80 bottom-0 left-[30%]")}`}
                                />
                            ))}
                        </div>
                    ))}
                </section>

                <div className="min-h-[70vh]"></div>
            </section>
        </section>
    );
}
