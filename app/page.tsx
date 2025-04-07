"use client"
import {Hero} from "@/components/sections/Hero";
import {Moist} from "@/components/sections/projects/Moist";
import {Skillsnotation} from "@/components/sections/projects/Skillsnotation";
import {Lavue} from "@/components/sections/projects/Lavue";
import {Profil} from "@/components/sections/Profil";
import {Reviews} from "@/components/sections/Reviews";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const moistOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const lavueOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 1]);
  const skillsnotationOpacity = useTransform(scrollYProgress, [0.6, 0.8, 0.9], [0, 1, 1]);

  const moistY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const lavueY = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const skillsnotationY = useTransform(scrollYProgress, [0.7, 1], [100, 0]);

  return (
    <div className="bg-[#1C1C1C] scroll-smooth scrollbar-hide">
      <Hero/>
      <div ref={containerRef} className="relative h-[300vh]">
        <div className="h-[100vh]">
          <motion.div
            style={{ opacity: moistOpacity, y: moistY }}
            className="sticky top-0 h-screen flex items-center"
          >
            <Moist/>
          </motion.div>
        </div>
        <div className="h-[100vh]">
          <motion.div
            style={{ opacity: lavueOpacity, y: lavueY }}
            className="sticky top-0 h-screen flex items-center"
          >
            <Lavue/>
          </motion.div>
        </div>
        <div className="h-[100vh]">
          <motion.div
            style={{ opacity: skillsnotationOpacity, y: skillsnotationY }}
            className="sticky top-0 h-screen flex items-center"
          >
            <Skillsnotation/>
          </motion.div>
        </div>
      </div>
      <div className="relative">
        <Profil/>
        <hr/>
        <Reviews/>
        <hr/>
      </div>
    </div>
  );
}
