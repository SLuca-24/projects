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
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            setShowPopup(true);
          }}
          className="icon icon-email"
        >
          <FaEnvelope />
        </a>
        <a href="https://github.com/SLuca-24" target="_blank" rel="noopener noreferrer" className="icon icon-github"> {/* Aggiunta classe per GitHub */}
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/luca-sannia-376871309/" target="_blank" rel="noopener noreferrer" className="icon icon-linkedin"> {/* Aggiunta classe per LinkedIn */}
          <FaLinkedin />
        </a>
      </div>
      
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Email: lucasannia24@gmail.com</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
