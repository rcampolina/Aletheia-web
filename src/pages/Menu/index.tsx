import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Menu() {
  return (
    <div className="page-container">
      <div className="title">
        <h1>Menu Principal</h1>
      </div>
      <main className="menu-container">      
        <Link to="/register" className="options-container">Cadastro Auxiliado</Link>
        <Link to="/attendance" className="options-container">Cadastro de<br />Atendimentos</Link>
        <Link to="/schedule" className="options-container">Agendar Pacientes <br />para Atendimento</Link>
        <Link to="/check" className="options-container">Check-In<br />Check-Out</Link>
        <Link to="/circle" className="options-container">Cadastrar/Agendar<br />Circulo</Link>
        <Link to="/pacients" className="options-container">Tratamento por<br />Paciente</Link>
      </main>
    </div>
  );
}

export default Menu;