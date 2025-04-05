export const Navbar = () => {
  return (
      <div className="flex flex-row justify-between ms-36 me-36 h-16 items-center">
          <div>
              <p>PIERRE MAURER</p>
          </div>
          <div className="flex flex-row gap-24">
              <p>PROJECTS</p>
              <p>ABOUT ME</p>
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
