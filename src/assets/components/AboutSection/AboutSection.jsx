import React from 'react';
import ChessImgAbout from '../../imagens/chess3.jpg';
import { checklistItems } from "../constants";
import { CheckCircle2 } from "lucide-react";

function AboutSection({ onButtonClick }) {
  return (
    <section className="relative containerAboutSection text-center pt-10 pb-20 px-4 bg-cover bg-center" style={{ backgroundImage: '' }}>
      <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
      <div className="relative text-center z-10 max-w-[65rem] mx-auto px-4">
        {/* Título principal */}
        <h1 className="uppercase text-center text-3xl md:text-4xl font-bold mb-16 mt-[30px]">
          Lorem ipsum dolor sit amet, consectetur{' '}
          <span className="text-customBlue font-semibold">adipiscing elit. dolor sit amet</span>
        </h1>

        {/* Container para imagem e texto */}
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-[65rem] mx-auto">
          {/* Imagem */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
            <img src={""} alt="Imagem aqui" className="w-full h-auto rounded-lg shadow-md" />
          </div>

          {/* Título menor e texto */}
          <div className="w-full md:w-1/2 text-left"  data-aos="fade-up"
                data-aos-delay="900" >
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 className="text-customBlue" />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-[1.15rem]">{item.title}</h5>
                <p className="text-md text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-[5rem] justify-center">
            <button
              id="btn1"
              onClick={onButtonClick}
              className="uppercase text-white font-bold py-2 px-4 shadow-md transition"
            >
              ADQUIRIR AGORA
            </button>
          </div>
    </div>
    </div>
    </section>
  );
}

export default AboutSection;
