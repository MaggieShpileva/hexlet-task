import { useSelector } from "react-redux";
import { selectModal } from "../../Redux/modal-window/selector";
import { Header } from "../Header";
import { Modal } from "../Modal";
import styles from "./index.module.scss";

export const Contacts = () => {
  const { isOpen } = useSelector(selectModal);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <p>Контакты</p>
      </div>
      {isOpen && <Modal />}
    </div>
  );
};
