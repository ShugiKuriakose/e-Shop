import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./containers/HomePage/HomePage";
import Products from "./containers/Products/Products";
import ProductPage from "./containers/ProductPage/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<h1>Cart</h1>} />
        <Route path="/Products/products/:idDoc" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
