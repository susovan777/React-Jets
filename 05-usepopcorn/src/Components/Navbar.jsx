const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span>🍿</span>
        <h1>UsePopcorn</h1>
      </div>

      <input className="search" type="text" placeholder="Search movies..." />

      <p className="num-result">
        Found <strong>3</strong> results
      </p>
    </nav>
  );
};

export default Navbar;
