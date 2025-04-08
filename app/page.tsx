"use client"
import {Hero} from "@/components/sections/Hero";
import {Profil} from "@/components/sections/Profil";
import {Card} from "@/components/sections/projects/Card";

export default function Home() {
  return (
    <div className="bg-[#1C1C1C] scroll-smooth scrollbar-hide">
      <Hero/>
      <div>
          <Card/>
        <Profil/>
        <hr/>
      </div>
    </div>
  );
}
