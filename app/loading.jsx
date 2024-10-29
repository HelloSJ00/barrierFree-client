"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web"; // 정적 import
import styles from "./loading.module.css";

const Loading = () => {
  const containerRef = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    if (!animationInstance.current && containerRef.current) {
      animationInstance.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/Animation - 1729675646601.json",
      });
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null;
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
