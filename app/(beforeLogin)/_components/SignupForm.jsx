"use client";
import React, { useState } from "react";
import styles from "./signupForm.module.css";
import BasicButton from "./common/BasicButton";
import { TextField, Button, Box, Typography } from "@mui/material";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const verifyEmail = () => {
    // 이메일 검증 로직 (예: API 요청)
    setEmailVerified(true);
    setMessage("이메일이 검증되었습니다.");
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordConfirm = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!emailVerified) {
      setMessage("이메일을 먼저 검증하세요.");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("회원가입 성공:", email, password);
  };
  return (
    <div className={styles.formContainer}>
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
          회원가입
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
        <BasicButton
          onClick={verifyEmail}
          variant="outlined"
          text="이메일 확인"
          sx={{ width: 100, height: 50 }}
        >
          이메일 검증
        </BasicButton>

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
        <TextField
          label="비밀번호 확인"
          type="password"
          value={confirmPassword}
          onChange={onChangePasswordConfirm}
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
        <div className={styles.signupFooter}>
          <BasicButton
            type="submit"
            variant="contained"
            text="회원가입"
          ></BasicButton>
        </div>
      </Box>
    </div>
  );
};

export default SignupForm;
