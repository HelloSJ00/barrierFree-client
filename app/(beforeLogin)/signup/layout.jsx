import React from "react";
import styles from "./layout.module.css";
import BackButton from "@/app/_components/BackButton";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackButton />
      </div>
      {children}
    </div>
  );
};

export default Layout;
