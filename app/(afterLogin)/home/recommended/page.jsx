import React from "react";
import BackButton from "@/app/_components/BackButton";
import styles from "./recommended.module.css";

const Page = () => {
  return (
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
  );
};

export default Page;
