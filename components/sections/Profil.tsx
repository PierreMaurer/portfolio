import Image from "next/image";
import {MoveUpRight} from "lucide-react";

export const Profil = () => {
  return (
      <div className="flex flex-col ms-36 me-36 mt-36 mb-10">
          <div>
              <p className="text-5xl">About me</p>
          </div>
          <div className="flex flex-row gap-36 mt-20">
              <div className="w-[450px] h-[600px] relative">
                  <Image
                    src={'/img/me.png'}
                    alt={'Photo of me'}
                    fill
                    style={{objectFit: 'cover'}}
                    className="rounded-3xl"
                  />
              </div>
              <div className="w-[50%]">
                  <p className="text-7xl">I am a <strong>fullstack web and mobile</strong> developer specializing in turning your <strong>ambitions</strong> into <strong>reality</strong>.</p>
              </div>
          </div>
          <div className="flex flex-row justify-between mt-20 text-2xl">
              <div className="flex flex-col justify-between">
                  <div className="flex flex-row gap-2">
                      <p className="font-medium">Contact :</p>
                      <p>contact@maurer-developpement.fr</p>
                  </div>
                  <div className="flex flex-row gap-2">
                      <p className="font-medium">Social: </p>
                      <p>M</p>
                      <p>LK</p>
                      <p>X</p>
                  </div>
              </div>
              <div className="flex flex-col gap-10">
                  <div className="flex flex-row gap-2">
                      <p className="font-medium">Front end :</p>
                      <p>React • Tailwind • ThreeJS • NextJS • Angular</p>
                  </div>
                  <div className="flex flex-row gap-2">
                      <p className="font-medium">Back end :</p>
                      <p>Javascript • NestJS • SQL  • Postgres • Prisma</p>
                  </div>
                  <div className="flex flex-row gap-2">
                      <p className="font-medium">Other :</p>
                      <p>React Native • Figma • SEO</p>
                  </div>
              </div>
          </div>
          <div className="mt-40">
              <div>
                  <p className="text-6xl">Turn your <strong>ambitions</strong> into <strong>reality</strong></p>
              </div>
              <div className="flex flex-row gap-3 mt-20">
                  <button className="text-4xl">
                      <a href='#'>Book a Call</a>
                  </button>
                  <MoveUpRight />
              </div>
          </div>
      </div>
  )
}
