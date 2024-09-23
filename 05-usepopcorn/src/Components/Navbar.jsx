import Search from "./Nav Components/Search";
import Logo from "./Nav Components/Logo";

const Navbar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      {children}
    </nav>
  );
};

export default Navbar;
