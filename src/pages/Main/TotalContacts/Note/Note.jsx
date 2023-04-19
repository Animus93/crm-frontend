import { useLocation } from "react-router-dom";
import styles from "./note.module.css";
import ModalNote from "../../../../components/MainRight/ModalNote/ModalNote";

function Note() {
  let { state } = useLocation();
  return <ModalNote props={state} />;
}

export default Note;
