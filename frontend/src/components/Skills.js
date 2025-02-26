import React, { useEffect, useState } from 'react';
import "../style/Skills.css";
import langagesData from '../data/skills.json';

function Skills() {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        setLanguages(langagesData);
    }, []);

    const groupedLanguages = languages.reduce((acc, lang) => {
        if (!acc[lang.type]) {
            acc[lang.type] = [];
        }
        acc[lang.type].push(lang);
        return acc;
    }, {});

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen p-4"
            style={{
                background: 'linear-gradient(180deg, rgba(87,86,86,1) 3%, rgba(87,86,86,1) 5%, rgba(3,87,21,1) 100%)',
                paddingBottom: '100px', 
            }}
        >
            <div className="text-center text-white voici">
                <p className="mt-4 text-[35px]">
                    <strong>Voici les différentes technologies apprises</strong>
                </p>
            </div>

            {Object.keys(groupedLanguages).map(type => (
                <div key={type} className="mt-8 w-full max-w-6xl">
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {groupedLanguages[type].map(lang => (
                            <div 
                                key={lang.nom} 
                                className="bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-lg transform transition duration-500 hover:scale-105 opacity-0 animate-fadeIn"
                            >
                                <img
                                    src={`/assets/${lang.image}`}
                                    alt={lang.nom}
                                    className="w-16 h-16 object-contain mb-4"
                                />
                                <p className="text-white text-lg font-medium">{lang.nom}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;
