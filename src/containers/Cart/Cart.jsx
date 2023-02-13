import React from "react";
import { useState, useEffect } from "react";
import styles from "./Cart.module.scss";
import { NavLink } from "react-router-dom";
import {
  getCartProducts,
  deleteproduct,
  updateQty,
  decAndUpdateQty,
} from "../../services/products";
import { useNavigate, useParams } from "react-router-dom";

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getCartProducts("cart").then((products) => {
      setProducts(products);
    });

    setIsLoading(false);
  }, []);

  const removeProduct = (event, id, val) => {
    event.preventDefault;
    deleteproduct(id, val).then(() => {
      getCartProducts("cart").then((products) => {
        setProducts(products);
      });
    });
  };

  const incProduct = (event, id, val) => {
    event.preventDefault;
    const product = products.filter((prod) => prod.idDoc1 === id);
    const qty = product[0].Qty;
    const count = product[0].rating.count;
    if (qty < count) {
      updateQty(id).then(() => {
        getCartProducts("cart").then((products) => {
          setProducts(products);
        });
      });
    }
  };

  const decProduct = (event, id, val) => {
    event.preventDefault;
    const product = products.filter((prod) => prod.idDoc1 === id);
    const qty = product[0].Qty;
    if (qty > 1) {
      decAndUpdateQty(id).then(() => {
        getCartProducts("cart").then((products) => {
          setProducts(products);
        });
      });
    }
  };

  const totalCart = products.reduce((acc, prod) => {
    acc = acc + prod.price * prod.Qty;
    return acc;
  }, 0);

  return (
    <div>
      <h1 className={styles.cartHeader}>Shopping Cart</h1>
      <div className={styles.cart}>
        {!(products.length > 0) && <h1>Your cart is empty</h1>}
        {isLoading ? (
          <h1>Loading products ...</h1>
        ) : (
          products.map((prod, index) => {
            return (
              <div>
                <div className={styles.cartItems}>
                  <img src={prod.image} />
                  <h2>
                    {prod.title}
                    (Size: {prod.size})
                  </h2>
                  <h1>$ {prod.price.toFixed(2)}</h1>
                  <div className={styles.qtyButton}>
                    <button
                      onClick={(event) =>
                        incProduct(event, prod.idDoc1, "cart")
                      }
                    >
                      +
                    </button>
                    <h1>Qty:{prod.Qty}</h1>
                    <button
                      onClick={(event) =>
                        decProduct(event, prod.idDoc1, "cart")
                      }
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={(event) =>
                      removeProduct(event, prod.idDoc1, "cart")
                    }
                  >
                    Remove
                  </button>
                </div>
                <hr className={styles.hrline}></hr>
              </div>
            );
          })
        )}
        <div>
          <h1>Total: $ {totalCart.toFixed(2)} </h1>
        </div>
        <div>
          <NavLink to={"/Products"}>
            <button className={styles.cartbutton}>Continue Shopping</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
