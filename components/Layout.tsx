import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.nav}>
        <Link href="/">
          <a>
            <h1 className={styles.brand}>Accounts Management</h1>
          </a>
        </Link>
      </header>
      <main className={styles.main}>
        <nav className={styles.menu}>
          <Link href="/accounts">
            <a className={styles.link}>Accounts Search</a>
          </Link>
        </nav>
        <div className={styles.content}>{children}</div>
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
