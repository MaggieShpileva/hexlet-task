import styles from "./index.module.scss";
import icon_1 from "../../../../images/icons/icon cool-icon-155.svg";
import icon_2 from "../../../../images/icons/icon cool-icon-15.svg";
import icon_3 from "../../../../images/icons/icon cool-icon-152.svg";

const dataCards = [
  { icon: icon_1, title: "Лечение рака" },
  { icon: icon_2, title: "Онлайн-прием" },
  { icon: icon_3, title: "Экстренный Случай" },
];

export const Cards = () => {
  return (
    <div className={styles.container}>
      {dataCards.map((item, index) => {
        return (
          <div
            className={[styles.card, styles[`card_${index}`]].join(" ")}
            key={index}
          >
            <div className={styles.image}>
              <img src={item.icon} alt="" />
            </div>

            <div className={styles.title}>
              <h3>{item.title}</h3>
            </div>

            <hr />

            <div className={styles.text}>
              <p>Рыба текст</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
