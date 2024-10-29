"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./loading.module.css";

const Loading = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let animationInstance;

    const loadAnimation = async () => {
      const lottie = await import("lottie-web");
      animationInstance = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/Animation - 1729675646601.json",
      });
    };

    loadAnimation();

    return () => {
      if (animationInstance) animationInstance.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={containerRef} style={{ width: 200, height: 200 }} />
    </div>
  );
};

export default Loading;
