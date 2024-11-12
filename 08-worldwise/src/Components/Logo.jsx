import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="../../public/logo.png" alt="Worldwise logo" />
    </div>
  );
};

export default Logo;
