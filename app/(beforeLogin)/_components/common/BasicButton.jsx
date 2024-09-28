"use client";
import React from "react";
import Button from "@mui/material/Button";

const BasicButton = ({ text, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: 500,
        height: 68,
        borderRadius: 16,
        fontSize: 20,
        borderColor: "#388e3c", // 보더 색상 설정
        backgroundColor: "white", // 배경 색상을 화이트로 설정
        color: "#388e3c", // 텍스트 색상 설정
        "&:hover": {
          backgroundColor: "#f1f1f1", // hover 상태에서 약간의 배경색 변화
          borderColor: "#388e3c", // hover 상태에서 보더 유지
        },
      }}
      {...props}
    >
      {text}
    </Button>
  );
};

export default BasicButton;
