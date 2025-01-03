import classes from "./TeaListItem.module.css";
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
  const { name, time, minTemp, maxTemp } = tea;
  return (
    <div className={`${classes.container} ${isActive ? classes.active : ""}`}>
      <img
        src="blank.png"
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
  );
};

export default TeaListItem;
