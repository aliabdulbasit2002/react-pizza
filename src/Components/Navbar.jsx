const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light navbar-home">
      <a className="navbar-brand ms-4" href="#">
        PIZZA
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pizza Type
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Pizza
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
