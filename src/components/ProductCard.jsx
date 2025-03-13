import { useState } from "react";
import useStore from "../context/useStore";
import "../styles/productCard.css"

const ProductCard = ({ product, isLoggedIn }) => {
  const { deleteProduct, editProduct, toggleFavorite, favorites,  } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(product?.name || ""); // Agar product undefined bo‘lsa, bo‘sh string
  const [newPrice, setNewPrice] = useState(product?.price || ""); // Agar product undefined bo‘lsa, bo‘sh qiymat

  if (!product) {
    return <p>Xatolik: mahsulot yuklanmadi</p>; // Xatolikni ko‘rsatish
  }

  const handleEdit = () => {
    editProduct(product.id, newName, newPrice);
    setIsEditing(false);
  };

  return (
    <div className="product-card">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <button onClick={handleEdit}>✅ Saqlash</button>
        </div>
      ) : (
        <div>
          <h3 style={{ color: "green" }}>{product.title}</h3>
          
          <p>{product.price} so‘m</p>
          <button className="like-btn" onClick={() => toggleFavorite(product)}>{favorites.some((item) => item.id === product.id) ? "❤️ Unlike" : "❤️ like"}</button>
          <button className="buy-btn" onClick={() => getFavoritesCount(product)}>🗑️ buy</button>
          
        </div>
      )}

      {isLoggedIn && (
        <div className="buttons">
          <button className="edit-btn" onClick={() => setIsEditing(true)}>✏️ Edit</button>
          <button className="delete-btn" onClick={() => deleteProduct(product.id)}>🗑 Delete</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
