export const Navbar = () => {
  return (
      <div className="flex flex-row justify-between ms-5 me-5 lg:ms-36 lg:me-36 h-16 items-center">
          <div>
              <p className="text-sm">PIERRE MAURER</p>
          </div>
          <div className="flex flex-row gap-5 lg:gap-24 text-sm">
              <a href='#project'><p>PROJECTS</p></a>
              <a href='#profil'><p>ABOUT ME</p></a>
              <p>CONTACT ME</p>
          </div>
      </div>
  )
}
