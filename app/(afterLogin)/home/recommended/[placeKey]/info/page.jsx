"use client";
import React, { useState, useEffect } from "react";
import styles from "./info.module.css";
import { motion } from "framer-motion";
import CloseButton from "@/app/_components/CloseButton";
import ModalBackground from "@/app/_components/ModalBackground";
import Bookmark from "../../../_components/Bookmark";
import { useParams, useRouter, useSearchParams } from "next/navigation"; // useSearchParams 추가
import { useQuery } from "@tanstack/react-query";
import { getInfoDetails } from "./_api/getInfoDetail";
import Rechart from "./_components/rechart/Rechart";
const Info = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams(); // useSearchParams로 쿼리 파라미터 접근
  const { placeKey } = params;

  // 쿼리 파라미터로부터 bookmarked 값 읽어오기
  const isBookmarked = searchParams.get("bookmarked") === "true";

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["info", placeKey],
    queryFn: getInfoDetails,
    enabled: !!placeKey, // placeKey가 유효할 때만 쿼리 실행
    staleTime: 60 * 1000, // 1분 동안 데이터가 신선하게 유지
    cacheTime: 300 * 1000, // 5분 동안 캐시 유지
  });

  const closeModal = () => {
    router.back(); // 뒤로 가기를 통해 모달을 닫고 원래 페이지로 돌아감
  };

  useEffect(() => {
    console.log(placeKey);
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
  return (
    <ModalBackground>
      <motion.div
        className={styles.modal}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.modalHeader}>
          <CloseButton onClickBtn={closeModal} />
          <span>{data?.AREA_NM}</span>
          <Bookmark placeKey={placeKey} mine={isBookmarked} />
        </div>
        <div className={styles.modalBody}>
          <div> 실시간 현황</div>
          {isLoading ? <div>Loading...</div> : <Rechart apiResponse={data} />}
        </div>
      </motion.div>
    </ModalBackground>
  );
};

export default Info;
