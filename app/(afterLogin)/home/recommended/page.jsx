"use client";
import React from "react";
import BackButton from "@/app/_components/BackButton";
import styles from "./recommended.module.css";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }} // 좌측에서 시작
      animate={{ x: 0, opacity: 1 }} // 중앙으로 이동
      exit={{ x: "100vw", opacity: 0 }} // 우측으로 사라짐
      transition={{ type: "tween", duration: 0.5 }} // 애니메이션 설정
      style={{ width: "100%", height: "100%" }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <BackButton />
          <div className={styles.headerTextBox}>
            <span className={styles.headerText}>추천 장소</span>
          </div>
          <div className={styles.box}></div>
        </div>
        <section> </section>
      </div>
    </motion.div>
  );
};

export default Page;
