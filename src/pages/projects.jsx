import React from "react";
import "../components/styles/projects.scss";
import NftMarket from "../components/img/nft-marketplace-pic.png";
import ScientificEcommerce from "../components/img/scientifi-ecommerce.png";
import EthAdv from "../components/img/eth.png";
import DAO from "../components/img/DAO.jpg";
import PersonalWeb from "../components/img/personalWeb.png";
import EthEco from "../components/img/eth-ecosystem.png"
import dApp from "../components/img/dApps.jpg"
import donation from "../components/img/solidity.jpg"

const projects = [
  {
    id: 1,
    title: "NFT Marketplace",
    description: "A decentralized platform to buy and transfer NFTs securely with blockchain technology.",
    imageUrl: NftMarket,
    link: "https://github.com/SLuca-24/nft-marketplace",
    pdf: "https://www.dropbox.com/scl/fi/f00ipwtzld3h93iwm4y5j/Nft-Marketplace-project.pdf?rlkey=zbohnfz8onpvv4okrztt2h8u6&st=8essvb4l&dl=1",
  },
  {
    id: 2,
    title: "Ethereum Smart Contract",
    description: "An ERC721 smart contract utilizing Chainlink VRF for verifiable random NFT minting and secure ownership.",
    imageUrl: EthAdv,
    link: "https://github.com/SLuca-24/eth-advanced",
    pdf: "https://www.dropbox.com/scl/fi/n3y3yqbxurf27k0nsodi5/Ethereum-advanced-project.pdf?rlkey=jh5secl8aunoru789dy0kqmld&st=apj3tunc&dl=1",
  },
  {
    id: 3,
    title: "Decentralized Organization (DAO)",
    description: "A DAO governed by Ethereum smart contracts, enabling transparent decision-making and automated governance.",
    imageUrl: DAO,
    link: "https://github.com/SLuca-24/my-dao",
    pdf: "https://www.dropbox.com/scl/fi/s3enbn5q2bckl2fq7vzg9/Solidity-advanced-project-DAO.pdf?rlkey=y68y225dc289bfqi0bdjy7jec&st=w78e8ppn&dl=1",
  },
  {
    id: 4,
    title: "Personal Website",
    description: "A minimalist personal website built with HTML and CSS for showcasing projects and professional details.",
    imageUrl: PersonalWeb,
    link: "https://github.com/SLuca-24/SLuca-24.github.io",
    pdf: "",
  },
  {
    id: 5,
    title: "Ethereum Protocol Analysis",
    description: "An in-depth analysis of key Ethereum protocols: Aave, Uniswap, dYdX, and CryptoKitties.",
    imageUrl: EthEco,
    link: "https://github.com/SLuca-24/my-dao",
    pdf: "https://www.dropbox.com/scl/fi/evvyujqdb4poims472k6a/Ethereum-protocol-s-analysis.pdf?rlkey=7kle64fmlfl2hl489lks12q2l&st=0e4lwk20&dl=1",
  },
  {
    id: 6,
    title: "Decentralized E-commerce",
    description: "A blockchain-powered e-commerce for secure online magazine sales with transparent transactions and ownership verification.",
    imageUrl: ScientificEcommerce,
    link: "https://github.com/SLuca-24/scientificE-commerce",
    pdf: "https://www.dropbox.com/scl/fi/f7pf8j9ahdbe3yontgn7q/Web3-project-decentralized-E-commerce.pdf?rlkey=berqosq0gs1swyxxgf2zz3dbr&st=72f08v4n&dl=1",
  },

  {
    id: 7,
    title: "Decentralized Information dApp",
    description: "A decentralized app for posting and verifying news with blockchain-based trust and transparency",
    imageUrl: dApp,
    link: "https://github.com/SLuca-24/Decentralized-Information-App",
    pdf: "https://www.dropbox.com/scl/fi/w6wvyqx8rir7acmkzdo4j/Solidity-project-Information-dApp.pdf?rlkey=oz5ft2dj4acd175zzzkbnxgv7&st=l5xfmols&dl=1",
  },
  {
    id: 8,
    title: "Smart Contract for Online Donations",
    description: "A Solidity smart contract enabling secure and transparent online donations via blockchain.",
    imageUrl: donation,
    link: "https://www.dropbox.com/scl/fi/feuw1hq8elw49xjfyxr8g/Code-smart-contract.txt?rlkey=20cnhqwzqsl8mdwgld6kp2wdx&st=8xrd7avo&dl=1",
    pdf: "https://www.dropbox.com/scl/fi/jrq1tl1oy62ht62iv97df/Solidity-Smart-Contract-for-online-donations.pdf?rlkey=zxh2ih19tvtntwkaj80r7fqs2&st=f2r7o830&dl=1",
  },
];

const Projects = () => {
  const handleProjectClick = (event, link, pdf) => {
    event.preventDefault(); // Previene la navigazione predefinita del link
    window.open(link, "_blank"); // Apri il link in una nuova scheda
    const a = document.createElement("a");
    a.href = pdf;
    a.download = pdf.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                className="project-link"
                onClick={(event) => handleProjectClick(event, project.link, project.pdf)}
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;