"use client";
import React from "react";
import styles from "./loginModal.module.css";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { redirect, useRouter } from "next/navigation";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  //로그인 시도
  const onSubmit = async () => {};

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClickClose}>
            <svg
              width={24}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.modalBody}>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} htmlFor="email">
                이메일
              </label>
              <input
                id="email"
                className={styles.input}
                value={email}
                onChange={onChangeEmail}
                type="text"
                placeholder=""
              />
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                className={styles.input}
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div className={styles.message}>{message}</div>
          <div className={styles.modalFooter}>
            <button
              className={styles.actionButton}
              disabled={!email && !password}
            >
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
