"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./loading.module.css";

const Loading = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const lottie = dynamic(() => import("lottie-web"), { ssr: false });
      lottie.then((Lottie) => {
        const animation = Lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "/animations/animation.json", // 올바른 경로로 수정
        });

        return () => {
          animation.destroy(); // 컴포넌트 언마운트 시 애니메이션 제거
        };
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      {" "}
      {/* 오타 수정 */}
      <div ref={containerRef} style={{ width: 200, height: 200 }} />
    </div>
  );
};

export default Loading;
