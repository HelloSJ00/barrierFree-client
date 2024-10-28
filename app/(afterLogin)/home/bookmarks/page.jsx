import React from "react";
import styles from "./bookmark.module.css";
import BackButton from "@/app/_components/BackButton";
import LeftMotionProvider from "../_components/LeftMotionProvider";
import PlacesBookmarked from "./_components/PlacesBookmarked";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getBookmarked } from "./_libs/getBookmarked";
const Page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["bookmarks"],
    queryFn: getBookmarked,
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
                {/* <i>
                <strong>찜한 장소</strong>
              </i> */}
                찜한 장소
              </span>
            </div>
            <div className={styles.box}></div>
          </div>
          <section className={styles.PlacesBookmarkedSection}>
            {" "}
            <PlacesBookmarked />
          </section>
        </div>
      </HydrationBoundary>
    </LeftMotionProvider>
  );
};

export default Page;
