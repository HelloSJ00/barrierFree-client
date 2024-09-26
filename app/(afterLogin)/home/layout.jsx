import RecommendPlaceButton from "./_components/RecommendPlaceButton";
import styles from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <RecommendPlaceButton />
      <div className={styles.leftSection}>{children}</div>
      <div className={styles.rightSection}>
        <div className={styles.map}></div>
      </div>
    </div>
  );
};

export default Layout;
