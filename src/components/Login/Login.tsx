import styles from "./Login.module.css";
import close from "../../assets/svg/close.svg";

interface LoginProps {
  onClose: () => void;
}

/**
 * Компонент авторизации
 * @param {{ onClose: () => void; }} props - props-ы компонента
 * @param {() => void} props.onClose - функция закрытия модального окна
 *
 * @returns {React.ReactElement} - JSX-элемент
 */

const Login: React.FC<LoginProps> = ({ onClose }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButtonContainer}>
          <button className={styles.closeButton} onClick={onClose}>
            <img src={close} alt="closeButton" />
          </button>
        </div>
        <h2 className={styles.title}>Вход</h2>
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
        </div>
        <a className={styles.forgotButton} href="/forgot">
          Забыли пароль?
        </a>
        <button className={styles.loginButton}>Вход</button>
      </div>
    </div>
  );
};

export default Login;
