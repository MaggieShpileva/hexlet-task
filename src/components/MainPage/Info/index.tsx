import { Dispatch, FC, useState } from "react";
import { Button } from "../../Button";
import { Modal } from "../../Modal";
import styles from "./index.module.scss";
import { InfoTitle } from "./InfoTitle";
import { Cards } from "./Сards";

export const Info: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className={styles.container}>
      <InfoTitle isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      <Cards />
    </div>
  );
};
