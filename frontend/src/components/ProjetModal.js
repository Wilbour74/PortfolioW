import React from 'react';


function ProjetModal({ onClose, project}) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative bg-white p-12 rounded-lg max-w-2xl w-full shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
                >
                    &times;
                </button>

                <h2 className="text-4xl font-semibold mb-6 text-center">{project.nom}</h2>
                <img
                    src={require(`../${project.image}`)}
                    alt={project.nom}
                    className="w-full h-auto rounded-md mb-6"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-700 text-xl mb-6">{project.description}</p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Technologies</h3>
                <div className="flex flex-wrap ml-10 gap-2 mb-6">
                    {project.technos.split(',').map((techno, index) => (
                        <span key={index} className="bg-red-500 text-white px-3 py-1 rounded-md">
                            {techno.trim()}
                        </span>
                    ))}
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Durée : <span>{project.duree_semaine} {project.duree_semaine > 1 ? 'semaines' : 'semaine'}</span>
                </h3>
                <a href={project.github} target='_blank' rel="noopener noreferrer">
                    <img src={require('../assets/github.png')} alt="GitHub" className="social-icon"/>
                </a>
            </div>
        </div>
    );
}

export default ProjetModal;
