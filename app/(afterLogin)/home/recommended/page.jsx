import React from "react";
import BackButton from "@/app/_components/BackButton";
import styles from "./recommended.module.css";
import LeftMotionProvider from "../_components/LeftMotionProvider";
import PlacesRecommneded from "./_components/PlacesRecommended";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getPlacesRecommend } from "./_libs/getRecommedPlaces";

const Page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["places", "recommends"],
    queryFn: getPlacesRecommend,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <LeftMotionProvider>
      <HydrationBoundary state={dehydratedState}>
        <div className={styles.container}>
          <div className={styles.header}>
            <BackButton />
            <div className={styles.headerTextBox}>
              <span className={styles.headerText}>
                <i>
                  <strong>추천 장소</strong>
                </i>
              </span>
            </div>
            <div className={styles.box}></div>
          </div>
          <section>
            <PlacesRecommneded />
          </section>
        </div>
      </HydrationBoundary>
    </LeftMotionProvider>
  );
};

export default Page;
