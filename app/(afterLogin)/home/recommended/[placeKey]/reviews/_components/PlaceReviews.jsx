"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useRef, useEffect } from "react";
import { getReviews } from "../_libs/getReviews";
import ReviewCard from "./ReviewCard";
import Skeleton from "@/app/(afterLogin)/_components/Skeleton"; // 스켈레톤 컴포넌트 임포트
import { CircularProgress, Box, Typography } from "@mui/material"; // MUI 컴포넌트 임포트
import styles from "./placeReviews.module.css";

const PlaceReviews = ({ placeKey, refetchTrigger, fn }) => {
  const loadMoreRef = useRef(null);

  // 무한 스크롤을 위한 useInfiniteQuery 설정
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isLoading,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["reviews", placeKey],
    queryFn: ({ pageParam = 0 }) =>
      getReviews({ queryKey: ["reviews", placeKey], pageParam }),
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length : undefined,
    enabled: placeKey !== null && placeKey !== undefined,
    staleTime: 60 * 1000,
    cacheTime: 300 * 1000,
  });

  // refetchTrigger가 변경될 때마다 refetch 호출
  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  // refetchTrigger가 변경될 때마다 전체 데이터를 refetch
  useEffect(() => {
    refetch(); // fetchNextPage 대신 refetch 호출
  }, [refetchTrigger, refetch]);

  // IntersectionObserver를 사용하여 마지막 아이템이 보일 때 fetchNextPage 호출
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [loadMoreRef, hasNextPage, isFetchingNextPage, fetchNextPage]);

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
  if (!data || data.pages[0].reviews.length === 0) {
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
      {data.pages.map((page, pageIndex) =>
        page.reviews.map((review, reviewIndex) => (
          <ReviewCard
            key={`${pageIndex}-${reviewIndex}`}
            review={review}
            fn={refetch}
          />
        ))
      )}

      <div ref={loadMoreRef} className={styles.loadMore}>
        {isFetchingNextPage ? (
          <Box display="flex" alignItems="center" justifyContent="center" p={2}>
            <CircularProgress size={24} />
            <Typography variant="body2" color="textSecondary" ml={1}>
              Loading more...
            </Typography>
          </Box>
        ) : (
          !hasNextPage && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={2}
            >
              <Typography variant="body2" color="textSecondary">
                모든 리뷰를 확인했습니다.
              </Typography>
            </Box>
          )
        )}
      </div>
    </>
  );
};

export default PlaceReviews;
