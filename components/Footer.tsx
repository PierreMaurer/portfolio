import {MoveUpRight} from "lucide-react";

export const Footer = () => {
  return (
      <div className="h-[270px] mt-15">
          <div className="flex flex-col lg:flex-row justify-between ms-10 me-10 lg:ms-36 lg:me-36">
              <div className="w-full">
                  <div>
                    <p className="text-4xl lg:text-6xl font-satoshi-light">Turn your <span className="font-satoshi-medium">ambitions</span> into <span className="font-satoshi-medium">reality</span></p>
                  </div>
                  <div className="flex flex-row gap-3 mt-10">
                      <button className="text-4xl hover:underline hover:underline-offset-8 ">
                          <a href='https://calendly.com/maurer-developpement/30min' target="_blank">Book a Call</a>
                      </button>
                      <MoveUpRight />
                  </div>
                  <div className="flex flex-col md:flex-row justify-between mt-14 pb-2">
                      <div className="flex flex-row gap-5 opacity-65">
                          <a href="https://www.linkedin.com/in/pierre-maurer/" target="_blank"><p>Linkedin</p></a>
                          <a href="https://x.com/PierreMaurer_" target="_blank"><p>Twitter</p></a>
                          <a href="https://www.malt.fr/profile/pierremaurer" target="_blank"><p>Malt</p></a>
                          <p>CGU</p>
                      </div>
                      <div className="">
                          <p className="opacity-60">© Pierre Maurer – Tous droits réservés – 2025</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
