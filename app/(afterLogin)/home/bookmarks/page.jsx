import React from "react";
import styles from "./bookmark.module.css";
import BackButton from "@/app/_components/BackButton";
import LeftMotionProvider from "../_components/LeftMotionProvider";
import PlacesBookmarked from "./_components/PlacesBookmarked";

const Page = async () => {
  return (
    <LeftMotionProvider>
      <div className={styles.container}>
        <div className={styles.header}>
          <BackButton />
          <div className={styles.headerTextBox}>
            <span className={styles.headerText}>
              <i>
                <strong>찜한 장소</strong>
              </i>
            </span>
          </div>
          <div className={styles.box}></div>
        </div>
        <section className={styles.PlacesBookmarkedSection}>
          {" "}
          <PlacesBookmarked />
        </section>
      </div>
    </LeftMotionProvider>
  );
};

export default Page;
