import styles from "../styles/TimeCard.module.css";
import work from "../public/icon-work.svg";
import play from "../public/icon-play.svg";
import study from "../public/icon-study.svg";
import exercise from "../public/icon-exercise.svg";
import social from "../public/icon-social.svg";
import selfcare from "../public/icon-self-care.svg";
import ellipsis from "../public/icon-ellipsis.svg";
import data from "../public/data.json";
import { SwitchActivity } from "./Functions";

export default function TimeCard({ timePeriod }) {
  // The use of the 'images' and 'colors' arrays below are because the data in the data.json file do not contain this info.
  // I wanted to challenge myself by using data from different sources, but ideally
  // the data would have been merged into the data.json-file for easier and more consistent use.

  // Using the imported images in an array to be able to map through in the render of the cards
  const images = [work, play, study, exercise, social, selfcare, ellipsis];

  // Using the colors as array to be able to map through them
  const colors = [
    "hsl(15, 100%, 70%)", // work
    "hsl(195, 74%, 62%)", // play
    "hsl(348, 100%, 68%)", // study
    "hsl(145, 58%, 55%)", // exercise
    "hsl(264, 64%, 52%)", // social
    "hsl(43, 84%, 65%)", // self care
  ];

  return (
    <div className={styles.activity}>
      {data.map((activity, index) => (
        <li
          key={activity.title}
          className={styles.cardOutline}
          style={{
            backgroundImage: `url(${images[index].src})`,
            backgroundColor: `${colors[index]}`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className={styles.cardStatic}>
            <div className={styles.textAndMenu}>
              <p className={styles.activityTitle}>{activity.title}</p>
              <img
                className={styles.menuDots}
                src={images[images.length - 1].src}
              ></img>
            </div>
            <div className={styles.cardData}>
              <h2 className={styles.hrs}>
                {SwitchActivity(timePeriod, activity).current}hrs
              </h2>
              <p className={styles.lastPeriod}>
                {SwitchActivity(timePeriod, activity).text} -{" "}
                {SwitchActivity(timePeriod, activity).previous}hrs
              </p>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}
