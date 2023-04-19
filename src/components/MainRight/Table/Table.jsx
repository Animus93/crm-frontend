import styles from "./table.module.css";
import filter from "../../../img/filter.svg";
import {
  useDeleteNoteMutation,
  useGetNotesQuery,
} from "../../../store/notesMockApi";
import editImg from "../../../img/edit.svg";
import deleteImg from "../../../img/delete.svg";
import { Link, Outlet } from "react-router-dom";
import { status } from "../../../store/modalStatusSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function Table() {
  const { data } = useGetNotesQuery();
  const dispatch = useDispatch();
  const [result, setResult] = useState();
  const [deleteItem] = useDeleteNoteMutation();
  function deleteNote(item) {
    deleteItem(item);
  }

  useEffect(() => {
    setResult(data);
  }, [data]);

  function sortHandler(value) {
    // eslint-disable-next-line
    const sortByValue = [...result].sort((x, y) => {
      if(x[value] < y[value]){
        return -1
      }
    });
    setResult(sortByValue)
  }
  return (
    <>
      <Outlet />
      <table className={styles.tableWrap}>
        <thead className={styles.tableHead}>
          <tr>
            <th
              className={styles.tableHeadItem}
              onClick={() => sortHandler("ClientID")}
            >
              <input type="checkbox" />
              &nbsp;Client ID{" "}
              <img
                className={styles.tableHeadItemIcon}
                src={filter}
                alt="filter"
              ></img>
            </th>
            <th className={styles.tableHeadItem}
            onClick={() => sortHandler("ClientName")}>
              Client name{" "}
              <img
                className={styles.tableHeadItemIcon}
                src={filter}
                alt="filter"
              ></img>
            </th>
            <th className={styles.tableHeadItem}
            onClick={() => sortHandler("TRN_PPSN")}>
              TRN/PPSN{" "}
              <img
                className={styles.tableHeadItemIcon}
                src={filter}
                alt="filter"
              ></img>
            </th>
            <th className={styles.tableHeadItem}
            onClick={() => sortHandler("YearEnd")}>
              Year end{" "}
              <img
                className={styles.tableHeadItemIcon}
                src={filter}
                alt="filter"
              ></img>
            </th>
            <th className={styles.tableHeadItem}
            onClick={() => sortHandler("ARD")}>
              ARD{" "}
              <img
                className={styles.tableHeadItemIcon}
                src={filter}
                alt="filter"
              ></img>
            </th>
            <th className={styles.tableHeadItem}
            onClick={() => sortHandler("CompanyNumber")}>
              Company number{" "}
              <img
                className={styles.tableHeadItemIcon}
                src={filter}
                alt="filter"
              ></img>
            </th>
            <th className={styles.tableHeadItem}>Email</th>
            <th className={styles.tableHeadItem}>Phone number</th>
            <th className={styles.tableHeadItem}>Company address</th>
            <th className={styles.tableHeadItem}>Action</th>
          </tr>
        </thead>
        <tbody>
          {result &&
            result.map((note) => {
              return (
                <tr className={styles.tableRow} key={note.id}>
                  <td className={styles.tableRowItem}>
                    <input type="checkbox" />
                    {note.ClientID}
                  </td>
                  <td className={styles.tableRowItem}>{note.ClientName}</td>
                  <td className={styles.tableRowItem}>{note.TRN_PPSN}</td>
                  <td className={styles.tableRowItem}>{note.YearEnd}</td>
                  <td className={styles.tableRowItem}>{note.ARD}</td>
                  <td className={styles.tableRowItem}>{note.CompanyNumber}</td>
                  <td className={styles.tableRowItem}>{note.Email}</td>
                  <td className={styles.tableRowItem}>{note.PhoneNumber}</td>
                  <td className={styles.tableRowItem}>{note.CompanyAddress}</td>
                  <td className={styles.tableRowItem}>
                    <Link
                      to="edit"
                      state={note}
                      onClick={() => dispatch(status(true))}
                    >
                      <img className={styles.icons} src={editImg} alt="edit" />
                    </Link>
                    <img
                      className={styles.icons}
                      onClick={() => deleteNote(note.id)}
                      src={deleteImg}
                      alt="delete"
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
