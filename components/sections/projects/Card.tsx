"use client"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";

import {ReactLenis, useLenis} from "lenis/react"
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false});

export const Card = () => {
    const lenis = useLenis(({scroll}) => {});
    const container = useRef(null);
    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);
            const cards = document.querySelectorAll(".card");
            const images = document.querySelectorAll(".card img");
            console.log(cards, images)
            const totalCards = cards.length;
            console.log("NOMBRE", totalCards)

            gsap.set(cards[0], {y: "0%", scale: 1, rotation: 0});
            gsap.set(images[0], {scale: 1});

            for (let i = 1; i < totalCards; i++ ) {
                gsap.set(cards[i], {y: "100%", scale: 1, rotation: 0});
                gsap.set(images[i], {scale: 1});
            }

            const scrollTimeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sticky-cards",
                    start: "top top",
                    end: `+=${window.innerHeight * (totalCards - 1)}`,
                    pin: true,
                    scrub: 0.5,
                }
            })

            for (let i = 0; i < totalCards - 1; i++) {
                const currentCard = cards[i];
                const currentImage = images[i];
                console.log(cards[i + 1]);
                const nextCard = cards[i + 1];
                const position = i;

                scrollTimeLine.to(
                    currentCard,
                    {
                        scale: 0.5,
                        rotation: 10,
                        duration: 1,
                        ease: "none",
                    },
                    position
                );
                scrollTimeLine.to(
                    currentImage,
                    {
                        scale: 1.5,
                        duration: 1,
                        ease: "none"
                    },
                    position
                );
                scrollTimeLine.to(
                    nextCard, {
                        y: "0%",
                        duration: 1,
                        ease: "none"
                    },
                    position
                )
            }
            return () => {
                scrollTimeLine.kill();
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        },
    {scope: container}
    )
    return (
        <ReactLenis root>
            <div className="containercards container m-0 p-0 box-border w-full h-full relative" ref={container}>
                <section className="sticky-cards">
                    <div className="card-container">
                        <div className="card">
                            <div className="tag ">
                                <p>MOIST</p>
                                <a href="https://moist-botw.vercel.app/" target="_blank"><p>See the project</p></a>
                            </div>
                            <img
                                src="/img/moist.png"
                                alt="Moist"
                            className=""/>
                        </div>
                        <div className="card">
                            <div className="tag ">
                                <p>Lavue</p>
                                <a href="https://botw-lavue.vercel.app/" target="_blank"><p>See the project</p></a>
                            </div>
                            <ReactPlayer
                                url={'https://vimeo.com/1070861527/3f725a319d'}
                                controls={false}
                                loop={true}
                                autoPlay={true}
                                playing
                                muted
                                width="100%"
                                height="100%" />
                        </div>
                        <div className="card">
                            <div className="tag ">
                                <p>SkillsNotation</p>
                            </div>
                            <img
                                src="/img/skillsnotation1.png"
                                alt="Moist"
                                className=""/>
                        </div>
                    </div>
                </section>
            </div>
        </ReactLenis>
    )
}
