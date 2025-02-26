import React from "react";
import "../style/Home.css";

import cvFile from "../assets/CV de Bourguignon Wilfried.pdf";

function Home() {



    return (
        <div 
            className="home-container" 
            style={{
                background: 'linear-gradient(180deg, rgba(87,86,86,1) 3%, rgba(87,86,86,1) 5%, rgba(6,3,75,1) 100%)',
                paddingBottom: '100px', 
            }}
        >  
            <h1 className="text-center text-white presentation-title animate-fadeIn">Présentation globale</h1>
            <div className="container animate-fadeIn">
                <div className="text">
                    <h1 className="text-center text-white">Wilfried BOURGUIGNON</h1>
                    <h2 className="text-center text-green-400">Développeur Web</h2>
                    <p>
                        Depuis novembre 2022, j’ai suivi une formation intensive en développement web à la Web@cadémie by Epitech.
                        Cette expérience m’a permis de maîtriser les compétences essentielles du métier.
                    </p>
                    <div className="logos justify-items-center">   
                        <a href="https://www.linkedin.com/in/wilfried-bourguignon-dev/" target='_blank' rel="noreferrer">
                            <img src={require('../assets/linkedin.png')} alt="LinkedIn" className="social-icon"/>
                        </a>
                        <a href="https://github.com/Wilbour74" target='_blank' rel="noreferrer">
                            <img src={require('../assets/github.png')} alt="GitHub" className="social-icon"/>
                        </a>
                        <a href={cvFile} download="cv_wilfried.pdf">
                            <img src={require('../assets/cv.png')} alt="CV" className="social-icon"/>
                        </a>
                    </div>
                </div>
                <img src={require('../assets/unnamed.jpg')} alt="Accueil" className="image"/>
            </div>
        </div>
    );
}

export default Home;
