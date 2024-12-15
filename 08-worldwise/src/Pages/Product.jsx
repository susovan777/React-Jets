import React from "react";
import Navbar from "../Components/Navbar";
import styles from "./Product.module.css"

const Product = () => {
  return (
    <div className={styles.product}>
      <Navbar />
      Product
    </div>
  );
};

export default Product;
