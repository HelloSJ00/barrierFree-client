"use client";
import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles"; // styled를 @mui/material/styles에서 임포트

const RecommendButton = styled(Button)({
  width: 270,
  height: 70,
  backgroundColor: "white",
  color: "#1b5e20",
  borderRadius: 50,
  zIndex: 200,
  borderColor: "#1b5e20",
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  bottom: "100px",
  // border: "none",
  fontSize: "20px",
  zIndex: 200,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // 그림자 효과 추가
  "&:hover": {
    backgroundColor: "#c8e6c9",
  },
});

const RecommendPlaceButton = () => {
  const onClickRecommend = () => {
    console.log("추천버튼클릭");
  };
  return (
    <RecommendButton onClick={onClickRecommend} variant="outlined">
      실시간 추천
    </RecommendButton>
  );
};

export default RecommendPlaceButton;
