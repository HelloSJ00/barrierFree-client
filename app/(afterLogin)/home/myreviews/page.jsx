"use client";
import React, { useState } from "react";
import LeftMotionProvider from "../_components/LeftMotionProvider";
import BackButton from "@/app/_components/BackButton";
import styles from "./myreviews.module.css";
import MyReviews from "./_components/MyReviews";

const Page = () => {
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  return (
    <LeftMotionProvider>
      <div className={styles.container}>
        <div className={styles.header}>
          <BackButton />
          <div className={styles.headerTextBox}>
            <span className={styles.headerText}>
              <i>
                <strong> {""} 내가 작성한 리뷰</strong>
              </i>
            </span>
          </div>
          <div className={styles.box}></div>
        </div>
        <section className={styles.reviewContainer}>
          <MyReviews refetchTrigger={refetchTrigger} fn={setRefetchTrigger} />
        </section>
      </div>
    </LeftMotionProvider>
  );
};

export default Page;
