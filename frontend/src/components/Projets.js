import React, { useState, useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProjetModal from './ProjetModal';
import "../style/Projet.css"; 
import projectsData from "../data/projets.json";

function Projets() {
    const [projets, setProjets] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const projetsAvecCheminsImages = projectsData.map((projet) => ({
            ...projet,
            imagePath: require(`../${projet.image}`),
        }));
        
        setProjets(projetsAvecCheminsImages);
        setIsLoading(false);
    }, []);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div className="projets-container "
                style={{
                    paddingBottom: '100px'
                }}>
                <div className="carousel-wrapper prod ">
                    {isLoading ? (
                        <div className="text-center">
                            <p className="text-lg">Chargement des projets...</p>
                        </div>
                    ) : projets.length === 0 ? (
                        <div className="text-center">
                            <p className="text-lg">Aucun projet disponible.</p>
                        </div>
                    ) : (
                        <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                            {projets.map((projet) => (
                                <div
                                    key={projet.id}
                                    onClick={() => handleProjectClick(projet)}
                                    className="cursor-pointer"
                                >
                                    <div className="text-center">
                                        <h2 className="projet-title">{projet.nom}</h2>
                                        <img
                                            src={projet.imagePath}
                                            alt={projet.nom}
                                            className="carousel-image image2"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    )}
                </div>

                {modalOpen && (
                    <ProjetModal project={selectedProject} onClose={closeModal} />
                )}
            </div>
        </div>
    );
}

export default Projets;
