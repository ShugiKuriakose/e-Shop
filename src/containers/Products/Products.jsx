import React, { useEffect, useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";

import { getProducts } from "../../services/products";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <div>
      <ProductGrid ProductDetails={products} />
    </div>
  );
};

export default Products;
