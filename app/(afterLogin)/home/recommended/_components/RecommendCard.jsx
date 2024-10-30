"use client";
import React, { useState, useEffect } from "react";
import styles from "./recommendCard.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BasicSmallBtn from "../../_components/BasicSmallBtn";
import { useRouter } from "next/navigation";
import useGeoStore from "@/app/_libs/useGeoStore";
import { getPlaceCoordinate } from "../_libs/getPlaceCoordinate";

const RecommedCard = ({ place, order }) => {
  const { setCoordinates } = useGeoStore();
  const router = useRouter();
  // 위도와 경도 상태 선언
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // 컴포넌트가 생성될 때 getPlaceCoordinate 호출
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await getPlaceCoordinate({
          placeKey: place.PLACE_KEY,
        });
        const { latitude, longitude } = response; // 응답에서 위도와 경도 추출
        setLatitude(latitude);
        setLongitude(longitude);
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, [place.PLACE_KEY]);

  const onClickReviewPage = () => {
    router.push(`/home/recommended/${place.PLACE_KEY}/reviews`);
  };
  const onClickPlaceDetails = () => {
    router.push(`/home/recommended/${place.PLACE_KEY}/info`);
  };
  const onClickMoveMap = () => {
    const lat = latitude;
    const lon = longitude;

    // Zustand를 사용하여 위도와 경도 상태를 업데이트
    setCoordinates(lat, lon);
    console.log(`위도: ${lat}, 경도: ${lon}로 지도 이동`);
  };

  return (
    <div className={styles.box}>
      <section className={styles.infoSection}>
        <span>
          {/* <i>
            <strong>
              {order}. {place.PLACE_NM}
            </strong>
          </i> */}
          {order}. {place.PLACE_NM}
        </span>
        <div className={styles.btnBox}>
          <BasicSmallBtn text={"리뷰"} onClick={onClickReviewPage} />
          <BasicSmallBtn text={"실시간 정보"} onClick={onClickPlaceDetails} />
          <BasicSmallBtn text={"장소로 이동"} onClick={onClickMoveMap} />
        </div>
      </section>
      <section className={styles.scoreSection}>
        <div className={styles.chartBox}>
          <CircularProgressbar
            value={Math.floor(place.REC_SCORE)}
            text={`${Math.floor(place.REC_SCORE)}점`}
            styles={buildStyles({
              pathColor: "#388e3c", // 고정된 색상
              textColor: "#388e3c",
            })}
          />
        </div>
        <div>
          {/* <strong>
            <i>추천 지수</i>
          </strong> */}
          추천 지수
        </div>
      </section>
    </div>
  );
};

export default RecommedCard;
