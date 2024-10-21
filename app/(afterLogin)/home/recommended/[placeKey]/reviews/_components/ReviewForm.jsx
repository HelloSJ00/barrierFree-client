"use client";
import React, { useState } from "react";
import { TextField, Rating, Button } from "@mui/material";
import { registerReview } from "../_libs/registerReview";
import styles from "./reviewForm.module.css";

const ReviewForm = ({ placeKey, fn }) => {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const handleSubmit = async () => {
    try {
      // 리뷰 작성 API 호출
      await registerReview({
        placeKey: placeKey,
        content: content,
        rating: rating,
      });

      // 리뷰 작성 후 refetch 트리거
      fn((prev) => !prev);

      // 폼 초기화
      setContent("");
      setRating(0);
    } catch (error) {
      console.error("리뷰 작성 실패:", error);
    }
  };
  return (
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
  );
};

export default ReviewForm;
