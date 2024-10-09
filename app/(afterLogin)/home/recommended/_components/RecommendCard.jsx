"use client";
import React from "react";
import styles from "./recommendCard.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BasicSmallBtn from "./BasicSmallBtn";
import { useRouter } from "next/navigation";
import useGeoStore from "@/app/_libs/useGeoStore";

const RecommedCard = ({ place, order }) => {
  const { setCoordinates } = useGeoStore();

  const router = useRouter();

  const onClickReviewPage = () => {
    router.push(`/home/recommended/${place.PLACE_KEY}/reviews`);
  };
  const onClickPlaceDetails = () => {
    router.push(`/home/recommended/${place.PLACE_KEY}/info`);
  };
  const onClickMoveMap = () => {
    const lat = place.latitude;
    const lon = place.longitude;

    // Zustand를 사용하여 위도와 경도 상태를 업데이트
    setCoordinates(lat, lon);
    console.log(`위도: ${lat}, 경도: ${lon}로 지도 이동`);
  };

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
          <BasicSmallBtn text={"리뷰보기"} onClick={onClickReviewPage} />
          <BasicSmallBtn text={"실시간 정보"} onClick={onClickPlaceDetails} />
          <BasicSmallBtn text={"장소로 이동"} onClick={onClickMoveMap} />
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
