"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPlacesRecommend } from "../_libs/getPlacesRecommed";
import RecommedCard from "./RecommedCard";
const PlacesRecommneded = () => {
  // const { data } = useQuery({
  //   queryKey: ["places", "recommends"],
  //   queryFn: getPlacesRecommend,
  //   staleTime: 60 * 1000, // 밀리초 단위
  //   gcTime: 300 * 1000,
  // });
  const data = {
    REC_LIST: [
      { PLACE_NM: "덕수궁", PLACE_KEY: 1, REC_SCORE: 86 },
      { PLACE_NM: "창덕궁", PLACE_KEY: 2, REC_SCORE: 82 },
      { PLACE_NM: "경복궁", PLACE_KEY: 3, REC_SCORE: 80 },
      { PLACE_NM: "e평궁", PLACE_KEY: 4, REC_SCORE: 79 },
      { PLACE_NM: "eq궁", PLACE_KEY: 5, REC_SCORE: 77 },
    ],
  };

  return data.REC_LIST?.map((place, index) => (
    <RecommedCard key={place.PLACE_KEY} place={place} order={index + 1} />
  ));
};

export default PlacesRecommneded;
