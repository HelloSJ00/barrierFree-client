"use client";
import React from "react";
import styles from "./recommendCard.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BasicSmallBtn from "./BasicSmallBtn";
const RecommedCard = ({ place, order }) => {
  return (
    <div className={styles.box}>
      <section className={styles.infoSection}>
        <div>
          <i>
            <strong>
              {order}. {place.PLACE_NM}
            </strong>
          </i>
        </div>
        <div className={styles.btnBox}>
          <BasicSmallBtn text={"리뷰보기"} />
          <BasicSmallBtn text={"실시간 정보"} />
        </div>
      </section>
      <section className={styles.scoreSection}>
        <div className={styles.chartBox}>
          <CircularProgressbar
            value={place.REC_SCORE}
            text={`${place.REC_SCORE}점`}
            styles={buildStyles({
              pathColor: "#388e3c", // 고정된 색상
              textColor: "#388e3c",
            })}
          />
        </div>
        <div>
          <strong>
            <i>추천 지수</i>
          </strong>
        </div>
      </section>
    </div>
  );
};

export default RecommedCard;
