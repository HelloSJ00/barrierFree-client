"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./info.module.css";
import { motion } from "framer-motion";
import CloseButton from "@/app/_components/CloseButton";
import ModalBackground from "@/app/_components/ModalBackground";
import Bookmark from "../../../_components/Bookmark";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getInfoDetails } from "./_api/getInfoDetail";
const Info = () => {
  const router = useRouter();
  const params = useParams(); // useParams 훅 사용
  const { placeKey } = params;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["info", placeKey],
    queryFn: getInfoDetails,
    enabled: placeKey !== null && placeKey !== undefined, // placeKey 유효할 때만 쿼리 실행
    staleTime: 60 * 1000, // 밀리초 단위
    gcTime: 300 * 1000,
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
        initial={{ scale: 0.5, opacity: 0 }} // 모달 초기 크기와 투명도
        animate={{ scale: 1, opacity: 1 }} // 모달이 커지는 애니메이션
        exit={{ scale: 0.5, opacity: 0 }} // 모달이 닫힐 때 애니메이션
        transition={{ duration: 0.3 }} // 애니메이션 지속 시간
      >
        <div className={styles.modalHeader}>
          <CloseButton onClickBtn={closeModal} />
          <Bookmark placeKey={placeKey} mine={false} />
        </div>
        <div className={styles.modalBody}></div>
      </motion.div>
    </ModalBackground>
  );
};

export default Info;
