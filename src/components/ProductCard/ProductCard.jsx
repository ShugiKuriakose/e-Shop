import React from "react";
import { useState } from "react";
import styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";

export const ProductCard = ({ ProductDetails }) => {
  const [isFav, setIsFav] = useState(false);

  const [stylingClass, setStylingClass] = useState(styles.heart__white);

  const chFavorite = () => {
    if (isFav) {
      setIsFav(false);

      setStylingClass(styles.heart__white);
    } else {
      setIsFav(true);

      setStylingClass(styles.heart__red);
    }
  };

  return (
    <div>
      <NavLink to={`products/${ProductDetails.idDoc}`}>
        <div className={styles.productCard}>
          <h2>{ProductDetails.title}</h2>
          {/* <p>{ProductDetails.description}</p> */}
          <img src={ProductDetails.image} />
          <button className={stylingClass} onClick={chFavorite}>
            ♡
          </button>
        </div>
      </NavLink>

      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
