"use client";
import React, { useState, useRef, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getBookmarked } from "../_libs/getBookmarked";
import styles from "./placeBookmarked.module.css";
import BookmarkCard from "./BookmarkCard";
import { CircularProgress, Box, Typography } from "@mui/material";

const PlacesBookmarked = () => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loadMoreRef = useRef(null);

  // 무한 스크롤 데이터 페칭 설정
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["places", "bookmarked"],
    queryFn: ({ pageParam = 0 }) => getBookmarked(pageParam),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.hasMore ? pages.length : undefined;
    },
  });

  // IntersectionObserver를 활용하여 마지막 아이템에 도달 시 fetchNextPage 호출
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

  // 로딩 또는 오류 처리
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {data.pages.map((page, pageIndex) =>
        page.REC_LIST.map((place, index) => (
          <BookmarkCard
            key={`${pageIndex}-${index}`}
            place={place}
            order={index + 1}
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
                모든 장소를 확인했습니다.
              </Typography>
            </Box>
          )
        )}
      </div>
    </>
  );
};

export default PlacesBookmarked;
