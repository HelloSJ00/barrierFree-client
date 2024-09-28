import RecommendPlaceButton from "./_components/RecommendPlaceButton";
import styles from "./layout.module.css";
import NaverMap from "./_components/Map";
const Layout = ({ children }) => {
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
