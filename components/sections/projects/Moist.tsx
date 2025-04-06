import Image from "next/image";
import { MoveUpRight} from 'lucide-react'

export const Moist = () => {
  return (
      <div className="bg-[#1C1C1C]">
          <hr/>
          <div id="project" className="flex flex-col ms-36 me-36 mt-10 mb-10 h-[200%] ">
              <div className="flex flex-col gap-7">
                  <div className="flex flex-col gap-5">
                      <p className="text-5xl">Moist</p>
                      <p>2025</p>
                  </div>
                  <div className="flex flex-row text-2xl gap-20">
                      <p className="w-[50%]">Fictional project created for a Brief of the Week. Promotional website for a summer collection of three new canned drinks, featuring a fresh and playful design aimed at a young audience.</p>
                      <p className="w-[30%]">Web Development • 3D </p>
                  </div>
                  <div className="mt-2 flex flex-row gap-2">
                      <p className="text-2xl">See the project</p>
                      <MoveUpRight />
                  </div>
                  <div className="w-full flex flex-col items-center mt-2 w-[50%]">

                      <Image src={'/img/moist.png'} alt={"Screen Skillsnotation"}
                             width={1024}
                             height={666}
                             className="rounded-3xl"
                      />
                  </div>
              </div>
          </div>
      </div>
  )
}
