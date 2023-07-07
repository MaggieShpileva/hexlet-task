import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectModal } from "../../Redux/modal-window/selector";
import { selectUserData } from "../../Redux/user-data/selector";
import { Header } from "../Header";
import { Modal } from "../Modal";
import styles from "./index.module.scss";
import { Info } from "./Info";

export const MainPage = () => {
  const { isOpen } = useSelector(selectModal);

  return (
    <div className={styles.container}>
      <Header />
      <Info />
      {isOpen && <Modal />}
    </div>
  );
};
