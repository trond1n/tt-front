import { useState, useEffect } from "react";
import styles from "./Timer.module.css";

const Timer: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(30); // Общее время в секундах
  const [timeLeft, setTimeLeft] = useState<number>(countdown); // Оставшееся время
  const [isRunning, setIsRunning] = useState<boolean>(false); // Статус таймера
  const [isFinished, setIsFinished] = useState<boolean>(false); // Флаг завершения таймера

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0));
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setTimeout(() => {
        setIsRunning(false);
        setIsFinished(true);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, timeLeft]);

  const updateCountdown = (amount: number) => {
    const newCountdown = Math.max(countdown + amount, 0);
    setCountdown(newCountdown);
    setTimeLeft(newCountdown); // Обновляем оставшееся время, чтобы синхронизировать
    setIsFinished(false); // Сбрасываем флаг завершения
  };

  const toggleTimer = () => {
    if (!isRunning) {
      setTimeLeft(countdown); // При старте устанавливаем текущее значение
      setIsFinished(false); // Сбрасываем флаг завершения
    }
    setIsRunning((prev) => !prev);
  };

  // Рассчитываем угол поворота (360° за всё время)
  const secondsAngle =
    timeLeft > 0 ? ((countdown - timeLeft) / countdown) * 360 : 360;

  // Рассчитываем strokeDashoffset
  const circumference = 2 * Math.PI * 124;
  const strokeDashoffset =
    countdown > 0
      ? circumference - (circumference * (countdown - timeLeft)) / countdown
      : circumference;

  return (
    <div className={styles.container}>
      <div className={styles.time}>
        <div
          className={styles.circle}
          style={
            {
              "--color": isFinished ? "#FEF6EE" : "#CEEAB0",
            } as React.CSSProperties
          }
        >
          <div
            className={styles.dots}
            style={{ transform: `rotate(${secondsAngle}deg)` }}
          />
          <svg>
            <circle cx="124" cy="124" r="124"></circle>
            <circle
              cx="124"
              cy="124"
              r="124"
              className={styles.secondsCircle}
              style={{
                strokeDashoffset,
                stroke: isFinished ? "#FEF6EE" : "#CEEAB0",
              }}
            ></circle>
          </svg>
          <div className={styles.seconds}>
            {timeLeft > 0 ? timeLeft : "0:00"}
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.regulators}>
          <button
            className={`${styles.button} ${styles.minus}`}
            onClick={() => updateCountdown(-10)}
          >
            - 10 сек
          </button>
          <button
            className={`${styles.button} ${styles.plus}`}
            onClick={() => updateCountdown(+10)}
          >
            + 10 сек
          </button>
        </div>
        <button className={styles.handlerButton} onClick={toggleTimer}>
          {isRunning ? "Пауза" : "Начать"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
