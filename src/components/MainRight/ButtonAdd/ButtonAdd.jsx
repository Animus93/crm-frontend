import { Link } from "react-router-dom";
import styles from "./buttonAdd.module.css";
import { useDispatch } from "react-redux";
import { status } from "../../../store/modalStatusSlice";

function ButtonAdd() {
  const dispatch = useDispatch()
  return (
    <div className={styles.wrapper}>
      <Link to="create" state={false}>
        <button className={styles.addBtn} onClick={()=>dispatch(status(true))}>Add+</button>
      </Link>
    </div>
  );
}

export default ButtonAdd;
