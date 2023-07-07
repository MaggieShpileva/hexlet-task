import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { exitUser, getUserData } from "../../Redux/user-data/action";
import { selectUserData } from "../../Redux/user-data/selector";
import { Button } from "../Button";
import styles from "./index.module.scss";
import { Login } from "./Login";
import { Password } from "./Password";
import { closeModal } from "../../Redux/modal-window/action";

export const Modal: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>();
  const [isPassword, setIsPassword] = useState<boolean>();
  const put = useDispatch();
  const navigation = useNavigate();
  const userData = useSelector(selectUserData);
  const [error, setError] = useState<string>("");

  //проверка , заполнены ли все поля
  const handleClick = () => {
    if (login === undefined) {
      setIsLogin(false);
    } else if (password === undefined || password.length <= 8) {
      setIsPassword(false);
    } else {
      setIsLogin(true);
      setIsPassword(true);
      put(getUserData({ login: login, password: password }));
      put(closeModal());
      setLogin("");
      setPassword("");
    }
  };

  //результат авторизации
  useEffect(() => {
    if (userData?.data !== undefined) {
      navigation("/account");
    } else if (userData?.message) {
      setError(userData?.message!);
    }
    if (userData?.message) {
      setError(userData?.message!);
    }
  }, [userData]);

  return (
    <div className={styles.container}>
      <div className={styles.modal_window}>
        <div className={styles.title}>
          <h1>Авторизация</h1>
        </div>
        <div className={styles.inputs}>
          <Login
            login={login}
            setLogin={setLogin}
            isLogin={isLogin}
            setError={setError}
          />
          <Password
            password={password}
            setPassword={setPassword}
            isPassword={isPassword}
          />
        </div>
        {error !== "" && (
          <div className={styles.error}>
            <h3>{error}</h3>
          </div>
        )}
        <Button
          type={"primary"}
          className={styles.enter_button}
          onClick={handleClick}
        >
          Вход
        </Button>
      </div>
      <div
        className={styles.bg}
        onClick={() => {
          put(closeModal());
          put(exitUser());
        }}
      ></div>
    </div>
  );
};
