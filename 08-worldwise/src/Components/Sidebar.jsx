import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNavbar";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p>&copy; Copyright {new Date().getFullYear()} by Worldwise Inc.</p>
      </footer>
    </div>
  );
};

export default Sidebar;
