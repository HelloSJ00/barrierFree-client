import RecommendPlaceButton from "./_components/RecommendPlaceButton";
import styles from "./layout.module.css";
import NaverMap from "./_components/Map";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Loading from "@/app/loading";

// import dynamic from "next/dynamic";

// const NaverMap = dynamic(() => import("./_components/Map"), {
//   ssr: false, // 서버사이드 렌더링 비활성화
// });

const Layout = ({ children }) => {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("JSESSIONID");
  const session = sessionCookie ? sessionCookie.value : null;

  console.log("세션 정보:", session);
  return (
    <div className={styles.container}>
      <RecommendPlaceButton />
      <Suspense fallback={<Loading />}>
        <div className={styles.leftSection}>{children}</div>
      </Suspense>
      <div className={styles.rightSection}>
        <NaverMap />
      </div>
    </div>
  );
};

export default Layout;
