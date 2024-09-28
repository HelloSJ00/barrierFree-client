"use client";
import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const onClickLogout = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/home" className={styles.navLink}>
          배리어 - 프리
        </Link>
      </div>
      <div className={styles.nav}>
        <Link href="/home" className={styles.navLink}>
          뭘 넣을지모름
        </Link>
        <Link href="/home/bookmarks" className={styles.navLink}>
          즐겨찾기
        </Link>
        <Link href="/user" className={styles.navLink}>
          계정
        </Link>
      </div>
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
