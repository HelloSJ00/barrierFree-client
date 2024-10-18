import React from "react";
import styles from "./bookmark.module.css";
import useGeoStore from "@/app/_libs/useGeoStore";
import Bookmark from "../../_components/Bookmark";

const BookmarkCard = ({ place }) => {
  const { setCoordinates } = useGeoStore();
  const onClickMoveMap = () => {
    const lat = place.latitude;
    const lon = place.longitude;

    // Zustand를 사용하여 위도와 경도 상태를 업데이트
    setCoordinates(lat, lon);
    console.log(`위도: ${lat}, 경도: ${lon}로 지도 이동`);
  };
  return (
    <div className={styles.box}>
      <div className={styles.placeTitle}>
        <div>{place.PLACE_NM}</div>
        <Bookmark placeId={place.placeId} />
      </div>
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
