import React, { useState } from "react";
import "../styles/styles.scss";

function Footer() {
  return (
    <footer className="footer">
      <ul id="socialmedia" className="footer--socialmedia">
        <li>
          <i className="fab fa-facebook-f"></i>
        </li>
        <li>
          <i className="fab fa-twitter"></i>
        </li>
        <li>
          <i className="fab fa-instagram"></i>
        </li>
        <li>
          <i className="fab fa-youtube"></i>
        </li>
      </ul>
      <div className="footer--info">
        <figure>
          <img
            src="https://www.infobae.com/resources/assets/img/logo_infobae_naranja.svg"
            alt="logo"
            className="logo"
          />
        </figure>
        <p>Todos Los Derechos Reservados © 2020 Infobae</p>
      </div>
    </footer>
  );
}

export default Footer;
