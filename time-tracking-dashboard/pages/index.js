import Head from "next/head";
import UserCard from "../components/UserCard";
import TimeCard from "../components/TimeCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Time Tracking Dashboard | Frontend Mentor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="favicon" href="/public/favicon.png" />
      </Head>
      <div className={styles.layout}>
        <UserCard className={styles.userCard} />
        <TimeCard className={styles.timeCard} />
      </div>
    </>
  );
}
