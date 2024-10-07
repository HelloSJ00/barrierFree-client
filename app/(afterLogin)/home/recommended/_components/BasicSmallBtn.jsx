import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const BasicSmallBtn = ({ text }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
      style={{ display: "inline-block" }}
    >
      <Button
        variant="contained"
        sx={{
          width: 110,
          height: 30,
          borderRadius: 16,
          fontSize: 15,
          borderColor: "#388e3c", // 보더 색상 설정
          backgroundColor: "#388e3c", // 배경 색상을 화이트로 설정
          color: "white", // 텍스트 색상 설정
          "&:hover": {
            backgroundColor: "#f1f1f1", // hover 상태에서 약간의 배경색 변화
            borderColor: "#388e3c", // hover 상태에서 보더 유지
          },
        }}
      >
        <i>{text}</i>
      </Button>
    </motion.div>
  );
};

export default BasicSmallBtn;
