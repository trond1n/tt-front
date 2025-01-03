import Timer from "../UI/Timer/Timer";
import classes from "./TimerBlock.module.css";
import edit from "../../assets/svg/edit.svg";
import help_circle from "../../assets/svg/help-circle.svg";
import temper from "../../assets/svg/temper.svg";
import time from "../../assets/svg/time.svg";
import refresh from "../../assets/svg/refresh.svg";

const TimerBlock = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Зеленый</h2>
        <ul className={classes.header__buttons}>
          <li>
            <button>
              <img src={edit} alt="edit button" />
            </button>
          </li>
          <li>
            <button>
              <img src={help_circle} alt="about button" />
            </button>
          </li>
        </ul>
      </div>
      <div className={classes.details}>
        <div className={classes.details__item}>
          <img src={temper} alt="temper-icon" />
          <p>70-80°C</p>
        </div>
        <div className={classes.separator}></div>
        <div className={classes.details__item}>
          <img src={time} alt="time-icon" />
          <p>1-3 мин</p>
        </div>
        <div className={classes.separator}></div>
        <div className={classes.details__item}>
          <img src={refresh} alt="repeat-icon" />
          <p>2-3 раза</p>
        </div>
      </div>
      <Timer />
    </div>
  );
};

export default TimerBlock;
