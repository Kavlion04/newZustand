import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../context/useStore";
import "../styles/AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useStore();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) {
      alert("Barcha maydonlarni to‘ldiring!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
    };

    addProduct(newProduct); 
    navigate("/"); 
  };

  return (
    <div className="add-product">
      <h2>Yangi mahsulot qo‘shish</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Mahsulot nomi"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            style.color = "black";
          }}
        />
        <input
          type="number"
          placeholder="Narx"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="add-btn" type="submit">Qo‘shish</button>
      </form>
    </div>
  );
};

export default AddProduct;
