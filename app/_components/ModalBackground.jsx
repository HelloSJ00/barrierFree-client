import React from "react";
import { motion } from "framer-motion";

const ModalBackground = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 시작 시 투명도 0
      animate={{ opacity: 1 }} // 애니메이션으로 투명도 1
      exit={{ opacity: 0 }} // 닫힐 때 다시 투명도 0
      transition={{ duration: 0.3 }} // 애니메이션 지속 시간
      // onClick={closeModal}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경색 투명도
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ModalBackground;
