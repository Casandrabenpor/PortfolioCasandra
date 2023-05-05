import { Link } from "react-router-dom";
import "../styles/topBar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';


export const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurger = () => {
    setIsMenuOpen(!isMenuOpen);

  }



  return (
    <div className="topBar">
      <div class="topBar__left">
        <div className="burger" onClick={handleBurger}>
          <FontAwesomeIcon icon={faBars} style={{ color: "#1b1443" }} />
        </div>
      </div>
      <div class="topBar__center">
      <ul className={isMenuOpen ? "menuList show" : "menuList navLinks"}>
          <li key="home">
            <Link to="/">INICIO</Link>
          </li>
          <li key="about">
            <Link to="/aboutPage">SOBRE MI</Link>
          </li>
          <li key="proyects">
            <Link to="/proyectsPage">PROYECTOS</Link>
          </li>
          <li key="contact">
            <Link to="/contactPage">CONTACTO</Link>
          </li>
        </ul>

      </div>
      </div>
      );
};

