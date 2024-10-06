"use client";
import React from "react";
import styles from "./loginModal.module.css";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import BasicButton from "./common/BasicButton";
import { TextField, Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  //로그인 시도
  const onSubmit = async (event) => {
    event.preventDefault();

    // 이메일과 비밀번호 입력 확인
    if (!email || !password) {
      setMessage("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    const loginForm = {
      email: email,
      password: password,
    };

    try {
      // 로그인 API 호출
      const response = await login(loginForm);

      // 로그인 성공 시 처리
      if (response.success) {
        // 서버 응답에 success 필드가 있다고 가정
        setMessage("로그인 성공!");
        console.log("이메일:", email);
        console.log("비밀번호:", password);
        // 여기에 로그인 성공 후 리다이렉트 또는 세션 관리 코드 추가 가능
      } else {
        setMessage(
          "로그인 실패: " +
            (response.message || "알 수 없는 오류가 발생했습니다.")
        );
      }
    } catch (error) {
      // 로그인 중 에러 발생 시 처리
      console.error("로그인 중 오류 발생:", error);
      setMessage("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <motion.div
      className={styles.modalBackground}
      initial={{ opacity: 0 }} // 시작 시 투명도 0
      animate={{ opacity: 1 }} // 애니메이션으로 투명도 1
      exit={{ opacity: 0 }} // 닫힐 때 다시 투명도 0
      transition={{ duration: 0.3 }} // 애니메이션 지속 시간
      onClick={onClickClose}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경색 투명도
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        className={styles.modal}
        initial={{ scale: 0.5, opacity: 0 }} // 모달 초기 크기와 투명도
        animate={{ scale: 1, opacity: 1 }} // 모달이 커지는 애니메이션
        exit={{ scale: 0.5, opacity: 0 }} // 모달이 닫힐 때 애니메이션
        transition={{ duration: 0.3 }} // 애니메이션 지속 시간
      >
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

        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "100%",
            margin: "0 auto",
            padding: 4,
            borderRadius: "8px",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            로그인
          </Typography>

          <TextField
            label="이메일"
            type="email"
            value={email}
            onChange={onChangeEmail}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="비밀번호"
            type="password"
            value={password}
            onChange={onChangePassword}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />

          {message && (
            <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>
              {message}
            </Typography>
          )}

          <div className={styles.modalFooter}>
            <BasicButton type="submit" variant="contained" text="로그인하기" />
          </div>
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;
