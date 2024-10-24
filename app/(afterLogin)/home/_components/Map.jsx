"use client";
import { useEffect, useRef } from "react";
import Head from "next/head";
import styles from "./map.module.css";
import useGeoStore from "@/app/_libs/useGeoStore";

const NaverMap = () => {
  const { latitude, longitude, setCoordinates, resetCoordinates } =
    useGeoStore();
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}&submodules=geocoder`;
    script.async = true;
    script.onload = () => {
      const mapDiv = document.getElementById("map");
      const map = new naver.maps.Map(mapDiv, {
        center: new naver.maps.LatLng(
          latitude || 37.5665,
          longitude || 126.978
        ), // 초기 좌표 (서울 시청)
        logoControl: false, // 네이버 로고 표시 X
        mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
        scaleControl: true, // 지도 축척 컨트롤의 표시 여부
        tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
        zoom: 14, // 지도의 초기 줌 레벨
        zoomControl: true, // 줌 컨트롤 표시
        zoomControlOptions: { position: 9 }, // 줌 컨트롤 우하단에 배치
      });

      mapRef.current = map;

      // 마커 생성 (초기 좌표 설정)
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(
          latitude || 37.5665,
          longitude || 126.978
        ),
        map: map,
      });

      markerRef.current = marker;

      // 위도와 경도가 변경될 때마다 지도를 부드럽게 이동시킴
      if (latitude && longitude) {
        const newCenter = new naver.maps.LatLng(latitude, longitude);
        map.panTo(newCenter, { duration: 1000 }); // duration 옵션으로 부드럽게 이동 (1초)
        marker.setPosition(newCenter); // 마커 위치 변경
      }

      // Zustand 상태 변경 시 지도 중심 이동
      const updateMapCenter = () => {
        if (latitude && longitude) {
          const newCenter = new naver.maps.LatLng(latitude, longitude);
          map.panTo(newCenter, { duration: 1000 }); // duration 옵션으로 부드럽게 이동 (1초)
          marker.setPosition(newCenter); // 마커 위치 변경
        }
      };

      // Zustand 상태 구독
      const unsubscribe = useGeoStore.subscribe(
        (state) => [state.latitude, state.longitude],
        () => updateMapCenter()
      );

      return () => unsubscribe(); // 컴포넌트가 언마운트될 때 구독 해제
    };

    document.head.appendChild(script);
  }, [latitude, longitude]);

  return (
    <div className={styles.container}>
      <Head>
        <script
          type="text/javascript"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}&submodules=geocoder`}
          async
        ></script>
      </Head>
      <div id="map" className={styles.map}></div>
    </div>
  );
};

export default NaverMap;
