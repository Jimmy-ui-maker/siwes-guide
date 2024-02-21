
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md shadow-sm py-1">
      <div className="container">
        <img
          src="/siwes/logo.png"
          className=" rounded-2"
          width={50}
          height={40}
          alt=""
        />
        <a href="/" className="navbar-brand fw-bolder text-uppercase">
          SIWES GUIDE
        </a>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="about" className="nav-link fw-bold">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/scienceFaculties" className="nav-link fw-bold">
                Organization
              </a>
            </li>
            <li className="nav-item">
              <a href="/logbooks" className="nav-link fw-bold">
              Log Books
              </a>
            </li>
            <li className="nav-item">
              <a href="/projects" className="nav-link fw-bold">
              Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="/report" className="nav-link fw-bold">
                Report
              </a>
            </li>
            <li className="nav-item">
              <a href="/faqs" className="nav-link fw-bold">
                Fags
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
