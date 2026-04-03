'use client';

import { useState, useEffect } from 'react';
import ProductGrid from './ProductGrid';
import stateStyles from './loading.module.css';

export default function CSRPage({ productCount }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');

    fetch(
      `https://dummyjson.com/products?limit=${productCount}&select=id,title,description,price,thumbnail,rating,discountPercentage,category`,
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products ?? []);
      })
      .catch((fetchError) => {
        if (fetchError.name !== 'AbortError') {
          setError('Neizdevas ieladet produktus. Megini velreiz.');
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, [productCount]);

  return (
    <>
      {loading && (
        <div className={stateStyles.loadingWrap}>
          <p className={stateStyles.loadingText}>Ielade produktus...</p>
        </div>
      )}
      {!loading && error && <div className={stateStyles.errorWrap}>{error}</div>}
      {!loading && !error && products.length > 0 && <ProductGrid products={products} />}
    </>
  );
}
