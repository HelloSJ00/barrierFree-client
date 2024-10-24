"use client";
import React, { useState, useEffect } from "react";
import BasicButton from "@/app/(beforeLogin)/_components/common/BasicButton";
import { TextField, Box, Typography } from "@mui/material";
import styles from "./userInfo.module.css";
import { getUserInfo } from "../_libs/getUserInfo";
import Loading from "@/app/loading";
import { updateUserInfo } from "../_libs/updateUserInfo";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
  });
  const [isEditing, setIsEditing] = useState(false); // 편집 모드 상태 추가
  const [editedUsername, setEditedUsername] = useState(userInfo.username); // 편집 중인 username

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await getUserInfo();
        if (response && response.data) {
          setUserInfo({
            username: response.data.username || "",
            email: response.data.email || "",
          });
          setEditedUsername(response.data.username || "");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }
    fetchUserInfo();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true); // 편집 모드로 전환
  };

  const handleCancelClick = () => {
    setIsEditing(false); // 편집 모드 해제
    setEditedUsername(userInfo.username); // 변경 사항 취소
  };

  const handleSaveClick = async () => {
    // 수정 완료 버튼 클릭 시 처리 로직
    console.log("수정 완료하기 버튼 클릭됨");
    try {
      const response = await updateUserInfo({ username: editedUsername });

      if (response.ok) {
        setUserInfo((prev) => ({
          ...prev,
          username: editedUsername,
        }));
        setIsEditing(false); // 편집 모드 해제
      } else {
        // 에러 처리 로직
        console.error("Failed to update user info");
      }
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  const handleUsernameChange = (e) => {
    setEditedUsername(e.target.value);
  };

  if (!userInfo) {
    return <Loading />;
  }

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
        name="email"
        value={userInfo.email}
        InputProps={{
          readOnly: true, // 항상 읽기 전용
        }}
      />

      <TextField
        label="유저네임"
        variant="outlined"
        name="username"
        value={isEditing ? editedUsername : userInfo.username}
        onChange={handleUsernameChange}
        InputProps={{
          readOnly: !isEditing, // 편집 모드에 따라 읽기 전용 설정
        }}
      />

      <div className={styles.userFooter}>
        {isEditing ? (
          <>
            <BasicButton
              variant="contained"
              color="primary"
              onClick={handleSaveClick}
              text={"수정 완료하기"}
            />
            <BasicButton
              variant="outlined"
              color="secondary"
              onClick={handleCancelClick}
              text={"취소하기"}
              style={{ marginLeft: "10px" }}
            />
          </>
        ) : (
          <BasicButton
            variant="contained"
            color="primary"
            onClick={handleEditClick}
            text={"수정하기"}
          />
        )}
      </div>
    </Box>
  );
};

export default UserInfo;
