import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products }) {
  return (
    <main className={styles.main}>
      <div className={styles.pageHeader}>
        <h1 className={styles.heading}>Produktu katalogs</h1>
        <p className={styles.meta}>{products.length} produkti</p>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
