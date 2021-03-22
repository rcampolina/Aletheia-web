import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.png";
import PrimaryButton from "../../Components/PrimaryButton";

// import * as Icon from 'react-feather';
import "./styles.css";

function Login() {
  return (
    <div className="page-login">
      <div className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Aletheia" />
        </div>
        <div className="input-block">
          <input type="text" id="username" name="username" placeholder="Usuário" value="aletheia" />
          <input type="password" id="password" name="password" placeholder="Senha" value="aletheia" />
        </div>
        <Link to="/menu"><PrimaryButton title="Login" /></Link>
      </div>
    </div>
  );
}

export default Login;
