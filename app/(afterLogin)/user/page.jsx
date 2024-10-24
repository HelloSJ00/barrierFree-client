"use client";
import React from "react";
import styles from "./user.module.css";
import UserInfo from "./_components/UserInfo";

const Page = () => {
  return (
    <div className={styles.userContainer}>
      <UserInfo />
    </div>
  );
};

export default Page;
