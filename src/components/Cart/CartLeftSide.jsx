import React, { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContextProvider";
import { Grid, Button } from "@mui/material";

const CartLeftSide = () => {
  const { cart, getCart, changeProductCount, deleteCartProduct } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  const handleCountChange = (count, id) => {
    changeProductCount(count, id);
  };

  return (
    <Grid container spacing={0}>
      {cart?.products.map((row) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={row.item.id}>
          <div className="cart__left_item">
            <div className="cart__left_img">
              <img
                src={row.item.pic1}
                alt={row.item.title}
                style={{ maxHeight: 330, maxWidth: 161 }}
              />
            </div>
            <div className="cart__left_desc">
              <div className="cart__left_title" style={{ marginTop: "2%" }}>
                <span>{row.item.title}</span>
              </div>
              <div className="cart__left_attributes">
                <p style={{ marginTop: "2%" }}>
                  <b>КАТЕГОРИЯ:</b> {row.item.category}
                </p>
              </div>
              <div className="cart__left_bottom">
                <div className="cart__left_price" style={{ marginTop: "2%" }}>
                  <p>ЦЕНА:</p>
                  <p style={{ marginTop: "2%" }}>{row.subPrice}</p>
                </div>
              </div>
              <div className="cart__left_delete">
                <button
                  style={{ marginTop: "2%" }}
                  onClick={() => deleteCartProduct(row.item.id)}
                >
                  УДАЛИТЬ
                </button>
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default CartLeftSide;
