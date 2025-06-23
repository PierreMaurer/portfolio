import Image from "next/image";

export const Profil = () => {
  return (
      <div id="profil" className="flex flex-col ms-10 me-10 lg:ms-36 lg:me-36 mt-36 mb-15">
              <p className="text-3xl lg:text-5xl">About me</p>
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-36 mt-20">
              <div className="w-full lg:w-[450px] h-[300px] lg:h-[600px] relative">
                  <Image
                    src={'/img/me.png'}
                    alt={'Photo of me'}
                    fill
                    style={{objectFit: 'cover'}}
                    className="rounded-3xl"
                  />
              </div>
                  <p className="lg:w-[55%] text-xl lg:text-5xl leading-15 font-satoshi-light">As a <span className="font-satoshi-medium">fullstack developer</span>, I design and build <span className="font-satoshi-medium">modern web & mobile</span> applications with a strong focus on <span className="font-satoshi-medium">performance</span> and <span className="font-satoshi-medium">user experience</span>.</p>
          </div>
          <div className="flex flex-col gap-20 lg:gap-36 lg:flex-row justify-between mt-20">
              <div className="flex flex-col gap-20 justify-between">
                    <p className="flex flex-col lg:flex-row gap-2 text-xl"><span className="font-medium">Contact : </span>contact@maurer-developpement.fr</p>
                  <div className="flex flex-row gap-5 text-xl">
                      <p className="font-medium">Social: </p>
                          <a className="w-[28px] h-[28px] relative" href="https://www.malt.fr/profile/pierremaurer" target="_blank">
                              <Image
                                  src={'/img/maltlogo.png'}
                                  alt={'Photo of me'}
                                  fill
                                  style={{objectFit: 'cover'}}
                              />
                          </a>
                          <a className="w-[29px] h-[28px] relative" href="https://www.linkedin.com/in/pierre-maurer/" target="_blank">
                              <Image
                                  src={'/img/lkLogo.png'}
                                  alt={'Photo of me'}
                                  fill
                                  style={{objectFit: 'cover'}}
                              />
                        </a>
                          <a className="w-[28px] h-[28px] relative" href="https://x.com/PierreMaurer_" target="_blank">
                          <Image
                              src={'/img/xlogo.png'}
                              alt={'Photo of me'}
                              fill
                              style={{objectFit: 'cover'}}
                          />
                          </a>
                  </div>
              </div>
              <div className="flex flex-col gap-10 text-xl">
                      <p className="flex flex-col lg:flex-row gap-2"><span className="font-medium">Front end :</span> React • Tailwind • ThreeJS • NextJS • Angular</p>
                      <p className="flex flex-col lg:flex-row gap-2"><span className="font-medium">Backend : </span>Javascript • NestJS • SQL  • Postgres • Prisma</p>
                      <p className="flex flex-col lg:flex-row gap-2"><span className="font-medium">Other: </span>React Native • Figma • SEO</p>
              </div>
          </div>
      </div>
  )
}
