import MainLeft from "../../components/MainLeft/MainLeft";
import MainRight from "../../components/MainRight/MainRight";
import styles from "./main.module.css";
function Main() {
  return (
    <div className={styles.content}>
      <MainLeft />
      <MainRight />
    </div>
  );
}

export default Main;
