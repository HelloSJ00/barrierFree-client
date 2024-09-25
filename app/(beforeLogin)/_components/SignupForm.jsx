"use client";
import React, { useState } from "react";
import styles from "./signupForm.module.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const onSubmit = () => {};
  return (
    <div className={styles.formContainer}>
      <form onSubmit={onSubmit} className={styles.signupForm}>
        <div className={styles.inputDiv}>
          <label className={styles.inputLabel} htmlFor="email">
            이메일
          </label>
          <div className={styles.inputEmailDiv}>
            <input
              id="email"
              className={styles.inputEmail}
              value={email}
              onChange={onChangeEmail}
              type="text"
              placeholder=""
            />
            <button className={styles.duplicateButton}>email</button>
          </div>
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
        <div className={styles.inputDiv}>
          <label className={styles.inputLabel} htmlFor="password">
            비밀번호 확인
          </label>
          <input
            id="passwordConfirm"
            className={styles.input}
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
            type="password"
            placeholder=""
          />
        </div>
        {/* <div className={styles.message}>{message}</div> */}
        <div className={styles.signupFooter}>
          <button
            className={styles.actionButton}
            disabled={!email && !password && !passwordConfirm}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
