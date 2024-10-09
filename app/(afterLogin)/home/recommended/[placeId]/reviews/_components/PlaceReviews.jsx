import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getReviews } from "../_libs/getReviews";
import ReviewCard from "./ReviewCard";

const PlaceReviews = () => {
  // const { data } = useQuery({
  //   queryKey: ["reviews", searchParams],
  //   queryFn: getReviews,
  //   staleTime: 60 * 1000, // 밀리초 단위
  //   gcTime: 300 * 1000,
  // });

  const data = [
    {
      placeId: 1,
      userId: 1,
      username: "test",
      rating: 4,
      content: "ㅅㅌㅊ",
    },
    {
      placeId: 1,
      userId: 1,
      username: "test",
      rating: 4,
      content: "ㅅㅌㅊ",
    },
    {
      placeId: 1,
      userId: 1,
      username: "test",
      rating: 4,
      content: "ㅅㅌㅊ",
    },
  ];

  return data?.map((review, index) => (
    <ReviewCard key={index} review={review} />
  ));
};

export default PlaceReviews;
