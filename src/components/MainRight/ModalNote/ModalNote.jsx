import styles from "./modalNote.module.css";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { status } from "../../../store/modalStatusSlice";
import { useForm } from "react-hook-form";
import {
  useAddNoteMutation,
  useUpdateNoteMutation,
} from "../../../store/notesMockApi";

Modal.setAppElement("#root");

function ModalNote({ props }) {
  const modalIsOpen = useSelector((state) => state.modalStatus);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updItem] = useUpdateNoteMutation();
  const [addItem] = useAddNoteMutation();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      ClientID: props?.ClientID || "",
      ClientName: props?.ClientName || "",
      TRN_PPSN: props?.TRN_PPSN || "",
      YearEnd: props?.YearEnd || "",
      ARD: props?.ARD || "",
      CompanyNumber: props?.CompanyNumber || "",
      Email: props?.Email || "",
      PhoneNumber: props?.PhoneNumber || "",
      CompanyAddress: props?.CompanyAddress || "",
    },
  });
  function closeModal() {
    reset();
    dispatch(status(false));
    navigate(-1);
  }
  function onSubmit(data) {
    props ? updItem({ ...data, id: props.id }) : addItem(data);
    closeModal();
  }

  return (
    <div
      className={styles.layout}
      onClick={(e) => {
        if (e.target?.classList[0] === "ReactModal__Overlay") closeModal();
      }}
    >
      <Modal
        isOpen={modalIsOpen}
        className={styles.modal}
        contentLabel="Example Modal"
      >
        <h2>{}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label}>Client ID</label>
          <input className={styles.input} {...register("ClientID", {})} />

          <label className={styles.label}>Client name</label>
          <input className={styles.input} {...register("ClientName", {})} />

          <label className={styles.label}>TRN/PPSN</label>
          <input className={styles.input} {...register("TRN_PPSN", {})} />

          <label className={styles.label}>Year end</label>
          <input className={styles.input} {...register("YearEnd", {})} />

          <label className={styles.label}>ARD</label>
          <input className={styles.input} {...register("ARD", {})} />

          <label className={styles.label}>Company number</label>
          <input className={styles.input} {...register("CompanyNumber", {})} />

          <label className={styles.label}>Email</label>
          <input className={styles.input} {...register("Email", {})} />

          <label className={styles.label}>Phone number</label>
          <input className={styles.input} {...register("PhoneNumber", {})} />

          <label className={styles.label}>Company address</label>
          <input className={styles.input} {...register("CompanyAddress", {})} />
          <input
            className={styles.sumbit}
            type="submit"
            value={props ? "Edit" : "Create"}
          />
        </form>
      </Modal>
    </div>
  );
}

export default ModalNote;
