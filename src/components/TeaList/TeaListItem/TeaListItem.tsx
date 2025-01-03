import { Link } from "react-router-dom";
import classes from "./TeaListItem.module.css";
import blank from "../../../assets/images/blank.png";
interface TeaListItemProps {
  isActive?: boolean;
  tea: {
    id: number;
    name: string;
    time: number;
    minTemp: number;
    maxTemp: number;
  };
}

const TeaListItem = ({ isActive = false, tea }: TeaListItemProps) => {
  const { id, name, time, minTemp, maxTemp } = tea;
  return (
    <Link to={`/tea/${id}`}>
    <div className={`${classes.container} ${isActive ? classes.active : ""}`}>
      <img
        src={blank}
        alt="tea pic"
        className={classes.image}
        width={64}
        height={64}
      />
      <div className={classes.info}>
        <h3>{name}</h3>
        <div className={classes.details}>
          <p>{time} мин</p>
          <p>{`${minTemp}-${maxTemp}°C`}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default TeaListItem;
