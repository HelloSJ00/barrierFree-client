"use client";
import React, { useState } from "react";
import styles from "./signupForm.module.css";
import BasicButton from "./common/BasicButton";
import { TextField, Button, Box, Typography } from "@mui/material";
import { signup, checkEmailAvailability } from "../signup/_api/api";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const verifyEmail = async () => {
    try {
      const data = await checkEmailAvailability(email);
      if (data.isAvailable) {
        setEmailVerified(true);
        setMessage("이메일이 사용 가능합니다.");
      } else {
        setEmailVerified(false);
        setMessage("이메일이 이미 사용 중입니다.");
      }
    } catch (error) {
      setMessage("이메일 검증 중 오류가 발생했습니다.");
    }
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordConfirm = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // 기본 동작 방지

    if (!emailVerified) {
      setMessage("이메일을 먼저 검증하세요.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    // FormData 객체로 폼 데이터 수집
    const formData = {
      email: email,
      username: username,
      password: password,
    };

    // 회원가입 API 호출
    try {
      const response = await signup(formData); // formData를 서버로 전달
      if (response.success) {
        setMessage("회원가입이 성공적으로 완료되었습니다.");
      } else {
        setMessage("회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      setMessage("회원가입 중 오류가 발생했습니다.");
    }
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
          label="유저네임"
          type="text"
          value={username}
          onChange={onChangeUsername}
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
