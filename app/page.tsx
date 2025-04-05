import {Hero} from "@/components/sections/Hero";
import {Moist} from "@/components/sections/projects/Moist";
import {Skillsnotation} from "@/components/sections/projects/Skillsnotation";
import {Lavue} from "@/components/sections/projects/Lavue";
import {Profil} from "@/components/sections/projects/Profil";

export default function Home() {
  return (
    <div className="bg-[#1C1C1C] scroll-smooth">
      <Hero/>
        <div className=" ">
          <Moist/>
        </div>
        <div className="">
          <Lavue/>
        </div>
        <div className="sticky">
          <Skillsnotation/>
        </div>
      <Profil/>
    </div>
  );
}
