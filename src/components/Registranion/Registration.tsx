import styles from "./Registration.module.css";
import close from "../../assets/svg/close.svg";

const Registration = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButtonContainer}>
          <button className={styles.closeButton}>
            {" "}
            <img src={close} alt="closeButton" />
          </button>
        </div>
        <h2 className={styles.title}>Регистрация</h2>
        <p className={styles.description}>Зарегистрируйтесь и сохраняйте историю своих заварок, отмечайте лучшие и пишите заметки.</p>
        <div className={styles.form}>
          <input
            type="email"
            placeholder="Введите почту"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Пароль"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Повторите пароль"
            className={styles.input}
          />
  
        </div>
        <a className={styles.forgotButton} href="/login">
            Уже есть аккаунт?
          </a>
          <button className={styles.loginButton}>Вход</button>
      </div>
    </div>
  );
};

export default Registration;
