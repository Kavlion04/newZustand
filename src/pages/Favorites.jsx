import React from "react";
import useStore from "../context/useStore";
import "../styles/favorites.css";

const Favorites = () => {
  const { favorites, toggleFavorite } = useStore(); // Like qilingan mahsulotlarni olish

  return (
    <div className="favorites-page">
      <h2>❤️ Like qilingan mahsulotlar</h2>

      {favorites.length > 0 ? (
        <div className="favorites-container">
          {favorites.map((item) => (
            <div key={item.id} className="favorite-item">
              <h3>{item.name}</h3>
              <p>{item.price.toLocaleString()} so‘m</p>
              <button className="unlike-btn" onClick={() => toggleFavorite(item)}>
                ❤️ o‘chirish
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-favorites">Hozircha hech narsa yo‘q.</p>
      )}
    </div>
  );
};

export default Favorites;
