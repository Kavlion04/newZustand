import React from "react";
import useStore from "../context/useStore";
import "../styles/cart.css"; // Stillarni import qilamiz

const Cart = () => {
  const { cart } = useStore(); // Savatchadagi mahsulotlarni olish

  return (
    <div className="cart-page">
      <h2>🛒 Savatcha</h2>

      {cart.length > 0 ? (
        <div className="cart-container">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p className="cart-price">{item.price.toLocaleString()} so‘m</p>
              <p className="cart-quantity">Soni: {item.quantity}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-cart">Hozircha hech narsa yo‘q.</p>
      )}
    </div>
  );
};

export default Cart;
