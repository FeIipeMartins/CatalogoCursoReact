import React from 'react';
import './Header.css';
import logo from './NomelogoSemFundo.png'; // Importando o logo
import userImage from './man_146031.png'; // Importando a imagem do usuário

function Header({ userName }) {
  return (
    <div className="Cabecalho">
      <img src={logo} alt="Logo" className="Cabecalho__logo" />
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar curso..." />
      </div>
      <div className="user-info">
        <span className="UserName">Bem-vindo, {userName}</span>
        <img src={userImage} alt="User" className="user-image" />
      </div>
    </div>
  );
}

export default Header;
