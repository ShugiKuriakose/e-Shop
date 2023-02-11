import React from "react";
import styles from "./HomePage.module.scss";
import Carousel from "../../components/Carousel/Carousel";
const FeaturedProducts = [
  {
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    description: "Description",
    imgUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    title: "Fjallraven - Foldsack No. 2 Backpack, Fits 16 Laptops",
    description: "Description1",
    imgUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    title: "Fjallraven - Foldsack No. 3 Backpack, Fits 16 Laptops",
    description: "Description2",
    imgUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
];

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <Carousel FeaturedProducts={FeaturedProducts} />
    </div>
  );
};

export default HomePage;
