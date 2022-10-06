import React from "react";

//Styles
import "./Footer.css";

//Assets
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <h5>Visų Šventųjų g. 5, Vilnius</h5>
      <div className="contactContainer">
        <h5>(8-613) 73810</h5>
        <div className="iconContainer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/viet_ines/"
          >
            <i>
              <BsInstagram />
            </i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/Vietin%C4%97s-246575566003940"
          >
            <i>
              <BsFacebook />
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
