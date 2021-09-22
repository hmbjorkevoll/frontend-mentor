import Image from "next/image";
import styles from "../styles/UserCard.module.css";
import { useState, useEffect } from "react";

export default function UserCard() {
  const [isDaily, setIsDaily] = useState(true);
  const [isWeekly, setIsWeekly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false);

  const toggleDaily = () => {};
  const toggleWeekly = () => {};
  const toggleMonthly = () => {};

  // const toggleActive = (e) => {
  //   setActive(e.target.textContent);
  //   function activeText() {
  //     if (Active == "Daily") {
  //       document.getElementsById("daily").style.color = "hsl(236, 100%, 87%)";
  //       document.getElementsById("weekly").style.color = "hsl(235, 45%, 61%)";
  //       document.getElementsById("monthly").style.color = "hsl(235, 45%, 61%)";
  //     }
  //     if (Active == "Weekly") {
  //       document.body.daily.style.color = "hsl(235, 45%, 61%)";
  //       document.weekly.style.color = "hsl(236, 100%, 87%)";
  //       document.monthly.style.color = "hsl(235, 45%, 61%)";
  //     }
  //     if (Active == "Monthly") {
  //       document.daily.style.color = "hsl(235, 45%, 61%)";
  //       document.weekly.style.color = "hsl(235, 45%, 61%)";
  //       document.monthly.style.color = "hsl(236, 100%, 87%)";
  //     }
  //   }
  //   console.log(e.target.textContent);
  //   console.log(Active);
  //   activeText();
  // };

  return (
    <div className={styles.card}>
      <div className={styles.user}>
        <img
          src="https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          width="75px"
          alt="picture of the user"
          className={styles.profilePicture}
        />
        <div className={styles.username}>
          <p className={styles.p}>Report for</p>
          <h2 className={styles.name}>Jeremy Robson</h2>
        </div>
      </div>
      <div className={styles.select}>
        <p onClick={toggleDaily} className={styles.daily} id="daily">
          Daily
        </p>
        <p onClick={toggleWeekly} className={styles.weekly} id="weekly">
          Weekly
        </p>
        <p onClick={toggleMonthly} className={styles.monthly} id="monthly">
          Monthly
        </p>
      </div>
    </div>
  );
}
