import { NavLink, useNavigate } from "react-router-dom";
import styles from "./mainLeft.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/userInfoSlice";
function MainLeft() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function Logout() {
    dispatch(login(""));
    navigate("/");
  }
  return (
    <div className={styles.content}>
      <h1 className={styles.logo}>LOGO</h1>
      <ul className={styles.navigate}>
        <li>
          <NavLink to="total" className={styles.navigateItem}>
            <div className={styles.iconTotal}></div>Total Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="calendar" className={styles.navigateItem}>
            {" "}
            <div className={styles.iconCalendar}></div>Calendar
          </NavLink>
        </li>
        <li>
          <NavLink to="reports" className={styles.navigateItem}>
            <div className={styles.iconReport}></div>
            Project Report
          </NavLink>
        </li>
      </ul>
      <div onClick={Logout} className={styles.logOut}>
        <div className={styles.logOutIcon}></div>Log out
      </div>
    </div>
  );
}
export default MainLeft;
