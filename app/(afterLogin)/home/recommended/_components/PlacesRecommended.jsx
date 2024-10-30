"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getRecommendPlaces } from "../_libs/getRecommedPlaces";
import RecommendCard from "./RecommendCard";

const PlacesRecommended = () => {
  const { data } = useQuery({
    queryKey: ["places", "recommends"],
    queryFn: getRecommendPlaces,
    staleTime: 60 * 1000, // 1분 동안 데이터가 신선하다고 간주
    cacheTime: 300 * 1000, // 5분 동안 캐시에 저장
  });

  return (
    data?.REC_LIST?.map((place, index) => (
      <RecommendCard key={place.PLACE_KEY} place={place} order={index + 1} />
    )) || null
  );
};

export default PlacesRecommended;

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
