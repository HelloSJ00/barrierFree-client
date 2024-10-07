"use client";
import React from "react";
import { motion } from "framer-motion";

const LeftMotionProvider = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }} // 좌측에서 시작
      animate={{ x: 0, opacity: 1 }} // 중앙으로 이동
      exit={{ x: "100vw", opacity: 0 }} // 우측으로 사라짐
      transition={{ type: "tween", duration: 0.5 }} // 애니메이션 설정
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default LeftMotionProvider;
