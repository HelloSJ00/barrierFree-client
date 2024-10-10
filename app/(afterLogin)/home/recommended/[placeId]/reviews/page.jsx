"use client";
import React, { useState } from "react";
import LeftMotionProvider from "../../../_components/LeftMotionProvider";
import BackButton from "@/app/_components/BackButton";
import styles from "./review.module.css";
import PlaceReviews from "./_components/PlaceReviews";
import { TextField, Rating, Button } from "@mui/material";
const Reviews = () => {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const handleSubmit = () => {
    console.log({
      reviewContent: content,
      reviewScore: rating,
    });
    // 여기에 서버로 데이터를 전송하는 로직을 추가하면 됩니다.
  };
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
          <PlaceReviews />
        </section>
        <div className={styles.reviewForm}>
          <p>
            <i>
              <strong>리뷰를 작성하여 후기를 공유해보세요 !</strong>
            </i>
          </p>
          <div className={styles.ratingAndSubmit}>
            <Rating
              name="review-rating"
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              precision={1} // 소수점 단위로 조절 가능 (1단위)
              max={5} // 5점 만점
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#388e3c", // MUI 테마 색상 사용
              }}
            >
              Submit
            </Button>
          </div>
          <TextField
            label="내용"
            multiline
            rows={2}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </div>
      </div>
    </LeftMotionProvider>
  );
};

export default Reviews;
