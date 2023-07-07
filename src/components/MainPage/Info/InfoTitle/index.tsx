import { Dispatch, FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { openModal } from "../../../../Redux/modal-window/action";
import { store } from "../../../../Redux/store";
import { selectUserData } from "../../../../Redux/user-data/selector";
import { Button } from "../../../Button";
import styles from "./index.module.scss";

type Props = {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<React.SetStateAction<boolean>>;
};

export const InfoTitle: FC<Props> = ({ isOpenModal, setIsOpenModal }) => {
  const [userName, setUserName] = useState(localStorage.getItem("name"));
  const navigation = useNavigate();
  const put = useDispatch();
  const userData = useSelector(selectUserData);

  const handleClickExit = () => {
    localStorage.removeItem("name");
    setUserName(null);
    window.location.reload();
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "name") {
        setUserName(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className={styles.help}>
      <div className={styles.title}>
        <h1>Место для получения медицинской помощи</h1>
      </div>
      <div className={styles.buttons}>
        {userName !== null ? (
          <Button
            type={"primary"}
            className={styles.enter_button}
            onClick={() => handleClickExit()}
          >
            Выйти
          </Button>
        ) : (
          <Button
            type={"primary"}
            className={styles.enter_button}
            onClick={() => put(openModal())}
          >
            Войти
          </Button>
        )}
        <Button
          type={"secondary"}
          className={styles.contact_button}
          onClick={() => {
            navigation("/contacts");
          }}
        >
          Контакты
        </Button>
      </div>
    </div>
  );
};
