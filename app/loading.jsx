"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styles from "./loading.module.css";

const Loading = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/Animation - 1729675646601.json", // Lottie JSON 파일 경로
      });

      return () => {
        animation.destroy(); // 컴포넌트 언마운트 시 애니메이션 제거
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      <div ref={containerRef} style={{ width: 200, height: 200 }} />
    </div>
  );
};

export default Loading;
