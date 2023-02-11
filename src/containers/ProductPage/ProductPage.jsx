import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { getSingleProduct } from "../../services/products";
import ProductCard from "../../components/ProductCard/ProductCard";

export const ProductPage = () => {
  const { idDoc } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getSingleProduct(idDoc).then((product) => setProduct(product));
  }, []);

  return (
    <div>
      {product && (
        <div>
          <div className={styles.container}>
            <div className={styles.productImage}>
              <img src={product.image} />
            </div>
            <div className={styles.productDetails}>
              <h2>{product.title}</h2>
              <h1>${product.price}</h1>
              <p>{product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductPage;
