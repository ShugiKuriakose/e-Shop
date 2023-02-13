import React, { useEffect, useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import styles from "./Products.module.scss";
import { getProducts } from "../../services/products";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts("products").then((products) => {
      setProducts(products);
    });

    setIsLoading(false);
  }, []);

  return (
    <div>
      <h1 className={styles.product}> All Products</h1>
      {isLoading ? (
        <h1>Loading products ...</h1>
      ) : (
        <ProductGrid ProductDetails={products} />
      )}
    </div>
  );
};

export default Products;
