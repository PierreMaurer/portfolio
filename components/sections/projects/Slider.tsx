"use client"
import dynamic from "next/dynamic"
import {useEffect, useRef, useState} from "react";
import {projects} from "@/components/sections/projects/projects";
import gsap from "gsap";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";


const ReactPlayer = dynamic(() => import("react-player"), { ssr: false});
export const Slider = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        if (isClient && sliderRef.current) {
            initializeCards()
        }
    }, [isClient])

    const initializeCards = () => {
        if (!sliderRef.current) return;
        const cards = Array.from(sliderRef.current.querySelectorAll(".card"));
        gsap.to(cards, {
            y: (i) => 0 + 20 * i + "%",
            z: (i) => 15 * i,
            duration: 1,
            ease: "power3.out",
            stagger: -0.1,
        })
    }

    const handleClick = () => {
        if (isAnimating || !sliderRef.current) return;
        setIsAnimating(true);
        const slider = sliderRef.current;
        const cards = Array.from(slider.querySelectorAll(".card"));
        const lastCard = cards.pop();
        if (!lastCard) return;

        gsap.to(lastCard, {
            y: "+=150%",
            duration: 0.75,
            ease: "power3.inOut",
            onStart: () => {
                setTimeout(()=> {
                    slider.prepend(lastCard);
                    initializeCards();
                    setTimeout(() => {
                        setIsAnimating(false);
                    }, 1000)
                }, 300)
            }
        })
    }
    return (
        <div className="box-border h-full w-full text-[12px] text-[#6a6a6a] font-medium" onClick={handleClick}>
            <div className="container relative w-[100vw] h-[100vh] overflow-hidden">
                <div className="slider absolute top-[5vh] w-[100vw] h-[100vh] perspective-[175px] perspective-origin-[50%_100%] overflow-hidden" ref={sliderRef}>
                    {projects.map((project) => (
                        <div className="card absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[65%] h-[500px] bg-[#000] border-r border-[#303030] rounded-[7px] overflow-hidden
                        flex flex-col" key={project.id}>
                            <div className="w-full px-3 py-2 flex items-center justify-between bg-black z-[2]">
                                <div className="flex-1 text-left">
                                    <p className="text-[7px] text-[#6a6a6a]">
                                        {project.name}
                                    </p>
                                </div>
                                <div className="">
                                    <p className="text-[7px] text-[#6a6a6a]">
                                        PROJECTS
                                    </p>
                                </div>
                                <div className="flex-1 text-right">
                                    <p className="text-[7px] text-[#6a6a6a]">
                                        {project.date}
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex-1 w-full">
                                <div className="absolute bottom-0 mb-5 text-white bg-black z-50 flex flex-row justify-between w-[90%] left-[5%] items-center">
                                    <div className="flex flex-row">
                                        <a href={project.url} target="_blank"><p className="!text-lg font-satoshi-light">See the project</p></a>
                                        <MoveUpRight />
                                    </div>
                                    <div>
                                        <p>{project.description}</p>
                                    </div>
                                    <div>
                                        <p>{project.competencies}</p>
                                    </div>
                                </div>
                                <div className="image-player h-full relative" onClick={(e) => {
                                    e.stopPropagation();
                                    handleClick();
                                }}>
                                    {project.video ? (
                                        <ReactPlayer
                                            url={'https://vimeo.com/1070861527/3f725a319d'}
                                            controls={false}
                                            loop={true}
                                            autoPlay={true}
                                            playing
                                            muted
                                        classname="VideoPlayer"/>
                                    ) : (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.urlImage}
                                                alt={"Screen Skillsnotation"}
                                                fill
                                                style={{objectFit: 'contain'}}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
