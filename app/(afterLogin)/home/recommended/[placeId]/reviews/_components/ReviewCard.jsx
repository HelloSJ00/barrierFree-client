"use client";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import styles from "./review.module.css";

const Review = ({ review }) => {
  return (
    <div className={styles.reviewBox}>
      <div className={styles.nameBox}>
        <span>{review.username}</span>
      </div>
      <div className={styles.contentBox}>
        <span>{review.content}</span>
      </div>
      <div className={styles.ratingBox}>
        {" "}
        <ReactStars
          count={5} // 별의 개수
          value={review.rating} // 미리 정해진 점수
          size={20} // 별 크기
          edit={false} // 수정 불가 (고정된 별점)
          isHalf={true} // 반 별점 허용 (점수가 소수일 경우)
          activeColor="#ffd700" // 활성화된 별의 색상
        />
      </div>
    </div>
  );
};

export default Review;
