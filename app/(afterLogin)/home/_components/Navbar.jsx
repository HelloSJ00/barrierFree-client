"use client";
import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

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
        <button onClick={onClickLogout} className={styles.logoutButton}>
          로그아웃
        </button>
      </footer>
    </div>
  );
};

export default Navbar;
