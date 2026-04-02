'use client';

import { useState, useEffect } from 'react';
import ProductGrid from './ProductGrid';

export default function CSRPage({ productCount }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${productCount}&select=id,title,description,price,thumbnail,rating,discountPercentage,category`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [productCount]);

  return (
    <>
      {products.length > 0 && <ProductGrid products={products} />}
    </>
  );
}
