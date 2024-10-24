import React from "react";
import styles from "./bookmark.module.css";
import useGeoStore from "@/app/_libs/useGeoStore";
import Bookmark from "../../_components/Bookmark";
import BasicSmallBtn from "../../_components/BasicSmallBtn";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "next/navigation";

const BookmarkCard = ({ place, order }) => {
  const router = useRouter();
  const { setCoordinates } = useGeoStore();

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
          <Bookmark placeKey={place.PLACE_KEY} mine={place.mine} />
          <i>
            <strong>{place.PLACE_NM}</strong>
          </i>
        </div>
        <div className={styles.btnBox}>
          <BasicSmallBtn text={"리뷰"} onClick={onClickReviewPage} />
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

export default BookmarkCard;

/*
  {
        PLACE_NM: "eq궁",
        PLACE_KEY: 5,
        REC_SCORE: 77,
        latitude: 37.57975395,
        longitude: 126.976680698869,
        mine: true,
      },
*/
