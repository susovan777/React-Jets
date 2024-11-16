import { Link } from "react-router-dom";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="../../logo.png"
        alt="Worldwise logo"
        className={styles.logo}
      />
    </Link>
  );
};

export default Logo;
