"use client"
import {Hero} from "@/components/sections/Hero";
import {Profil} from "@/components/sections/Profil";
import {Reviews} from "@/components/sections/Reviews";
import {Slider} from "@/components/sections/projects/Slider";

export default function Home() {
  return (
    <div className="bg-[#1C1C1C] scroll-smooth scrollbar-hide">
      <Hero/>
      <div>
          <Slider/>
        <Profil/>
        <hr/>
        <Reviews/>
        <hr/>
      </div>
    </div>
  );
}
