import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { put } from "redux-saga/effects";
import { selectModal } from "../../Redux/modal-window/selector";
import { exitUser } from "../../Redux/user-data/action";
import { Button } from "../Button";
import { Header } from "../Header";
import { Modal } from "../Modal";
import styles from "./index.module.scss";

export const PersonalAccount = () => {
  const navigation = useNavigate();
  const userData = localStorage.getItem("name");
  const { isOpen } = useSelector(selectModal);

  const handleClick = () => {
    localStorage.removeItem("name");
    put(exitUser());
    navigation("/");
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        {userData === null ? (
          <div className={styles.title}>
            <h1>Вы не авторизованы</h1>
          </div>
        ) : (
          <div className={styles.title}>
            <h1>Привет, {localStorage.getItem("name")}</h1>
            <div className={styles.buttons}>
              <Button
                type={"primary"}
                className={styles.exit_button}
                onClick={() => {
                  handleClick();
                }}
              >
                Выйти из аккаунта
              </Button>
              <Button
                type={"secondary"}
                className={styles.contact_button}
                onClick={() => {
                  navigation("/contacts");
                }}
              >
                Перейти в контакты
              </Button>
            </div>
          </div>
        )}
      </div>
      {isOpen && <Modal />}
    </div>
  );
};
