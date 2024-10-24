"use client";
import React from "react";
import styles from "./backButton.module.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
const BackButton = () => {
  const router = useRouter();
  const onClickBack = () => {
    router.back();
    console.log("back");
  };
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
      style={{ display: "inline-block" }}
    >
      <button onClick={onClickBack} className={styles.backButton}>
        ←
      </button>
    </motion.div>
  );
};

export default BackButton;
