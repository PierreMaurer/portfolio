import Link from "next/link";

export const Navbar = () => {
  return (
      <div className="flex flex-row justify-between ms-5 me-5 lg:ms-36 lg:me-36 h-16 items-center">
          <div>
              <p className="text-sm">PIERRE MAURER</p>
          </div>
          <div className="flex flex-row gap-5 lg:gap-24 text-sm">
              <Link href='/'><button className="hover:underline hover:underline-offset-8 ">HOME</button></Link>
              <a href='https://calendly.com/maurer-developpement/30min' target="_blank"><button className="hover:underline hover:underline-offset-8 ">CONTACT ME</button></a>
          </div>
      </div>
  )
}
