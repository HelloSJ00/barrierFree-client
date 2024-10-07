"use client";
import React from "react";
import styles from "./main.module.css";
import BasicButton from "./common/BasicButton";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1>눈치보지 말고 편하게 외출하는 서비스</h1>
        <h2>배리어 - 프리</h2>
      </div>
      <div className={styles.rightSection}>
        <h2>지금 바로 이용하세요</h2>
        <BasicButton component="a" href="/signup" text="회원가입" />
        <h2>이미 가입하셨나요 ?</h2>
        <BasicButton component="a" href="/login" text="로그인" />
      </div>
    </div>
  );
};

export default Main;
