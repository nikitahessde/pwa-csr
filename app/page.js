import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>CSR</span>
          <h1 className={styles.title}>Produktu katalogs</h1>
          <p className={styles.subtitle}>Klienta puses renderēšana · Next.js PTL</p>
        </div>
        <div className={styles.links}>
          <Link href="/10" className={styles.link}>
            <div>
              <div className={styles.linkTitle}>10 produkti</div>
              <div className={styles.linkDesc}>Mazs datu apjoms</div>
            </div>
            <span className={styles.arrow}>→</span>
          </Link>
          <Link href="/100" className={styles.link}>
            <div>
              <div className={styles.linkTitle}>100 produkti</div>
              <div className={styles.linkDesc}>Liels datu apjoms</div>
            </div>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
