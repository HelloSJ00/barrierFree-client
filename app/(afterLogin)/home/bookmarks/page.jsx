import React from "react";
import styles from "./bookmark.module.css";
import BackButton from "@/app/_components/BackButton";
import LeftMotionProvider from "../_components/LeftMotionProvider";

const Page = async () => {
  return (
    <LeftMotionProvider>
      <div className={styles.container}>
        <div className={styles.header}>
          <BackButton />
          <div className={styles.headerTextBox}>
            <span className={styles.headerText}>즐겨찾기</span>
          </div>
          <div className={styles.box}></div>
        </div>
        <section></section>
      </div>
    </LeftMotionProvider>
  );
};

export default Page;
