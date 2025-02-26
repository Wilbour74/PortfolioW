import React, { useState } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Projets from './components/Projets';
import Skills from './components/Skills';

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "projects":
        return <Projets />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
      <div className="App min-h-screen bg-[#575656]">
        <nav className="bg-[#575656] p-4 flex justify-between items-center text-white z-50">
          <div 
            className={`font-bold text-[40px] cursor-pointer transition duration-300 transform hover:scale-110 ${activeTab === "home" ? "text-gray-300" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            WILFRIED
          </div>

          <div className="md:hidden" onClick={toggleMenu}>
            <button className="text-2xl focus:outline-none transition transform hover:scale-125">
              {isOpen ? '✖️' : '☰'}
            </button>
          </div>

          <ul className={`nav-links flex-col md:flex md:flex-row gap-6 absolute md:static top-16 left-0 right-0 bg-[#575656] p-4 md:p-0 ${isOpen ? 'flex' : 'hidden'}`}>
            <li 
              className={`nav-item cursor-pointer text-[30px] transition duration-300 transform hover:scale-110 hover:text-gray-300 ${activeTab === "projects" ? "text-gray-300" : ""}`}
              onClick={() => { setActiveTab("projects"); setIsOpen(false); }}
            >
              PROJETS
            </li>
            <li 
              className={`nav-item cursor-pointer text-[30px] transition duration-300 transform hover:scale-110 hover:text-gray-300 ${activeTab === "skills" ? "text-gray-300" : ""}`}
              onClick={() => { setActiveTab("skills"); setIsOpen(false); }}
            >
              COMPÉTENCES
            </li>
            <li 
              className={`nav-item cursor-pointer text-[30px] transition duration-300 transform hover:scale-110 hover:text-gray-300 ${activeTab === "contact" ? "text-gray-300" : ""}`}
              onClick={() => { setActiveTab("contact"); setIsOpen(false); }}
            >
              CONTACT
            </li>
          </ul>
        </nav>

        <div className="tab-content">
          {renderContent()}
        </div>
        <footer className="bg-black text-white p-4 text-center">
  <p>&copy; 2025 Wilfried. Tous droits réservés.</p>
  <p>Développé avec React</p>
</footer>


      </div>
  );
}

export default App;
