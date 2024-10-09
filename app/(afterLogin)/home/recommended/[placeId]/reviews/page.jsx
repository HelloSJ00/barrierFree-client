import React from "react";
import LeftMotionProvider from "../../../_components/LeftMotionProvider";
import BackButton from "@/app/_components/BackButton";
import styles from "./review.module.css";
import PlaceReviews from "./_components/PlaceReviews";
const Reviews = () => {
  return (
    <LeftMotionProvider>
      <div className={styles.container}>
        <div className={styles.header}>
          <BackButton />
          <div className={styles.headerTextBox}>
            <span className={styles.headerText}>
              <i>
                <strong> {""} 리뷰</strong>
              </i>
            </span>
          </div>
          <div className={styles.box}></div>
        </div>
        <section>
          <PlaceReviews />
        </section>
      </div>
    </LeftMotionProvider>
  );
};

export default Reviews;
