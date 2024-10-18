"use client";
import React, { useState } from "react";
import LeftMotionProvider from "../../../_components/LeftMotionProvider";
import BackButton from "@/app/_components/BackButton";
import styles from "./review.module.css";
import PlaceReviews from "./_components/PlaceReviews";
import { useParams } from "next/navigation";
import ReviewForm from "./_components/ReviewForm";
const Reviews = () => {
  const params = useParams(); // useParams 훅 사용
  const { placeId } = params; // placeId 추출
  const [refetchTrigger, setRefetchTrigger] = useState(false);

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
        <section className={styles.reviewContainer}>
          <PlaceReviews
            placeId={placeId}
            refetchTrigger={refetchTrigger}
            fn={setRefetchTrigger}
          />
        </section>
        <ReviewForm placeId={placeId} fn={setRefetchTrigger} />
      </div>
    </LeftMotionProvider>
  );
};

export default Reviews;
