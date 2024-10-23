"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
const Loading = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current, // DOM 요소 참조
        renderer: "svg",
        loop: true, // 애니메이션 반복
        autoplay: true, // 자동 재생
        path: "Animation - 1729675646601.json", // Lottie JSON 파일 경로
      });

      return () => {
        animation.destroy(); // 컴포넌트 언마운트 시 애니메이션 제거
      };
    }
  }, []);

  return <div ref={containerRef} style={{ width: 200, height: 200 }} />;
};

export default Loading;
