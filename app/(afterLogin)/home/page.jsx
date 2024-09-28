import React from "react";
import styles from "./home.module.css";
import Navbar from "./_components/Navbar";

const Page = () => {
  return (
    <main className={styles.container}>
      <Navbar />
    </main>
  );
};

export default Page;
