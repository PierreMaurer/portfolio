"use client"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ReactLenis} from "lenis/react"
import {useGSAP} from "@gsap/react";
import {useEffect, useRef} from "react";

export const Card = () => {
    const container = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.play().catch(error => {
            console.log("Erreur de lecture vidéo:", error);
        });

        return () => {
            video.pause();
            video.src = '';
        };
    }, []);
    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);
            const cards = document.querySelectorAll(".card");
            const images = document.querySelectorAll(".card img");
            const totalCards = cards.length;
            gsap.set(cards[0], {y: "0%", scale: 1, rotation: 0});
            gsap.set(images[0], {scale: 1});
            for (let i = 1; i < totalCards; i++ ) {
                gsap.set(cards[i], {y: "120%", scale: 1, rotation: 0});
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
                const nextCard = cards[i + 1];
                const position = i * 1.2;

                scrollTimeLine.to(
                    nextCard, {
                        y: "0%",
                        duration: 1.2,
                        ease: "none"
                    },
                    position
                )

                scrollTimeLine.to(
                    currentCard,
                    {
                        scale: 0.5,
                        rotation: 10,
                        duration: 1.2,
                        ease: "none",
                    },
                    position + 0.3
                );
                scrollTimeLine.to(
                    currentImage,
                    {
                        scale: 1.5,
                        duration: 1.2,
                        ease: "none"
                    },
                    position + 0.3
                );
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
                <section className="sticky-cards flex flex-col">
                    <div className="card-container">
                        <div className="card">
                            <div className="tag ">
                                <p>MOIST</p>
                                <a href="https://moist-botw.vercel.app/" target="_blank"><p className="underline underline-offset-2">See the project</p></a>
                            </div>
                            <img
                                src="/img/moist.png"
                                alt="Moist"
                            className=""/>
                            <div className="tagBottom">
                                <p>Fictional project. Promo site for three summer canned drinks with a fresh, playful design for a young audience.</p>
                                <p>Web Development • 3D</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="tag ">
                                <p>SkillsNotation</p>
                            </div>
                            <img
                                src="/img/skillsnotation1.png"
                                alt="Moist"
                                className=""/>
                            <div className="tagBottom">
                                <p>SkillsNotation is Web and mobile app to evaluate the competencies of firefighter during training session</p>
                                <p>Web Design • Web Development • Mobile • Backend</p>
                            </div>
                        </div>
                        <div id="lavue" className="card">
                            <div className="tag">
                                <p>Lavue</p>
                                <a href="https://botw-lavue.vercel.app/" target="_blank"><p className="underline underline-offset-2">See the project</p></a>
                            </div>
                            <div className="videoPlayer">
                                <video
                                    ref={videoRef}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    playsInline
                                    muted
                                    loop
                                    autoPlay
                                >
                                    <source src="/lavue-1.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="tagBottom">
                                <p className="w-[50%]">Fictional project created for a Brief of the Week. A premium fragrance launch website blending regional storytelling with a clean, elegant design.</p>
                                <p>Web Design • Web Development • Mobile • Backend</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ReactLenis>
    )
}
