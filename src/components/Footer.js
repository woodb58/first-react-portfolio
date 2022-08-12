import "./FooterStyles.css";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <a href="https://github.com/woodb58" target="_blank">
          <FaGithub
            size={30}
            style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
            linkTo="github.com"
          />
        </a>
        <a href="https://twitter.com/" target="_blank">
        <FaTwitter
          size={30}
          style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
        />
        </a>
        <a href="https://www.linkedin.com/in/brian-wood-61111b248/" target="_blank">
        <FaLinkedin
          size={30}
          style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
        />
        </a>
      </div>
    </div>
  );
};

export default Footer;
