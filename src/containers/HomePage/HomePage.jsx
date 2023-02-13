import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import Carousel from "../../components/Carousel/Carousel";

import { getFeaturedProducts } from "../../services/products";
import { FeatureProduct } from "../../services/FeatureProducts";

export const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoadingHome, setIsLoadingHome] = useState(true);

  useEffect(() => {
    getFeaturedProducts().then((products) => {
      setFeaturedProducts(products);
    });
    setIsLoadingHome(false);
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <h1>Featured Products</h1>
        <div className={styles.container}>
          {isLoadingHome ? (
            <h1>Loading products ...</h1>
          ) : (
            <Carousel featuredProducts={FeatureProduct} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
