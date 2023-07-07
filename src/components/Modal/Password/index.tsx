import { Dispatch, FC, useEffect, useState } from "react";
import styles from "./index.module.scss";

type Props = {
  password: string;
  setPassword: Dispatch<React.SetStateAction<string>>;
  isPassword: boolean | undefined;
};
export const Password: FC<Props> = ({ password, setPassword, isPassword }) => {
  const [valudationPassword, setValidationPassword] = useState<boolean>();
  const [warningPassword, serWarningPassword] = useState<string>();
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [passwordType, setPasswordType] = useState<string>("password");
  const [changePassword, setChangePassword] = useState<string>("");

  //смена видимости пароля
  useEffect(() => {
    if (visiblePassword) {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }, [visiblePassword]);

  //проверка введенного пароля при клике вне поля
  useEffect(() => {
    if (isPassword === false) {
      serWarningPassword("Пароль должен содержать больше 8 символов");
      setValidationPassword(true);
    } else {
      setChangePassword("");
    }
  }, [isPassword]);

  const handleBlurPassword = () => {
    if (changePassword?.length! <= 8) {
      setValidationPassword(true);
      serWarningPassword("Пароль должен содержать больше 8 символов");
    } else if (!/^[a-zA-Z0-9]+$/.test(changePassword!)) {
      setValidationPassword(true);
      serWarningPassword("Пароль должен содержать только буквы и цифры");
    } else {
      setPassword(changePassword);
      setValidationPassword(false);
    }
  };

  return (
    <div className={styles.container}>
      <span>Введите пароль</span>
      <div className={styles.inpur_password}>
        <input
          type={passwordType}
          name=""
          id=""
          placeholder="password"
          value={changePassword}
          onChange={(e) => {
            setChangePassword(e.target.value);
          }}
          onBlur={handleBlurPassword}
        />
        <div
          className={
            visiblePassword
              ? styles.visible_password
              : styles.unvisible_password
          }
          onClick={() => {
            setVisiblePassword(!visiblePassword);
          }}
        ></div>
      </div>

      {valudationPassword && <p>{warningPassword}</p>}
    </div>
  );
};
