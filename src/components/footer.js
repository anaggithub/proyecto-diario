import React from "react";
import "../styles/styles.scss";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer--socialmedia">
        <li>
          <i className="footer--socialmedia--icon fab fa-facebook-f"></i>
        </li>
        <li>
          <i className="footer--socialmedia--icon fab fa-twitter"></i>
        </li>
        <li>
          <i className="footer--socialmedia--icon fab fa-instagram"></i>
        </li>
        <li>
          <i className="footer--socialmedia--icon fab fa-youtube"></i>
        </li>
      </ul>
      <div className="footer--info">
        <figure>
          <img
            src={process.env.PUBLIC_URL + "images/logo_infobae_naranja.svg"}
            alt="logo"
            className="footer--info--logo"
          />
        </figure>
        <p className="footer--info--paragraph">
          Todos Los Derechos Reservados © 2020 Infobae
        </p>
      </div>
    </footer>
  );
}

export default Footer;
