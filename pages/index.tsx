import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <h2 className={styles.title}>Welcome to Accounts Management</h2>
    </Layout>
  );
};

export default Home;
