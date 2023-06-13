import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { NavBar } from "../NavBar";
import { Inter } from "next/font/google";

import styles from "./MainLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const MainLayout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - Diego</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>{children}</div>
      </main>
    </>
  );
};
