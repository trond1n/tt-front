import HeaderLink from "../UI/HeaderLink/LinkButton";
import classes from "./Header.module.css";

const Header = ({ isAuth = false }: { isAuth?: boolean } = {}) => {
  return (
    <header className={classes.container}>
      <div className={classes.logo}>
        <h1>Tea Timer</h1>
      </div>
      {!isAuth ? (
        <div className={classes.links}>
          <HeaderLink name="История" path="/history" />
          <HeaderLink name="Выйти" path="/logout" />
        </div>
      ) : (
        <ul className={classes.links}>
          <HeaderLink name="Зарегистрироваться" path="/signup" />
          <HeaderLink name="Войти" path="/login" />
        </ul>
      )}
    </header>
  );
};

export default Header;
