import "./FooterStyles.css";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <Link to="github.com" target="_blank">
          <FaGithub
            size={30}
            style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
            linkTo="github.com"
          />
        </Link>
        <Link to="linked.com" target="_blank">
        <FaTwitter
          size={30}
          style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
        />
        </Link>
        <Link to="linkedin.com" target="_blank">
        <FaLinkedin
          size={30}
          style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
        />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
