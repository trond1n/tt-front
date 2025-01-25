// import { useParams } from "react-router-dom";
import About from "../About/About";
import Infusions from "../Infusions/Infusions";
import TeaList from "../TeaList/TeaList";
import TimerBlock from "../TimerBlock/TimerBlock";
import classes from "./Tea.module.css";

const Tea = () => {
  // const { id } = useParams<{ id: string }>(); // Получаем параметр id из URL
  return <div className={classes.container}>
<TeaList/>
<TimerBlock/>
{/* <About/> */}
<Infusions/>
  </div>;
};

export default Tea;
