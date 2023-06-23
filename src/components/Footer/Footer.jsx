import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footertopright">
        <p className="footertopright_text">
          Получайте от нас рассылки,напишите свой email!
        </p>
        <br />
        <input
          className="footer__topright_input"
          type="text"
          placeholder="  Email*"
        />
      </div>
      <div className="footer_footer">
        <p className="footer_text">
          Copyright © 2014-2023 Официальный сайт Торрент-Игрухa |
          <a className="contact_1" href="#">
            {" "}
            Контакты
          </a>{" "}
          |{" "}
          <a className="contact_2" href="#">
            Карты Сайта
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
