import { Link } from "react-router-dom";
import classes from "./LinkButton.module.css";
import history from "../../../assets/svg/history.svg";

interface LinkButtonProps {
  name: string;
  path?: string;
  showPopup?: () => void;
}

/**
 * Компонент кнопки-линка, отображающий текстовый линк
 * или кнопку, которая вызывает функцию showPopup.
 * Если path не передан, то отображается кнопка, на которую
 * навешивается функция showPopup. Если path передан, то
 * отображается Link из react-router-dom, который
 * переходит на переданный path.
 * @param {string} name - текст, отображаемый на кнопке
 * @param {string} [path] - path, на который переходит Link
 * @param {function} [showPopup] - функция, вызываемая при клике
 * на кнопку
 */
const LinkButton = ({ name, path, showPopup }: LinkButtonProps) => {
  return (
    <li>
      {path ? (
        <Link className={classes.link} to={path}>
          {path === "/history" && <img src={history} alt="history" />}
          {name}
        </Link>
      ) : (
        <button onClick={showPopup} className={classes.link}>
          {name}
        </button>
      )}
    </li>
  );
};

export default LinkButton;
