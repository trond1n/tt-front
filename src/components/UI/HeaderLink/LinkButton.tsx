import { Link } from "react-router-dom";
import classes from "./LinkButton.module.css";

interface LinkButtonProps {
  name: string;
  path: string;
}

const LinkButton = ({ name, path }: LinkButtonProps) => {
  return (
    <li>
      <Link to={path} className={classes.link}>
        {path === "/history" ? <img src="history.svg" alt="history icon" />:''}
        {name}
      </Link>
    </li>
  );
};

export default LinkButton;
