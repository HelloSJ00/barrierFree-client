"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBookmarked } from "../_libs/getBookmarked";
import styles from "./placeBookmarked.module.css";
import BookmarkCard from "./BookmarkCard";

const PlacesBookmarked = () => {
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  // const { data, isLoading, error, refetch } = useQuery({
  //   queryKey: ["places", "bookmarked"],
  //   queryFn: getBookmarked,
  //   staleTime: 60 * 1000, // 밀리초 단위
  //   gcTime: 300 * 1000,
  // });

  // refetchTrigger가 변경될 때마다 refetch 호출
  // useEffect(() => {
  //   refetch(); // refetch를 통해 데이터 새로고침
  // }, [refetchTrigger, refetch]);

  // if (isLoading) return <div>Loading...</div>;
  // if (!isLoading && data) {
  //   console.log(data); // 서버에서 받아온 데이터를 확인
  // }
  // if (error) return <div>Error: {error.message}</div>;

  const data = {
    REC_LIST: [
      {
        PLACE_NM: "덕수궁",
        PLACE_KEY: 1,
        REC_SCORE: 86,
        latitude: 37.56621295,
        longitude: 126.975170881406,
        mine: true,
      },
      {
        PLACE_NM: "창덕궁",
        PLACE_KEY: 2,
        REC_SCORE: 82,
        latitude: 37.58238725,
        longitude: 126.991701339551,
        mine: true,
      },
      {
        PLACE_NM: "경복궁",
        PLACE_KEY: 3,
        REC_SCORE: 80,
        latitude: 37.57975395,
        longitude: 126.976680698869,
        mine: true,
      },
      {
        PLACE_NM: "e평궁",
        PLACE_KEY: 4,
        REC_SCORE: 79,
        latitude: 37.5044892,
        longitude: 126.8820115,
        mine: true,
      },
      {
        PLACE_NM: "eq궁",
        PLACE_KEY: 5,
        REC_SCORE: 77,
        latitude: 37.57975395,
        longitude: 126.976680698869,
        mine: true,
      },
    ],
  };
  // 리뷰가 없을 경우 "현재 작성된 리뷰가 없습니다"를 출력
  if (!data || data.length === 0) {
    return (
      <div className={styles.noBookmarkPlaces}>
        <p>
          <i>
            <strong>현재 찜한 장소가 없습니다 !</strong>
          </i>
        </p>

        <p>
          <i>실시간 추천 기능으로 찜할 장소를 찾아보세요 !</i>
        </p>
      </div>
    );
  }

  return (
    <>
      {data.REC_LIST.map((place, index) => (
        <BookmarkCard key={index} place={place} order={index + 1} />
      ))}
    </>
  );
};

export default PlacesBookmarked;
