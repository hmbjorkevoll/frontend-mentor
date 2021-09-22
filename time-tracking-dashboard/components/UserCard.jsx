import Image from "next/image";
import styles from "../styles/UserCard.module.css";
import { useState, useEffect } from "react";

export default function UserCard() {
  const [isDaily, setIsDaily] = useState(true);
  const [isWeekly, setIsWeekly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false);

  const toggleDaily = () => {
    setIsDaily(true);
    setIsWeekly(false);
    setIsMonthly(false);
  };
  const toggleWeekly = () => {
    setIsDaily(false);
    setIsWeekly(true);
    setIsMonthly(false);
  };
  const toggleMonthly = () => {
    setIsDaily(false);
    setIsWeekly(false);
    setIsMonthly(true);
  };

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
        {isDaily ? (
          <p onClick={toggleDaily} className={styles.active}>
            Daily
          </p>
        ) : (
          <p onClick={toggleDaily} className={styles.daily}>
            Daily
          </p>
        )}
        {isWeekly ? (
          <p onClick={toggleWeekly} className={styles.active}>
            Weekly
          </p>
        ) : (
          <p onClick={toggleWeekly} className={styles.weekly}>
            Weekly
          </p>
        )}
        {isMonthly ? (
          <p onClick={toggleMonthly} className={styles.active}>
            Monthly
          </p>
        ) : (
          <p onClick={toggleMonthly} className={styles.monthly}>
            Monthly
          </p>
        )}
      </div>
    </div>
  );
}
