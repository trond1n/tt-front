"use client";
import classes from "./About.module.css";
import tea from "../../assets/images/tea.png";
interface AboutProps {
  onClose: () => void;
}
const About = ({ onClose }: AboutProps) => {
  return (
    <div className={classes.container}>
      <div onClick={onClose}>
        <i className={`${classes.icon} fa-solid fa-chevron-left`}></i>
      </div>
      <p className={classes.text}>
        Зелёные чаи требуют бережного обращения с водой. Слишком горячая вода
        может сделать чай горьким.
      </p>
      <img
        src={tea}
        alt="tea"
        width={362}
        height={255}
        className={classes.image}
      />
      <p className={classes.text}>
        Зелёные чаи требуют бережного обращения с водой. Слишком горячая вода
        может сделать чай горьким. Обычно первые проливы делают короткими (около
        30 секунд), затем можно увеличивать время настаивания.
      </p>
      <p className={classes.text}>
        Зелёные чаи требуют бережного обращения с водой. Слишком горячая вода
        может сделать чай горьким. Обычно первые проливы делают короткими (около
        30 секунд), затем можно увеличивать время настаивания.
      </p>
    </div>
  );
};

export default About;
