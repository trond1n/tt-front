import classes from "./TeaList.module.css";
import TeaListItem from "./TeaListItem/TeaListItem";
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
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Таймеры</h2>
        <img src="/plus_green.svg" alt="plus" />
      </div>
      <div className={classes.list}>
        {teas.map((tea) => (
          <TeaListItem key={tea.id} tea={tea} isActive={tea.id === 1}/>
        ))}
      </div>
    </div>
  );
};

export default TeaList;
