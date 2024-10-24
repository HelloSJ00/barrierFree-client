import React from "react";
import styles from "./layout.module.css";

const layout = ({ children, modal }) => {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
};

export default layout;
