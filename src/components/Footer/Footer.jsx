import React from "react";
import "./Footer.css";

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="para">
          <p>© 2024 G3RGES - All Rights Reserved.</p>
        </div>
        <div className="icon">
          <a
            href="https://www.instagram.com/gergesnashaat/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-4xl" />
          </a>
          <a
            href="https://www.facebook.com/gergesnashaat95"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/gergesnashaat/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-4xl" />
          </a>
          <a href="https://github.com/G3RGES" target="_blank" rel="noreferrer">
            <FaGithub className="text-4xl" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
