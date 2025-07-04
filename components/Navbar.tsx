export const Navbar = () => {
  return (
      <div className="flex flex-row justify-between ms-5 me-5 lg:ms-36 lg:me-36 h-16 items-center">
              <p className="text-sm">PIERRE MAURER</p>
              <a className="flex flex-row gap-5 lg:gap-24 text-sm hover:underline hover:underline-offset-8 " href='https://calendly.com/maurer-developpement/30min' target="_blank">
                  CONTACT ME
              </a>
      </div>
  )
}
