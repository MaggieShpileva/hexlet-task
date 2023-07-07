import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../Redux/modal-window/action";
import { Button } from "../Button";
import styles from "./index.module.scss";

export const Header: FC = () => {
  const [userName, setUserName] = useState(localStorage.getItem("name"));
  const put = useDispatch();

  return (
    <header>
      <div className={styles.logo}>
        <a href="/">logo</a>
      </div>
      <div className={styles.buttons}>
        <div className={styles.contacts}>
          <a href="/contacts">Контакты</a>
        </div>
        {userName !== null ? (
          <Button type={"header"} className={styles.exit_button}>
            Выйти
          </Button>
        ) : (
          <Button
            type={"header"}
            className={styles.enter_button}
            onClick={() => {
              put(openModal());
            }}
          >
            Войти
          </Button>
        )}
      </div>
    </header>
  );
};
