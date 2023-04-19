import { Outlet } from "react-router-dom";
import SerchBlok from "./SerchBlok/SerchBlok";
import styles from "./mainRight.module.css";
function MainRight() {
  return (
    <div className={styles.content}>
        <SerchBlok />
        <div className={styles.outlet}>
        <Outlet />
        </div>
    </div>
  );
}
export default MainRight;
