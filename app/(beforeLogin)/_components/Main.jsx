"use client";
import React from "react";
import styles from "./main.module.css";
import BasicButton from "./common/BasicButton";
import KBarrierFreeLogo from "@/app/_components/KBarrierFreeLogo";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <p>
          <strong>
            <i>눈치보지 말고 편하게 외출하는 서비스</i>
          </strong>
        </p>
        <div>
          <KBarrierFreeLogo></KBarrierFreeLogo>
        </div>
      </div>
      <div className={styles.rightSection}>
        <h3>지금 바로 이용하세요</h3>
        <BasicButton component="a" href="/signup" text="회원가입" />
        <h3>이미 가입하셨나요 ?</h3>
        <BasicButton component="a" href="/login" text="로그인" />
      </div>
    </div>
  );
};

export default Main;
