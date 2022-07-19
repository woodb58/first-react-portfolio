import "./FooterStyles.css";
import { FaGithub, FaTwitter, FaLinkedin  } from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
            <div className="footer-container"> 
              <FaGithub size={30} style={{ color: "white", marginRight: "1rem", marginLeft: "1rem"}} />
              <FaTwitter size={30} style={{ color: "white", marginRight: "1rem", marginLeft: "1rem"}} />
              <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem", marginLeft: "1rem"}} />
            </div>
    </div>
  )
}

export default Footer