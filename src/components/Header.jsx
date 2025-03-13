import { useNavigate } from "react-router-dom";
import useStore from "../context/useStore";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const { user, loginUser, logoutUser, favorites, cart, toggleTheme, theme } = useStore();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogin = () => {
    navigate("/login");
    loginUser("Foydalanuvchi");
  };

  return (
    <header className={`header ${theme}`}>
      <h2 onClick={() => navigate("/")}>🛍 MyShop</h2>
      <nav>
        <button className="favorite-btn" onClick={() => navigate("/favorites")}>💖 {favorites.length}</button>
        <button className="cart-btn" onClick={() => navigate("/cart")}>🛒 {cart.length}</button>
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        
        {user ? (
          <div className="user-dropdown">
            <button onClick={() => navigate("/add-product")}>➕ Mahsulot qo‘shish</button> 
            <span onClick={() => setDropdownOpen(!dropdownOpen)} className="user-btn">
              👤 {user.username}
            </span>
            
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={() => navigate("/profile")}>👤 Profile</button>
                <button onClick={() => {
                  logoutUser();
                  navigate("/");
                }} className="logout-btn">
                  <FaSignOutAlt /> Chiqish
                </button>
              </div>
            )}
            
          </div>
        ) : (
          <button onClick={handleLogin} className="login-btn">
            <FaUser /> Kirish
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;