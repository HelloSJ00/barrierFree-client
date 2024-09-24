"use client";
import React from "react";
import Link from "next/link";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1>눈치보지 말고 편하게 외출하는 서비스</h1>
        <h2>배리어 - 프리</h2>
      </div>
      <div className={styles.rightSection}>
        <h2>지금 바로 이용하세요</h2>
        <Link href="/signup" className={styles.signup}>
          회원가입
        </Link>
        <h2>이미 가입하셨나요 ?</h2>
        <Link href="/login" className={styles.signin}>
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Main;
