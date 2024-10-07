"use client";
import styles from "./layout.module.css";
import { AnimatePresence, motion } from "framer-motion";
// import { NavermapsProvider } from "react-naver-maps";

const Layout = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      {" "}
      {/* mode="wait"으로 이전 페이지가 완전히 나간 후 새 페이지가 들어옴 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        key={
          children.key
        } /* 페이지 전환 시마다 애니메이션 적용을 위해 key를 사용 */
      >
        <div className={styles.container}>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Layout;
