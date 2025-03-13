import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../context/useStore";
import "../styles/global.css";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const { loginUser } = useStore();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // 🔹 Parolni ko‘rsatish uchun state

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(username, password);
      navigate("/profile"); // Profillga yo‘naltiramiz
    } catch (err) {
      setError("Login yoki parol noto‘g‘ri!");
    }
  };

  return (
    <div className="login-page">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <h2>Kirish</h2>
        <input
          type="text"
          placeholder="Foydalanuvchi nomi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* 🔹 Parol maydoni + Ko‘zcha tugmasi 👁 */}
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"} // 🔹 Ko‘rsatish yoki yashirish
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash />
              : <FaRegEye />
            }
          </button>
        </div>

        <button className="login-btn" type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default Login;
