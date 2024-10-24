"use client";
import { useEffect, useRef } from "react";
import styles from "./map.module.css";
import useGeoStore from "@/app/_libs/useGeoStore";

const NaverMap = () => {
  const { latitude, longitude } = useGeoStore();
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}&submodules=geocoder`;
      script.async = true;
      script.onload = () => {
        const mapDiv = document.getElementById("map");
        const map = new naver.maps.Map(mapDiv, {
          center: new naver.maps.LatLng(
            latitude || 37.5665,
            longitude || 126.978
          ),
          zoom: 14,
        });
        mapRef.current = map;

        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            latitude || 37.5665,
            longitude || 126.978
          ),
          map: map,
        });
        markerRef.current = marker;

        // Zustand 상태 변경 시 지도 중심 이동
        const updateMapCenter = () => {
          if (latitude && longitude) {
            const newCenter = new naver.maps.LatLng(latitude, longitude);
            map.panTo(newCenter, { duration: 1000 });
            marker.setPosition(newCenter);
          }
        };

        const unsubscribe = useGeoStore.subscribe(
          (state) => [state.latitude, state.longitude],
          () => updateMapCenter()
        );

        return () => unsubscribe(); // 컴포넌트 언마운트 시 구독 해제
      };
      document.head.appendChild(script);
    }
  }, [latitude, longitude]);

  return <div id="map" className={styles.map}></div>;
};

export default NaverMap;
