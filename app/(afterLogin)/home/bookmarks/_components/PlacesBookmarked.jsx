"use client";
import React, { useState, useRef, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getBookmarked } from "../_libs/getBookmarked";
import styles from "./placeBookmarked.module.css";
import BookmarkCard from "./BookmarkCard";

const PlacesBookmarked = () => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loadMoreRef = useRef(null);
  // const data = {
  //   REC_LIST: [
  //     {
  //       PLACE_NM: "덕수궁",
  //       PLACE_KEY: 1,
  //       REC_SCORE: 86,
  //       latitude: 37.56621295,
  //       longitude: 126.975170881406,
  //       mine: true,
  //     },
  //     {
  //       PLACE_NM: "창덕궁",
  //       PLACE_KEY: 2,
  //       REC_SCORE: 82,
  //       latitude: 37.58238725,
  //       longitude: 126.991701339551,
  //       mine: true,
  //     },
  //     {
  //       PLACE_NM: "경복궁",
  //       PLACE_KEY: 3,
  //       REC_SCORE: 80,
  //       latitude: 37.57975395,
  //       longitude: 126.976680698869,
  //       mine: true,
  //     },
  //     {
  //       PLACE_NM: "e평궁",
  //       PLACE_KEY: 4,
  //       REC_SCORE: 79,
  //       latitude: 37.5044892,
  //       longitude: 126.8820115,
  //       mine: true,
  //     },
  //     {
  //       PLACE_NM: "eq궁",
  //       PLACE_KEY: 5,
  //       REC_SCORE: 77,
  //       latitude: 37.57975395,
  //       longitude: 126.976680698869,
  //       mine: true,
  //     },
  //   ],
  // };
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
        {isFetchingNextPage ? "Loading more..." : ""}
        {!hasNextPage && <p>모든 찜한 장소를 확인했습니다.</p>}
      </div>
    </>
  );
};

export default PlacesBookmarked;
