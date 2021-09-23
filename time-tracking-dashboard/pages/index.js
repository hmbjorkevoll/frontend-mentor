import Head from "next/head";
import UserCard from "../components/UserCard";
import TimeCard from "../components/TimeCard";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [timePeriod, setTimePeriod] = useState("daily");
  return (
    <>
      <Head>
        <title>Time Tracking Dashboard | Frontend Mentor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="favicon" href="/public/favicon.png" />
      </Head>
      <div className={styles.layout}>
        <UserCard
          className={styles.userCard}
          timePeriod={timePeriod}
          setTimePeriod={setTimePeriod}
        />
        <TimeCard className={styles.timeCard} timePeriod={timePeriod} />
      </div>
    </>
  );
}
