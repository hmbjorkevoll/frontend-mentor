import Image from "next/image";
import styles from "../styles/UserCard.module.css";
import { useState, useEffect } from "react";
import imageJeremy from "../public/image-jeremy.png";

export default function UserCard({ timePeriod, setTimePeriod }) {
  const onTimeChange = (period) => {
    setTimePeriod(period);
  };

  return (
    <div className={styles.card}>
      <div className={styles.user}>
        <img
          src={imageJeremy.src}
          width="70px"
          alt="picture of the user"
          className={styles.profilePicture}
        />
        <div className={styles.username}>
          <p className={styles.p}>Report for</p>
          <h2 className={styles.name}>Jeremy Robson</h2>
        </div>
      </div>
      <div className={styles.select}>
        {timePeriod == "daily" ? (
          <p onClick={() => onTimeChange("daily")} className={styles.active}>
            Daily
          </p>
        ) : (
          <p onClick={() => onTimeChange("daily")} className={styles.daily}>
            Daily
          </p>
        )}
        {timePeriod == "weekly" ? (
          <p onClick={() => onTimeChange("weekly")} className={styles.active}>
            Weekly
          </p>
        ) : (
          <p onClick={() => onTimeChange("weekly")} className={styles.weekly}>
            Weekly
          </p>
        )}
        {timePeriod == "monthly" ? (
          <p onClick={() => onTimeChange("monthly")} className={styles.active}>
            Monthly
          </p>
        ) : (
          <p onClick={() => onTimeChange("monthly")} className={styles.monthly}>
            Monthly
          </p>
        )}
      </div>
    </div>
  );
}
