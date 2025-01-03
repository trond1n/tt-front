import { useState, useEffect } from "react";
import styles from "./Timer.module.css";

const Timer: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(30); // Общее время в секундах
  const [timeLeft, setTimeLeft] = useState<number>(0); // Оставшееся время
  const [isRunning, setIsRunning] = useState<boolean>(false); // Статус таймера

  useEffect(() => {
    let timer = null;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0));
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, timeLeft]);

  const updateCountdown = (amount: number) => {
    const newCountdown = Math.max(countdown + amount, 0);
    setCountdown(newCountdown);
    setTimeLeft(newCountdown); // Обновляем оставшееся время, чтобы синхронизировать
  };

  const toggleTimer = () => {
    if (!isRunning) {
      setTimeLeft(countdown); // При старте устанавливаем текущее значение
    }
    setIsRunning((prev) => !prev);
  };

  // Рассчитываем угол поворота (360° за всё время)
  const secondsAngle =
    timeLeft > 0 ? ((countdown - timeLeft) / countdown) * 360 : 0;

  return (
    <div className={styles.container}>
      <div className={styles.time}>
        <div
          className={styles.circle}
          style={{ "--color": "#04fc43" } as React.CSSProperties}
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
                strokeDashoffset: countdown
                  ? 810 - (810 * (countdown - timeLeft)) / countdown
                  : 810,
              }}
            ></circle>
          </svg>
          <div className={styles.seconds}>
            {timeLeft > 0 ? timeLeft : countdown}
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
            onClick={() => updateCountdown(-10)}
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
