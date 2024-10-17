"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { getReviews } from "../_libs/getReviews";
import ReviewCard from "./ReviewCard";

const PlaceReviews = ({ placeId, refetchTrigger }) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["reviews", placeId],
    queryFn: getReviews,
    enabled: placeId !== null && placeId !== undefined, // placeId가 유효할 때만 쿼리 실행
    staleTime: 60 * 1000, // 밀리초 단위
    gcTime: 300 * 1000,
  });

  // refetchTrigger가 변할 때마다 데이터 다시 가져오기
  useEffect(() => {
    if (refetchTrigger) {
      refetch(); // refetch를 통해 데이터 새로고침
    }
  }, [refetchTrigger, refetch]);

  if (isLoading) return <div>Loading...</div>;
  if (!isLoading && data) {
    console.log(data); // 서버에서 받아온 데이터를 확인
  }
  if (error) return <div>Error: {error.message}</div>;

  // 리뷰가 없을 경우 "현재 작성된 리뷰가 없습니다"를 출력
  if (!data || data.length === 0) {
    return <p>현재 작성된 리뷰가 없습니다</p>;
  }

  return (
    <>
      {data.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </>
  );
};

export default PlaceReviews;
