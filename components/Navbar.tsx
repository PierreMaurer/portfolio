export const Navbar = () => {
  return (
      <div className="flex flex-row justify-between ms-36 me-36 h-16 items-center">
          <div>
              <p>PIERRE MAURER</p>
          </div>
          <div className="flex flex-row gap-24">
              <a href='#project'><p>PROJECTS</p></a>
              <a href='#profil'><p>ABOUT ME</p></a>
              <p>CONTACT ME</p>
          </div>
          <div>
              <p>FR</p>
              <hr/>
              <p>EN</p>
          </div>
      </div>
  )
}
