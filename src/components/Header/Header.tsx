import { useEffect, useState } from "react";
import Login from "../Login/Login";
import Registration from "../Registranion/Registration";
import HeaderLink from "../UI/LinkButton/LinkButton";
import classes from "./Header.module.css";

/**
 * Компонент заголовка, который отображает логотип и ссылки для входа/регистрации или выхода.
 * @param {Object} props - Свойства компонента.
 * @param {boolean} [props.isAuth=false] - Флаг, указывающий, авторизован ли пользователь.
 * @returns {JSX.Element} JSX-элемент заголовка.
 */
const Header = ({ isAuth = false }: { isAuth?: boolean } = {}) => {
  const popupTypes = {
    LOGIN: "login",
    REGISTRATION: "registration",
    NONE: null,
  } as const;
  const [popupType, setPopupType] = useState<
    (typeof popupTypes)[keyof typeof popupTypes]
  >(popupTypes.NONE);

  /**
   * Изменяет тип всплывающего окна.
   * @param {string} type - Новый тип всплывающего окна.
   */
  const changePopupType = (
    type: (typeof popupTypes)[keyof typeof popupTypes]
  ) => {
    if (type === popupTypes.NONE) {
      setPopupType(popupTypes.NONE);
    } else {
      setPopupType(type);
    }
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && popupType !== popupTypes.NONE) {
        setPopupType(popupTypes.NONE);
      }
    };
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [popupType, popupTypes.NONE]);
  return (
    <>
      <header className={classes.container}>
        <div className={classes.logo}>
          <h1>Tea Timer</h1>
        </div>
        {isAuth ? (
          <div className={classes.links}>
            <HeaderLink name="История" path="/history" />
            <HeaderLink name="Выйти" path="/logout" />
          </div>
        ) : (
          <ul className={classes.links}>
            <HeaderLink
              name="Зарегистрироваться"
              showPopup={() => changePopupType(popupTypes.REGISTRATION)}
            />
            <HeaderLink
              name="Войти"
              showPopup={() => changePopupType(popupTypes.LOGIN)}
            />
          </ul>
        )}
      </header>

      {(popupType === popupTypes.LOGIN ||
        popupType === popupTypes.REGISTRATION) &&
        (popupType === popupTypes.LOGIN ? (
          <Login onClose={() => changePopupType(popupTypes.NONE)} />
        ) : (
          <Registration onClose={() => changePopupType(popupTypes.NONE)} />
        ))}
    </>
  );
};

export default Header;
