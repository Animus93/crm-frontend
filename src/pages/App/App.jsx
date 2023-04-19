import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../Login/Login";
import styles from "./app.module.css";
import Main from "../Main/Main";
import TotalContacts from "../Main/TotalContacts/TotalContacts";
import Note from "../Main/TotalContacts/Note/Note";
import Developing from "../Main/Developing/Developing";

function App() {
  const isRegistered = useSelector((state) => state.userInfo);
  return (
    <div className={styles.content}>
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Routes>
          <Route
            path="*"
            element={
              isRegistered ? (
                <Main />
              ) : (
                <div className={styles.loginWrapper}>
                  <Login />
                </div>
              )
            }
          >
            <Route path="total" element={<TotalContacts />}>
              <Route path="edit" element={<Note />} />
              <Route path="create" element={<Note />} />
            </Route>
            <Route path="calendar" element={<Developing />} />
            <Route path="reports" element={<Developing />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
