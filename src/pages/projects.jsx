import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/projects.scss";
import NftMarket from "../components/img/nft-marketplace-pic.png";
import ScientificEcommerce from "../components/img/scientifi-ecommerce.png";
import EthAdv from "../components/img/eth.png";
import DAO from "../components/img/DAO.jpg";
import PersonalWeb from "../components/img/personalWeb.png";

const projects = [
  {
    id: 1,
    title: "NFT Marketplace",
    description: "A decentralized platform to buy and transfer NFTs securely with blockchain technology.",
    imageUrl: NftMarket,
    link: "https://github.com/SLuca-24/nft-marketplace",
  },
  {
    id: 2,
    title: "Ethereum Smart Contract",
    description: "An ERC721 smart contract utilizing Chainlink VRF for verifiable random NFT minting and secure ownership.",
    imageUrl: EthAdv,
    link: "https://github.com/SLuca-24/eth-advanced",
  },
  {
    id: 3,
    title: "Decentralized E-commerce",
    description: "A blockchain-powered e-commerce for secure online magazine sales with transparent transactions and ownership verification.",
    imageUrl: ScientificEcommerce,
    link: "https://github.com/SLuca-24/scientificE-commerce",
  },
  {
    id: 4,
    title: "Personal Website",
    description: "A minimalist personal website built with HTML and CSS for showcasing projects and professional details.",
    imageUrl: PersonalWeb,
    link: "https://github.com/SLuca-24/SLuca-24.github.io",
  },
  {
    id: 5,
    title: "Decentralized Organization (DAO)",
    description: "A DAO governed by Ethereum smart contracts, enabling transparent decision-making and automated governance.",
    imageUrl: DAO,
    link: "https://github.com/SLuca-24/my-dao",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.link} className="project-link">
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
