import React from "react";
import { useState } from "react";
import styles from "./Carousel.module.scss";
import ProductCard from "../ProductCard/ProductCard";

export const Carousel = ({ featuredProducts }) => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [dotColor, setDotColor] = useState(styles.dots);

  const previousProduct = () => {
    let newIndex;
    if (currentProduct === 0) {
      newIndex = featuredProducts.length - 1;
    } else {
      newIndex = currentProduct - 1;
    }
    setCurrentProduct(newIndex);
  };

  const nextProduct = () => {
    let newIndex;
    if (currentProduct === featuredProducts.length - 1) {
      newIndex = 0;
    } else {
      newIndex = currentProduct + 1;
    }

    setCurrentProduct(newIndex);
  };

  const displayProduct = (index) => {
    setCurrentProduct(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.leftArrow} onClick={previousProduct}>
        ❮
      </div>
      <div className={styles.carouselProducts}>
        <img src={featuredProducts[currentProduct].image} />
        <h1>{featuredProducts[currentProduct].category}</h1>
      </div>
      <div className={styles.rightArrow} onClick={nextProduct}>
        ❯
      </div>
      <div className={styles.dotsContainer}>
        {featuredProducts.map((prod, index) => (
          <div
            className={dotColor}
            key={index}
            onClick={() => displayProduct(index)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
