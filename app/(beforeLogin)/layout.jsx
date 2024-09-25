import React from "react";
import styles from "./layout.module.css";

const layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default layout;
