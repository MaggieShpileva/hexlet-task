import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../Redux/modal-window/action";
import { exitUser } from "../../Redux/user-data/action";
import { selectUserData } from "../../Redux/user-data/selector";
import { Button } from "../Button";
import styles from "./index.module.scss";

export const Header: FC = () => {
  const [userName, setUserName] = useState(localStorage.getItem("name"));
  const put = useDispatch();
  const navigation = useNavigate();
  const userData = useSelector(selectUserData);

  const handleClickExit = () => {
    localStorage.removeItem("name");
    put(exitUser());
    navigation("/");
  };

  const handleClickEnter = () => {
    put(openModal());
  };

  useEffect(() => {
    if (userData.data !== undefined || userData.data !== null) {
      setUserName(userData.data?.name!);
    }
  }, [userData]);

  return (
    <header>
      <div className={styles.logo}>
        <a href="/">logo</a>
      </div>
      <div className={styles.buttons}>
        <div className={styles.contacts}>
          <a href="/contacts">Контакты</a>
        </div>
        {userName !== undefined ? (
          <Button
            type={"header"}
            className={styles.exit_button}
            onClick={handleClickExit}
          >
            Выйти
          </Button>
        ) : (
          <Button
            type={"header"}
            className={styles.enter_button}
            onClick={handleClickEnter}
          >
            Войти
          </Button>
        )}
      </div>
    </header>
  );
};
