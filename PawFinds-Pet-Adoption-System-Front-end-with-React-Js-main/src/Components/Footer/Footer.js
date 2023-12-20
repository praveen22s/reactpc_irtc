import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
        <div>
        <Link className="logo-container" to="\">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>You can reach me at <a class="mail-links" href="mailto:kashifkzmi5@gmail.com">kashifkzmi5@gmail.com</a></p>
        <p><a class="contact-links" href="https://www.linkedin.com/in/kashiekzmi/" target="_blank"><i
                    class="fa fa-linkedin-square"></i> Linkedin</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="contact-links"
                href="https://github.com/KaShiekzmi" target="_blank"><i class="fa fa-github"></i> GitHub</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="contact-links" href="https://www.instagram.com/kaxhie_x/"
                target="_blank"><i class="fa fa-instagram"></i> Instagram</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
                class="contact-links" href="https://api.whatsapp.com/qr/GXRHM7PEPNOKA1?autoload=1&app_absent=0"
                target="_blank"><i class="fa fa-whatsapp"></i> WhatsApp</a></p>
        <p>&copy; 2023 Kashif Abbas Kazmi</p>
      </div>
    </footer>
  );
};

export default Footer;
