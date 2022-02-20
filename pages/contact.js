import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const Contact = () => {
  return (
    <main className={styles.main2}>
        <h1 className={styles.title}>
          Contact
        </h1>
        <p className={styles.description}>
          <Link href="/posts/first-post">
            <a>First Post</a>
          </Link>
        </p>
        <p className={styles.description}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
      </main>
  );
};

export default Contact;
