import "./FooterStyles.css";
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaQuora } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="social">
          <a href="https://www.linkedin.com/in/vinayak-kumar-48378753/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </a>
          <a href="https://github.com/Vinayakkk23/Vinayakkk23/blob/main/README.md" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </a>
          <a href="mailto:kumar.vinayak1988@gmail.com">
            <FaEnvelope size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </a>
          <a href="https://www.quora.com/profile/Vinayak-Kumar-300" target="_blank" rel="noopener noreferrer">
            <FaQuora size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </a>
          <a href="https://www.instagram.com/_vinayak_kumar_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
