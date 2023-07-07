import { Dispatch, FC, useEffect, useState } from "react";
import styles from "./index.module.scss";

type Props = {
  login: string;
  setLogin: Dispatch<React.SetStateAction<string>>;
  isLogin: boolean | undefined;
  setError: Dispatch<React.SetStateAction<string>>;
};
export const Login: FC<Props> = ({ login, setLogin, isLogin, setError }) => {
  const [warningLogin, serWarningLogin] = useState<string>();
  const [valudationLogin, setValidationLogin] = useState<boolean>();
  const [changeLogin, setChangeLogin] = useState<string>(login);

  const handleBlurLogin = () => {
    if (changeLogin?.length! <= 4) {
      setValidationLogin(true);
      serWarningLogin("Логин должен содержать больше 4 символов");
    } else {
      setValidationLogin(false);
      setLogin(changeLogin);
    }
  };

  useEffect(() => {
    if (isLogin === false) {
      serWarningLogin("Логин должен содержать больше 4 символов");
      setValidationLogin(true);
    } else {
      setChangeLogin("");
    }
  }, [isLogin]);

  return (
    <div className={styles.input_login}>
      <span>Введите логин</span>
      <input
        type="text"
        name=""
        id=""
        placeholder="login"
        value={changeLogin}
        onChange={(e) => {
          setChangeLogin(e.target.value);
          setError("");
        }}
        onBlur={handleBlurLogin}
      />
      {valudationLogin && <p>{warningLogin}</p>}
    </div>
  );
};
