"use client";
import React, { useEffect } from "react";
import styles from "./navbar.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
//ICON
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import KBarrierFreeLogo from "@/app/_components/KBarrierFreeLogo";
import RateReviewIcon from "@mui/icons-material/RateReview";

const Navbar = () => {
  const router = useRouter();
  const onClickLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/logout`,
        {
          method: "POST",
          credentials: "include", // 쿠키와 함께 요청을 보내기 위해 필요
        }
      );
      console.log(response.status);

      if (response.status === 200) {
        // 로그아웃 성공 시 처리할 로직
        router.push("/");
      } else {
        console.error("로그아웃 실패");
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/home" passHref>
          <Button color="inherit" sx={{ fontSize: 20 }}>
            <KBarrierFreeLogo></KBarrierFreeLogo>
          </Button>
        </Link>
      </div>
      <AppBar
        position="static"
        color="primary"
        sx={{
          flexGrow: 1,
          backgroundColor: "transparent", // 배경 투명
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
            <Link href="/home/bookmarks" passHref>
              <Button
                color="inherit"
                sx={{
                  fontSize: 20,
                  display: "flex", // 아이콘과 텍스트를 가로로 정렬
                  alignItems: "center", // 세로 가운데 정렬
                  gap: 1, // 아이콘과 텍스트 사이의 간격 설정
                }}
              >
                <BookmarksIcon sx={{ fontSize: 24 }} />
                {/* <i>찜한 장소</i> */}
                찜한 장소
              </Button>
            </Link>
            <Link href="/home/myreviews" passHref>
              <Button
                color="inherit"
                sx={{
                  fontSize: 20,
                  display: "flex", // 아이콘과 텍스트를 가로로 정렬
                  alignItems: "center", // 세로 가운데 정렬
                  gap: 1, // 아이콘과 텍스트 사이의 간격 설정
                }}
                startIcon={<RateReviewIcon />}
              >
                {/* <i>내가 작성한 리뷰</i> */}
                내가 작성한 리뷰
              </Button>
            </Link>

            <Link href="/user" passHref>
              <Button
                color="inherit"
                sx={{
                  fontSize: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <AccountCircleIcon sx={{ fontSize: 24 }} />
                {/* <i>계정</i> */}
                계정
              </Button>
            </Link>
            {/* <Link href="/home/recommended" passHref>
              <Button color="inherit" sx={{ fontSize: 20 }}>
                임시 추천
              </Button>
            </Link> */}
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
            display: "flex",
            alignItems: "center",
            gap: 1,
            borderRadius: 50,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // 그림자 효과 추가
            "&:hover": {
              backgroundColor: "#c8e6c9",
            },
          }}
          variant="outlined"
        >
          <LogoutIcon sx={12} />
          로그아웃
        </Button>
      </footer>
    </div>
  );
};

export default Navbar;
