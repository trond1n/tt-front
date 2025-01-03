import classes from "./TeaList.module.css";
import TeaListItem from "./TeaListItem/TeaListItem";
import { useParams } from "react-router-dom";
import plus from "../../assets/svg/plus_green.svg";
const teas = [
  {
    id: 1,
    name: "Зелёный",
    time: 3,
    minTemp: 70,
    maxTemp: 80,
  },
  {
    id: 2,
    name: "Чёрный",
    time: 3,
    minTemp: 70,
    maxTemp: 80,
  },
  {
    id: 3,
    name: "Улун",
    time: 3,
    minTemp: 70,
    maxTemp: 80,
  },
  {
    id: 4,
    name: "Пуэр",
    time: 3,
    minTemp: 70,
    maxTemp: 80,
  },
  {
    id: 5,
    name: "Белый",
    time: 3,
    minTemp: 70,
    maxTemp: 80,
  },
];

const TeaList = () => {
  const { id } = useParams<{ id: string }>(); // Получаем параметр id из URL
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Таймеры</h2>
        <img src={plus} alt="plus" />
      </div>
      <div className={classes.list}>
        {teas.map((tea) => (
          <TeaListItem
            key={tea.id}
            tea={tea}
            isActive={id ? tea.id === +id : false}
          />
        ))}
      </div>
    </div>
  );
};

export default TeaList;
