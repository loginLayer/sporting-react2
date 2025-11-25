import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";

import "./Login.css";

export const Login = () => {
  const [userForm, setUserForm] = useState({ name: "", password: "" });
  const { user, login } = useAuthContext();

  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/admin/alta-productos" />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(userForm.name, userForm.password);

    if (success) {
      navigate("/admin/alta-productos");
    } else {
      alert("Verifique los datos ingresados.");
      setUserForm({ name: "", password: "" });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Ingreso de usuario</h2>
        <div>
          <label>Usuario </label>
          <input
            type="text"
            name="name"
            value={userForm.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contraseña </label>
          <input
            type="password"
            name="password"
            value={userForm.password}
            onChange={handleChange}
          />
        </div>
        <button className="login-button" type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

