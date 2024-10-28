"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styles from "./loading.module.css";

const Loading = () => {
  const containerRef = useRef(null);
  const animationInstance = useRef(null); // 애니메이션 인스턴스를 저장할 Ref

  useEffect(() => {
    // 애니메이션이 한 번도 로드되지 않았을 때만 실행
    if (!animationInstance.current && containerRef.current) {
      animationInstance.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/Animation - 1729675646601.json", // Lottie JSON 파일 경로
      });
    }

    // 언마운트 시 애니메이션 인스턴스 제거
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null; // 인스턴스를 null로 초기화하여 재사용 가능하게 설정
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
