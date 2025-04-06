import {Hero} from "@/components/sections/Hero";
import {Moist} from "@/components/sections/projects/Moist";
import {Skillsnotation} from "@/components/sections/projects/Skillsnotation";
import {Lavue} from "@/components/sections/projects/Lavue";
import {Profil} from "@/components/sections/Profil";
import {Reviews} from "@/components/sections/Reviews";

export default function Home() {
  return (
    <div className="bg-[#1C1C1C] scroll-smooth scrollbar-hide">
      <Hero/>
      <div className="relative">
        <div className="sticky top-0 z-0">
          <Moist/>
        </div>
        <div className="sticky top-0 z-5">
          <Lavue/>
        </div>
        <div className="sticky top-0 z-10">
          <Skillsnotation/>
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
