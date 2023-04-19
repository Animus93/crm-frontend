import ButtonAdd from "../../../components/MainRight/ButtonAdd/ButtonAdd";
import Table from "../../../components/MainRight/Table/Table";
import styles from './totalContacts.module.css'
function TotalContacts() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>Total Contacts
        </div>
        <div className={styles.outlet}>
        <Table/>
        </div>
        <ButtonAdd/>
        <div className={styles.pagenation}>1,2,3,4</div>
    </div>
  );
}

export default TotalContacts;
