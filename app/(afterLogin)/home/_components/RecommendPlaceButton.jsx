"use client";
import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation"; // Next.js App Router에 맞게 설정

const RecommendPlaceButton = () => {
  const router = useRouter();

  const onClickRecommend = () => {
    console.log("추천버튼클릭");
    router.push("/home/recommended"); // 존재하는 경로인지 확인 필요
  };

  return (
    <Button
      variant="outlined"
      onClick={onClickRecommend} // 함수 자체를 전달
      sx={{
        width: 270,
        height: 70,
        backgroundColor: "white",
        color: "#1b5e20",
        borderRadius: 50,
        zIndex: 2,
        borderColor: "#1b5e20",
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "100px",
        fontSize: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // 그림자 효과 추가
        "&:hover": {
          backgroundColor: "#c8e6c9",
        },
      }}
    >
      실시간 추천
    </Button>
  );
};

export default RecommendPlaceButton;
