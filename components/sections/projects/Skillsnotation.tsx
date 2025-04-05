import Image from "next/image";
import { MoveUpRight} from 'lucide-react'

export const Skillsnotation = () => {
  return (
      <div className="flex flex-col ms-36 me-36 mt-36 mb-10 bg-[#1C1C1C]">
          <div>
              <hr/>
          </div>
          <div className="mt-20 flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                  <p className="text-5xl">SkillsNotation</p>
                  <p>2024 - NOW</p>
              </div>
              <div className="flex flex-row justify-between text-2xl">
                  <p className="w-auto">SkillsNotation is Web and mobile app to evaluate the competencies of firefighter during training session</p>
                  <p className="w-auto">Fire Department • Police Department • Army • Hospital</p>
                  <p className="w-auto">Web Design • Web Development • Mobile • Backend</p>
              </div>
              <div className="mt-10 flex flex-row gap-2">
                  <p className="text-2xl">See the project</p>
                  <MoveUpRight />
              </div>
              <div className="w-full flex flex-col items-center mt-20">

                  <Image src={'/img/skillsnotation1.png'} alt={"Screen Skillsnotation"}
                         width={1280}
                         height={832}
                  className="rounded-3xl"
                  />
              </div>
          </div>
      </div>
  )
}
