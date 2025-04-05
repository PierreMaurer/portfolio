import Image from "next/image";

export const Profil = () => {
  return (
      <div className="flex flex-col ms-36 me-36 mt-36 mb-10">
          <div>
              <p className="text-5xl">About me</p>
          </div>
          <div className="flex flex-row gap-36 mt-20">
              <div className="w-[50%]">
                  <Image src={'/img/me.png'} alt={'Photo of me'}
                         width={450}
                         height={600}
                         className="rounded-3xl"
                  />
              </div>
              <div className="w-[50%]">
                  <p className="text-7xl">I am a fullstack web and mobile developer specializing in turning your ambitions into reality.</p>
              </div>
          </div>
      </div>
  )
}
