import React from "react";

import styles from "./ButtonUI.module.css";

const ButtonUI = ({ children, onClick, type }) => {
  return (
    <button
      className={`${styles.btn} ${styles[type]}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default ButtonUI;
