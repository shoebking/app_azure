import LogoComponent from "./LogoComponent";

const Layout = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ padding: "20px" }}
      >
        <div className="container-fluid">
          <LogoComponent /> {/* Replace with LogoComponent */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Add your navigation links here */}
            </ul>
            <div className="d-flex">
              <a className="nav-link" href="/#" style={{ fontSize: "18px" }}>
                Home
              </a>
            </div>
            <div classname="d-flex">
              <li
                id="menu-item-1819"
                className="menu-item menu-item-type-post_type menu-item-object-page parent hfe-creative-menu"
              >
                <a
                  href="https://solveaiservices.com/training-ai/"
                  className="hfe-menu-item"
                >
                  Training AI
                </a>
              </li>
            </div>

            <div classname="d-flex">
              <li
                id="menu-item-1937"
                className="menu-item menu-item-type-post_type menu-item-object-page parent hfe-creative-menu"
              >
                <a
                  href="https://solveaiservices.com/our-expertise/"
                  className="hfe-menu-item"
                >
                  Our Expertise
                </a>
              </li>
            </div>

            <div className="d-flex">
              <li
                id="menu-item-354"
                className="menu-item menu-item-type-custom menu-item-object-custom parent hfe-creative-menu"
              >
                <a
                  href="https://solveaiservices.com/contact/"
                  className="hfe-menu-item"
                >
                  Contact
                </a>
              </li>
              {/* <a className="nav-link" href="#" style={{ fontSize: '18px' }}>Contact</a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Layout;
