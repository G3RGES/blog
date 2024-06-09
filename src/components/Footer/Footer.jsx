import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="para">
          <p>© 2024 G3RGES - All Rights Reserved.</p>
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/gergesnashaat95">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/gergesnashaat/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/G3RGES">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/gergesnashaat/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
