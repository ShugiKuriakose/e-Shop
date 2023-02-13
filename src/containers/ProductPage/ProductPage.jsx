import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { getSingleProduct, addToCart } from "../../services/products";
import ProductCard from "../../components/ProductCard/ProductCard";

export const ProductPage = () => {
  const { idDoc } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [warningStyle, setWarningStyle] = useState(styles.sizeWarning);

  useEffect(() => {
    getSingleProduct(idDoc).then((product) => setProduct(product));
  }, []);

  const addCart = () => {
    if (product.sizes && size) {
      setWarningStyle(styles.sizeWarning);
      addToCart({ ...product, size });
    } else if (!product.sizes) {
      addToCart({ ...product });
    } else {
      setWarningStyle(styles.sizeWarningDisplay);
    }
  };

  const selectSize = (event, val) => {
    event.preventDefault();
    setSize(val.size);
    setIsActive(true);
  };

  return (
    <div>
      {product && (
        <div>
          <h1 className={styles.productTitle}> {product.title}</h1>
          <div className={styles.container}>
            <div className={styles.productImage}>
              <img src={product.image} />
            </div>
            <div className={styles.productDetails}>
              <h2>{product.title}</h2>
              <h1>${product.price.toFixed(2)}</h1>
              <p>{product.description}</p>
              <div>
                <h2>
                  {product.sizes &&
                    product.sizes.map((val) => (
                      <button
                        className={styles.sizeButton}
                        onClick={(e) => selectSize(e, val)}
                      >
                        {val.size}
                      </button>
                    ))}
                </h2>
              </div>
              <h1 className={warningStyle}>Please Select Size</h1>
              <button onClick={addCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductPage;
