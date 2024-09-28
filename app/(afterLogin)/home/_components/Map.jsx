"use client";
import { useEffect } from "react";
import Head from "next/head";
import styles from "./map.module.css";

const NaverMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}&submodules=geocoder`;
    script.async = true;
    script.onload = () => {
      const mapDiv = document.getElementById("map");
      const map = new naver.maps.Map(mapDiv);
    };
    document.head.appendChild(script);
  }, []);

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
