import React from "react";
import { useState } from "react";
import styles from "./Carousel.module.scss";

export const Carousel = ({ FeaturedProducts }) => {
  const [currentProduct, setCurrentProduct] = useState(0);

  const previousProduct = () => {
    let newIndex;
    if (currentProduct === 0) {
      newIndex = FeaturedProducts.length - 1;
    } else {
      newIndex = currentProduct - 1;
    }
    setCurrentProduct(newIndex);
  };

  const nextProduct = () => {
    let newIndex;
    if (currentProduct === FeaturedProducts.length - 1) {
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
        <h1>{FeaturedProducts[currentProduct].title}</h1>
        <img src={FeaturedProducts[currentProduct].imgUrl} />
      </div>
      <div className={styles.rightArrow} onClick={nextProduct}>
        ❯
      </div>
      <div className={styles.dotsContainer}>
        {FeaturedProducts.map((prod, index) => (
          <div
            className={styles.dots}
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
