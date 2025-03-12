import { NavBar } from '../NavBar/NavBar';
import React, { useState } from "react";
import { ItemTitles } from '../../components/ItemTitles/ItemTitles';
import { ItemNavBar } from '../../components/itemNavBar/ItemNavBar';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 bg-teal-600 px-6 py-5 shadow-xl w-full">
      <div className="flex justify-between items-center">
   
        <ItemTitles content="Bienvenido a mi Portafolio" styles="text-2xl sm:text-3xl text-white font-bold" />

      
        <button 
          className=" md:hidden text-white text-3xl ml-[10rem]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú">
          ☰
        </button>

        
        <NavBar>
          <ul className={`
            md:flex md:space-x-8 
            absolute md:static top-16 left-0 w-full md:w-auto bg-teal-500 md:bg-transparent 
            flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6
            p-6 md:p-0 shadow-lg md:shadow-none transition-all duration-300 ease-in-out
             sm:flex sm:space-x-4 
            absolute sm: top-18 left-0 w-full sm:w-auto bg-teal-500 sm:bg-transparent 
            flex flex-col sm:flex-row items-center  transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"}
          `}>
            <ItemNavBar route="/" content="Home" styles="text-white text-lg" />
            <ItemNavBar route="/HardSkills" content="Habilidades Técnicas" styles="text-white text-lg" />
            <ItemNavBar route="/EnglishLevel" content="Nivel de Inglés" styles="text-white text-lg" />
            <ItemNavBar route="/ProfessionalExperience" content="Experiencia Profesional" styles="text-white text-lg" />
            <ItemNavBar route="/SocialSkillss" content="Habilidades Sociales" styles="text-white text-lg" />
            <ItemNavBar route="/Studies" content="Estudios" styles="text-white text-lg" />
          </ul>
        </NavBar>
      </div>
    </header>
  );
};
