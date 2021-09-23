import { useState, useEffect } from "react";
import styles from "../styles/TimeCard.module.css";
import work from "../public/icon-work.svg";
import play from "../public/icon-play.svg";
import study from "../public/icon-study.svg";
import exercise from "../public/icon-exercise.svg";
import social from "../public/icon-social.svg";
import selfcare from "../public/icon-self-care.svg";
import ellipsis from "../public/icon-ellipsis.svg";

export default function TimeCard(timePeriod) {
  const [timeData, setTimeData] = useState(null);

  // Fetching example data to populate the cards
  useEffect(() => {
    let url = "./data.json";
    fetch(url)
      .then((res) => res.json())
      .then((timeData) => setTimeData(timeData));
  }, []);

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
      {timeData &&
        timeData.map((timeData, index) => (
          <li
            key={timeData.title}
            className={styles.cardOutline}
            style={{
              backgroundImage: `url(${images[index].src})`,
              backgroundColor: `${colors[index]}`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={styles.cardStatic}>
              <div className={styles.textAndMenu}>
                <p className={styles.activityTitle}>{timeData.title}</p>
                <img
                  className={styles.menuDots}
                  src={images[images.length - 1].src}
                ></img>
              </div>
              <div className={styles.cardData}>
                <h2 className={styles.hrs}>
                  {timeData.timeframes.daily.current}hrs
                </h2>
                <p className={styles.lastPeriod}>
                  Last week - {timeData.timeframes.daily.previous}hrs
                </p>
              </div>
            </div>
          </li>
        ))}
    </div>
  );
}

// timeframes.daily.current
