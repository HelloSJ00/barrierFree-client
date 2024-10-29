"use client";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import styles from "./review.module.css";
import { Button } from "@mui/material"; // MUI에서 Button 컴포넌트 가져오기
import { deleteReview } from "../_libs/deleteReview";

/**
 * interface review = [{username,content,rating,isMine}]
 */
const Review = ({ review, fn }) => {
  const onClickDeleteReview = async (review) => {
    try {
      console.log(review.placeKey);
      // 리뷰 삭제 함수 호출 (reviewId를 사용)
      await deleteReview(review.placeKey);
      alert("리뷰가 성공적으로 삭제되었습니다.");
      // 리뷰 작성 후 refetch 트리거
      // 상태 업데이트 확인을 위한 로그
      fn((prev) => {
        console.log("Refetch trigger 업데이트:", !prev);
        return !prev;
        ㅊ;
      });
    } catch (error) {
      console.error("리뷰 삭제 중 오류 발생:", error);
    }
  };

  return (
    <div className={styles.reviewBox}>
      <div className={styles.nameBox}>
        <span>
          <strong>{review.username}</strong>
        </span>
        <span>{review.placename}</span>
        <span>
          {new Date(review.createdAt).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </span>
      </div>
      <div className={styles.contentBox}>
        <span>{review.content}</span>
      </div>
      <div className={styles.ratingBox}>
        {/* isMine이 true일 경우 삭제 버튼을 보여줌 */}
        {review.mine && (
          <div className={styles.buttonBox}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => onClickDeleteReview(review)}
              sx={{
                color: "#388e3c", // 텍스트 색상
                borderColor: "#388e3c", // 테두리 색상
                "&:hover": {
                  borderColor: "#388e3c", // hover 시 테두리 색상
                },
              }}
              // review 객체를 전달하기 위해 래핑
            >
              리뷰 삭제
            </Button>
          </div>
        )}{" "}
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
