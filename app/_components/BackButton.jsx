"use client";
import React from "react";
import styles from "./backButton.module.css";
import { useRouter } from "next/navigation";
const BackButton = () => {
  const router = useRouter();
  const onClickBack = () => {
    router.back();
  };
  return (
    <button onClick={onClickBack} className={styles.backButton}>
      ←
    </button>
  );
};

export default BackButton;
