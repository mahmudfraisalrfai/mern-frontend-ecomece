import React from "react";
import './Footer.css'
import logo from "../../assets/image/تنزيل.jfif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons"; // استيراد أيقونات الشبكات الاجتماعية

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="footer logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <div className="footer-icon-container">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="footer-icon-container">
          <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <div className="footer-icon-container">
          <a href="https://telegram.org" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
}
