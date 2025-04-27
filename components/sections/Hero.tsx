import {MoveDown, MoveUpRight} from 'lucide-react'

export const Hero = () => {
  return (
      <div className="
      ms-10
      xl:ms-36 mt-36
      pb-2


      ">
          <div className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          2xl:text-5xl xl:w-4/5

          ">
              <span className="font-satoshi-light">I am a</span> <span className="font-satoshi-medium">fullstack web and mobile</span><span> developer specializing in turning your</span> <span className="font-satoshi-medium">ambitions</span> <span>into</span> <span className="font-satoshi-medium">reality.</span>
          </div>
          <div className="mt-22

          ">
              <p className="
              text-4xl
              sm:text-6xl
              lg:text-7xl
              xl:text-[126px]">Fullstack Developer</p>
              <p className="
              opacity-65 font-satoshi-light text-3xl
              sm:text-4xl
              lg:text-6xl">PIERRE MAURER</p>
          </div>

          <div className="flex flex-row justify-between

          me-5
          mt-30
          xl:me-36 lg:mt-52

          ">
              <div className="flex flex-row gap-3">
                  <div>
                  <button className="text-2xl lg:text-4xl hover:underline hover:underline-offset-8">
                      <a href='https://calendly.com/maurer-developpement/30min' target="_blank">Book a Call</a>
                  </button>
              </div>
                  <div>
                    <MoveUpRight />
                  </div>
              </div>
              <div className="flex flex-row gap-3

              ">
                  <button className="opacity-75
                   text-sm
                   sm:text-lg
                  xl:text-xl ">
                      <a href='#'>Scroll to see more</a>
                  </button>
                  <MoveDown />
              </div>
          </div>
      </div>
  )
}
