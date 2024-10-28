"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { getReviews } from "../_libs/getReviews";
import ReviewCard from "./ReviewCard";
import Skeleton from "@/app/(afterLogin)/_components/Skeleton"; // 스켈레톤 컴포넌트 임포트
import styles from "./placeReviews.module.css";

const PlaceReviews = ({ placeKey, refetchTrigger, fn }) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["reviews", placeKey],
    queryFn: getReviews,
    enabled: placeKey !== null && placeKey !== undefined,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  // refetchTrigger가 변경될 때마다 refetch 호출
  useEffect(() => {
    refetch();
  }, [refetchTrigger, refetch]);

  // 로딩 상태일 때 스켈레톤을 보여줌
  if (isLoading) {
    return (
      <div className={styles.skeletonContainer}>
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} width="100%" height="80px" />
        ))}
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  // 리뷰가 없을 경우 메시지 출력
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
