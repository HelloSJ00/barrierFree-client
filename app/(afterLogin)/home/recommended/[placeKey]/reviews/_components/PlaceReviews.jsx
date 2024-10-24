"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { getReviews } from "../_libs/getReviews";
import ReviewCard from "./ReviewCard";
import styles from "./placeReviews.module.css";

const PlaceReviews = ({ placeKey, refetchTrigger, fn }) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["reviews", placeKey],
    queryFn: getReviews,
    enabled: placeKey !== null && placeKey !== undefined, // placeKey 유효할 때만 쿼리 실행
    staleTime: 60 * 1000, // 밀리초 단위
    gcTime: 300 * 1000,
  });

  // refetchTrigger가 변경될 때마다 refetch 호출
  useEffect(() => {
    refetch(); // refetch를 통해 데이터 새로고침
  }, [refetchTrigger, refetch]);

  if (isLoading) return <div>Loading...</div>;
  if (!isLoading && data) {
    console.log(data); // 서버에서 받아온 데이터를 확인
  }
  if (error) return <div>Error: {error.message}</div>;

  // 리뷰가 없을 경우 "현재 작성된 리뷰가 없습니다"를 출력
  if (!data || data.length === 0) {
    return (
      <div className={styles.noReviewContainer}>
        <p>
          <i>
            <strong>현재 작성된 리뷰가 없습니다 !</strong>
          </i>
        </p>

        <p>
          <i>처음으로 장소에 대한 후기를 공유해보세요 !</i>
        </p>
      </div>
    );
  }

  return (
    <>
      {data.map((review, index) => (
        <ReviewCard key={index} review={review} fn={fn} />
      ))}
    </>
  );
};

export default PlaceReviews;
