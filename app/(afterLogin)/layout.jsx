import styles from "./layout.module.css";
import RQProvider from "./_components/RQProvider";
// import { NavermapsProvider } from "react-naver-maps";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <RQProvider>{children}</RQProvider>
    </div>
  );
};
export default Layout;
