import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../context/useStore";

const Login = () => {
  const { loginUser } = useStore();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
    <div>
      <h2>Kirish</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Foydalanuvchi nomi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default Login;
