import TeaList from "../../components/TeaList/TeaList";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <TeaList />

      <div
        className={classes.choose}
      >
        <h2>Выберите чай
          <br />чтобы начать</h2>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Home;
