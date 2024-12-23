import React, { useEffect } from 'react';
import AOS from 'aos'; // Importe o AOS
import 'aos/dist/aos.css'; // Importe o CSS do AOS

import PODER from '../../imagens/C1.png';
import DINHEIRO from '../../imagens/C2.png';
import SEXO from '../../imagens/C3.png';

const cardsImg = [
  { image: DINHEIRO, title: 'DINHEIRO',},
  { image: SEXO, title: 'SEXO',},
  { image: PODER, title: 'PODER',},
];


function SecondSection({ onButtonClick }) {
  useEffect(() => {
    // Inicialize o AOS
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
       // A animação ocorre apenas uma vez
    });
  }, []);

  return (
    <section className="containerSecond relative text-center pt-10 pb-20 px-4 bg-cover bg-center">
      <div className="relative text-center z-10 max-w-[65rem] mx-auto px-4">
        <div className="mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Compreender como utilizá-las é a diferença entre ser o <span className="text-customBlue font-semibold">protagonista</span> ou o <span className="text-customBlue font-semibold">coadjuvante.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            O que vou compartilhar contigo aqui não se encontra em livros, escolas ou nas palavras de gurus. É uma sabedoria que poucos têm a coragem de compartilhar, pois ela modifica quem a possui.
            </p>
          </div>

          {/* Image and Description Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cardsImg.map((item, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden"
                data-aos="zoom-in" // Aplica a animação de zoom-in aos cards
              >
                <img src={item.image} alt={`Card ${index + 1}`} className="w-full object-cover" />
                <div className="absolute inset-0 flex items-end justify-center">
                  <h2 className="text-white text-[25px] font-bold text-center px-2 pb-[0.5rem]">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
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

export default SecondSection;