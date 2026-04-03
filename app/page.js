import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.wrap}>
      <section className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Produktu katalogs</h1>
          <p className={styles.subtitle}>Klienta puses renderesana</p>
        </div>

        <div className={styles.links}>
          <Link href="/10" className={styles.link}>
            <div>
              <div className={styles.linkTitle}>10 produkti</div>
              <div className={styles.linkDesc}>Mazs datu apjoms</div>
            </div>
            <span className={styles.arrow}>→</span>
          </Link>
          <Link href="/150" className={styles.link}>
            <div>
              <div className={styles.linkTitle}>150 produktu</div>
              <div className={styles.linkDesc}>Liels datu apjoms</div>
            </div>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
