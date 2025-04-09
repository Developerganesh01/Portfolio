import "./NavBar.css"
function NavBar()
{
  return(
    <>
    <nav className="container-fluid navbar bg-primary justify-content-md-center align-items-md-center navbar-expand-md p-md-2 pe-md-6 border-bottom-4">
    <a className="navbar-brand brand p-2" href="dog">
      <span  className=" text-info">{'<'}</span>
      <span >{'Ganeshm'}</span>
      <span className=" text-info">{'.Dev'}</span>
      <span className=" text-info">{'/>'}</span>
    </a>
    <button className="navbar-toggler  p-2 me-5 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid nav-pills">
        <li className="nav-item"><a className="nav-link" href="dog">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="dog">Skills</a></li>
        <li className="nav-item"><a className="nav-link active" href="dog">Projects</a></li>
        <li className="nav-item"><a className="nav-link" href="dog">About</a></li>
        <li className="nav-item"><a className="nav-link" href="dog">Connect</a></li>
        <li className="nav-item"><a className="nav-link" href="dog">Resume</a></li>
        </ul>
    </div>
    </nav>
    </>
  )
}
export default NavBar;