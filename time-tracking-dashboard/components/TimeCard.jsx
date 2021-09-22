import { useState, useEffect } from "react";
import styles from "../styles/TimeCard.module.css";

export default function TimeCard(props) {
  const [timeData, setTimeData] = useState(null);

  useEffect(() => {
    let url = "./data.json";
    fetch(url)
      .then((res) => res.json())
      .then((timeData) => setTimeData(timeData));
    console.log(timeData);
  }, []);

  const colors = {
    work: {
      color: "hsl(15, 100%, 70%)",
      image: "../public/icon-work.svg",
    },
    play: {
      color: "hsl(195, 74%, 62%)",
      image: "../public/icon-play.svg",
    },
    study: {
      color: "hsl(348, 100%, 68%)",
      image: "../public/icon-study.svg",
    },
    exercise: {
      color: "hsl(145, 58%, 55%)",
      image: "../public/icon-exercise.svg",
    },
    social: {
      color: "hsl(264, 64%, 52%)",
      image: "../public/icon-social.svg",
    },
    selfcare: {
      color: "hsl(43, 84%, 65%)",
      image: "../public/icon-self-care.svg",
    },
  };

  return (
    <div className={styles.activity}>
      {timeData &&
        timeData.map((timeData) => (
          <li key={timeData.title} className={styles.cardOutline}>
            <div className={styles.cardStatic}>
              <div className={styles.textAndMenu}>
                <p className={styles.activityTitle}>{timeData.title}</p>
                <section className={styles.menuDots}>...</section>
              </div>
              <div className={styles.cardData}>
                <h2 className={styles.hrs}>
                  {timeData.timeframes.daily.current}hrs
                </h2>
                <p className={styles.lastWeek}>
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
