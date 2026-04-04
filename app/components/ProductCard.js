'use client';

import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const rating = product.rating ?? 0;
  const stars = Math.round(rating);
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={styles.image}
        />
        <span className={styles.category}>{product.category}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <div className={styles.priceRow}>
            <span className={styles.price}>${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className={styles.discount}>−{Math.round(product.discountPercentage)}%</span>
            )}
          </div>
          <div className={styles.ratingRow}>
            <span className={styles.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < stars ? styles.starFilled : styles.starEmpty}>★</span>
              ))}
            </span>
            <span className={styles.ratingNum}>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
