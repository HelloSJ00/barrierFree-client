"use client";
import React from "react";
import BasicButton from "@/app/(beforeLogin)/_components/common/BasicButton";
import { TextField, Button, Box, Typography } from "@mui/material";
import styles from "./userInfo.module.css";
const UserInfo = () => {
  const handleEditClick = () => {
    // 수정하기 버튼 클릭 시 처리 로직
    console.log("수정하기 버튼 클릭됨");
  };
  return (
    <Box
      className={styles.container}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "300px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        <i>
          <strong>유저 정보</strong>
        </i>
      </Typography>

      <TextField
        label="이메일"
        variant="outlined"
        value="user@example.com" // 실제 이메일 값을 넣으세요
        inputProps={{
          readOnly: true, // 수정 불가 속성
        }}
      />

      <TextField
        label="유저네임"
        variant="outlined"
        value="username123" // 실제 유저네임 값을 넣으세요
        inputProps={{
          readOnly: true, // 수정 불가 속성
        }}
      />

      <div className={styles.userFooter}>
        <BasicButton
          variant="contained"
          color="primary"
          onClick={handleEditClick}
          text={"수정"}
        />
      </div>
    </Box>
  );
};

export default UserInfo;
