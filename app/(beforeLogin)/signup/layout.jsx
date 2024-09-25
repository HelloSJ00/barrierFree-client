"use client";
import React from "react";
import styles from "./layout.module.css";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const router = useRouter();
  const onClickBack = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={onClickBack} className={styles.backButton}>
          ←
        </button>
      </div>
      {children}
    </div>
  );
};

export default Layout;
