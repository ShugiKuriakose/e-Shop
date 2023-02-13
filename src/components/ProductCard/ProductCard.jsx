import React from "react";
import { useState } from "react";
import styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";
import { updateFavs, addToCart } from "../../services/products";

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

  updateFavs(ProductDetails.idDoc, isFav);

  const addCart = () => {
    addToCart(ProductDetails);
  };

  return (
    <div>
      <NavLink to={`products/${ProductDetails.idDoc}`}>
        <div className={styles.productCard}>
          {/* <p>{ProductDetails.description}</p> */}
          <img src={ProductDetails.image} />
          {/* <h2>{ProductDetails.title}</h2> */}
        </div>
      </NavLink>
      <div className={styles.productTitle}>
        <h2>{ProductDetails.title}</h2>
        <h2>$ {ProductDetails.price.toFixed(2)}</h2>
      </div>

      <div className={styles.buttons}>
        <h1 className={stylingClass} onClick={chFavorite}>
          ♡
        </h1>
        <NavLink to={`products/${ProductDetails.idDoc}`}>
          {/* <button onClick={addCart}>Add to Cart</button> */}
          <button>Click for Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCard;
