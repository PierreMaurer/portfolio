import {MoveDown, MoveUpRight} from 'lucide-react'

export const Hero = () => {
  return (
      <div className="ms-36 mt-36">
          <div className="text-[40px] w-4/5">
              <span className="font-satoshi-light">I am a</span> <span className="font-satoshi-medium">fullstack web and mobile</span><span>developer specializing in turning your</span> <span>ambitions</span> <span>into</span> <span>reality.</span>
          </div>
          <div className="mt-22">
              <p className="text-[126px]">Fullstack Developer</p>
              <p className="text-6xl opacity-65 font-satoshi-light">PIERRE MAURER</p>
          </div>
          <div className="flex flex-row justify-between me-36 mt-52">
              <div className="flex flex-row gap-3">
                  <button className="text-4xl">
                      <a href='#'>Book a Call</a>
                  </button>
                  <MoveUpRight />
              </div>
              <div className="flex flex-row gap-3 ">
                  <button className="opacity-75 text-xl">
                      <a href='#'>Scroll to see more</a>
                  </button>
                  <MoveDown />
              </div>
          </div>
      </div>
  )
}
