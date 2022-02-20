import Link from "next/link";
import styles from "../../styles/Home.module.css";
const FirstPost = () => {
  return (
    <main className={styles.main3}>
      <h1 className={styles.title}>First Post</h1>
      <p className={styles.description}>
        <Link href="/contact">
          <a>Contact</a>
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
export default FirstPost;
