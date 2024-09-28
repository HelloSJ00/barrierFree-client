"use client";
import React from "react";
import styles from "./navbar.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const onClickLogout = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/home" passHref>
          <Button color="inherit" sx={{ fontSize: 20 }}>
            배리어 프리
          </Button>
        </Link>
      </div>
      <AppBar
        position="static"
        color="primary"
        sx={{
          flexGrow: 1,
          backgroundColor: "white",
          color: "#66bb6a",
          boxShadow: "none", // 그림자 제거
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column", // 수직 레이아웃을 위해 flexDirection을 column으로 설정
            alignItems: "center", // 가운데 정렬
            gap: 2, // 요소 간의 간격
            minHeight: "auto", // 기본 Toolbar 높이 재정의
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexGrow: 1, // 부모 컨테이너에 따라 자식 요소가 공간을 차지하도록 설정
              gap: 2,
              flexDirection: "column", // 수직 레이아웃을 위해 flexDirection을 column으로 설정
              alignItems: "center", // 가운데 정렬
              justifyContent: "center", // 수직 가운데 정렬
              width: "100%", // 부모에 맞게 전체 너비 설정
            }}
          >
            <Link href="/" passHref>
              <Button color="inherit" sx={{ fontSize: 20 }}>
                ?
              </Button>
            </Link>
            <Link href="/home/bookmarks" passHref>
              <Button color="inherit" sx={{ fontSize: 20 }}>
                즐겨찾기
              </Button>
            </Link>
            <Link href="/user" passHref>
              <Button color="inherit" sx={{ fontSize: 20 }}>
                계정
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <footer className={styles.footer}>
        <Button
          onClick={onClickLogout}
          sx={{
            width: 270,
            height: 70,
            backgroundColor: "white",
            color: "#1b5e20",
            borderColor: "#1b5e20",
            fontSize: 20,
            borderRadius: 50,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // 그림자 효과 추가
            "&:hover": {
              backgroundColor: "#c8e6c9",
            },
          }}
          variant="outlined"
        >
          로그아웃
          <LogoutIcon sx={12} />
        </Button>
      </footer>
    </div>
  );
};

export default Navbar;
