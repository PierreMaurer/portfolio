import Image from "next/image";
import { MoveUpRight} from 'lucide-react'

export const Skillsnotation = () => {
  return (
      <div className="bg-[#1C1C1C]">
          <hr/>
          <div className="flex flex-col ms-36 me-36 mt-10 mb-10">
              <div className="flex flex-col gap-7">
                  <div className="flex flex-col gap-5">
                      <p className="text-5xl">SkillsNotation</p>
                      <p>2024 - NOW</p>
                  </div>
                  <div className="flex flex-row justify-between text-2xl gap-20">
                      <p className="w-auto">SkillsNotation is Web and mobile app to evaluate the competencies of firefighter during training session</p>
                      <p className="w-auto">Fire Department • Police Department • Army • Hospital</p>
                      <p className="w-auto">Web Design • Web Development • Mobile • Backend</p>
                  </div>
                  <div className="mt-2 flex flex-row gap-2">
                      <p className="text-2xl">See the project</p>
                      <MoveUpRight />
                  </div>
                  <div className="w-full flex flex-col items-center mt-2">

                      <Image src={'/img/skillsnotation1.png'} alt={"Screen Skillsnotation"}
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
