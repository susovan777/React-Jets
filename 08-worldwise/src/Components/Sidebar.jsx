import Logo from "./Logo";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />

      <p>List of cities</p>

      <footer>
        <p>&copy; Copyright {new Date().getFullYear()} by Worldwise Inc.</p>
      </footer>
    </div>
  );
};

export default Sidebar;
