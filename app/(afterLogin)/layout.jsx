import styles from "./layout.module.css";
// import { NavermapsProvider } from "react-naver-maps";

const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default Layout;
