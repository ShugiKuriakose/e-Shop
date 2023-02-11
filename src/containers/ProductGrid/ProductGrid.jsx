import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

export const ProductGrid = ({ ProductDetails }) => {
  return (
    <div className={styles.productgrid}>
      {ProductDetails.map((prod, index) => (
        <ProductCard key={index} ProductDetails={prod} prodIndex={index} />
      ))}

      {/* <ProductCard ProductDetails={ProductDetails} />
      <ProductCard ProductDetails={ProductDetails} /> */}
    </div>
  );
};
export default ProductGrid;
