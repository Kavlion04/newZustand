import { useNavigate } from "react-router-dom";
import useStore from "../context/useStore";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import "../styles/header.css";

const Header = () => {
  const { user, loginUser, logoutUser, favorites, cart, toggleTheme, theme } = useStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
    loginUser("Foydalanuvchi");
  };

  return (
    <header className={`header  ${theme}`}>
      <h2 onClick={() => navigate("/")}>🛍 MyShop</h2>
      <nav>
        <button className="favorite-btn" onClick={() => navigate("/favorites")}>yoqanlar {favorites.length}</button>
        <button className="cart-btn" onClick={() => navigate("/cart")}>sevimlilar {cart.length}</button>
        <button  onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        
        {user ? (
          <>
            {/* Faqat login qilingan foydalanuvchilar uchun "Mahsulot qo‘shish" tugmasi */}
            <button onClick={() => navigate("/add-product")}>➕ Mahsulot qo‘shish</button> 
            
            <span onClick={() => navigate("/profile")}>👤 {user.username}</span>
            <button onClick={() => {
              logoutUser();
              navigate("/");
            }}>
              <FaSignOutAlt /> Chiqish 
            </button>
          </>
        ) : (
          <button onClick={handleLogin}>
            <FaUser /> Kirish
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
