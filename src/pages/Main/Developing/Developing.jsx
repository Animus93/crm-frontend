import { useLocation } from "react-router-dom";
import styles from "./developing.module.css";

function Developing() {
  const location = useLocation();
  console.log();
  return (
    <div className={styles.wrapper}>
      <h1>
        Страница <label className={styles.pageName}>{location.pathname}</label> в разработке
      </h1>
    </div>
  );
}
export default Developing;
