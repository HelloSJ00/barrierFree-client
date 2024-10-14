import RecommendPlaceButton from "./_components/RecommendPlaceButton";
import styles from "./layout.module.css";
import NaverMap from "./_components/Map";
import { cookies } from "next/headers";

const Layout = ({ children }) => {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("JSESSIONID");
  const session = sessionCookie ? sessionCookie.value : null;

  console.log("세션 정보:", session);
  return (
    <div className={styles.container}>
      <RecommendPlaceButton />
      <div className={styles.leftSection}>{children}</div>
      <div className={styles.rightSection}>
        <NaverMap />
      </div>
    </div>
  );
};

export default Layout;
