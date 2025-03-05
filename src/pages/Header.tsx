import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../components/styles/header.scss";
import Logo from "../components/logo.tsx";

const Header: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="header-div">
      <div className="logo-name">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className="header-icons">
        {/* ICONA MAIL - usa un <a> con onClick per mostrare il popup */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            setShowPopup(true);
          }}
          className="icon"
        >
          <FaEnvelope />
        </a>

        {/* ICONA GITHUB */}
        <a href="https://github.com/SLuca-24" target="_blank" rel="noopener noreferrer" className="icon">
          <FaGithub />
        </a>

        {/* ICONA LINKEDIN */}
        <a href="https://www.linkedin.com/in/luca-sannia-376871309/" target="_blank" rel="noopener noreferrer" className="icon">
          <FaLinkedin />
        </a>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Email: lucasannia24@gmail.com</p>
            <button onClick={() => setShowPopup(false)}>Chiudi</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
