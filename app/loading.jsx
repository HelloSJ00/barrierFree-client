"use client";
import { useEffect, useRef } from "react";
import styles from "./loading.module.css";

const Loading = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let animation = null;

    const loadAnimation = async () => {
      if (typeof window !== "undefined" && containerRef.current) {
        try {
          const Lottie = (await import("lottie-web")).default; // 비동기 import로 모듈 가져오기
          if (Lottie && typeof Lottie.loadAnimation === "function") {
            animation = Lottie.loadAnimation({
              container: containerRef.current,
              renderer: "svg",
              loop: true,
              autoplay: true,
              path: "/Animation - 1729675646601.json", // 애니메이션 경로
            });
          }
        } catch (error) {
          console.error("Lottie 웹 애니메이션 로드 중 오류:", error);
        }
      }
    };

    loadAnimation();

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={containerRef} style={{ width: 200, height: 200 }} />
    </div>
  );
};

export default Loading;
