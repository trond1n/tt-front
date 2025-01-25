import { useState } from "react";
import styles from "./Infusions.module.css";
const infusionsData = [
  {
    id: 1,
    number: 1,
    duration: 60,
  },
  {
    id: 2,
    number: 2,
    duration: 70,
  },
  {
    id: 3,
    number: 3,
    duration: 80,
  },
];

/**
 * Компонент, отображающий список проливов.
 * @returns {ReactElement} JSX-элемент, отображающий список проливов
 */
const Infusions = () => {
  const [comment, setComment] = useState<string>("");

  /**
   * Преобразует секунды в формат времени мм:сс
   * @param {number} seconds
   * @returns {string} время в формате мм:сс
   */
  const convertSecondsToTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Проливы</h2>
      <p className={styles.time}>Сегодня, 08:00</p>
      <div className={styles.infusions}>
        {infusionsData.map((infusion) => (
          <div key={infusion.number} className={styles.infusion}>
            <span>{infusion.number} пролив</span>
            <span>{convertSecondsToTime(infusion.duration)}</span>
          </div>
        ))}
      </div>
      <div className={styles.comment}>
        <textarea
          value={comment}
          placeholder="Ваш комментарий"
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Infusions;
