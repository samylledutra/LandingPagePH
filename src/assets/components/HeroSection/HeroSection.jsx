import React from 'react';
import Banner from '../../imagens/banner-oficial.png';
import BannerMobile from '../../imagens/banner_mobile.png';
import "../../../index.css";

function HeroSection({ onButtonClick }) {
  return (
    <section className="firstSection relative pt-8 pb-20 px-[32px] bg-cover bg-right" style={{ backgroundImage: `url(${Banner})` }}>
       <div className="blurDiv absolute left-0 top-0 h-full w-51p bg-gradient-to-r from-black to-transparent backdrop-blur-custom pointer-events-none"></div>
      <div className="relative z-10 max-w-[65rem] mx-auto px-4">
        <h1 className="uppercase pt-[35px] pr-[480px] text-[26px] font-bold leading-tight text-customBlue mb-6 ">
        Você percebe que há algo além do que os olhos conseguem enxergar? 
        </h1>
        <p className="mt-4 pr-[480px] text-[18px] text-justify">
        Você sabia que o mundo à sua volta funciona sob normas secretas, controladas por forças invisíveis? A realidade é que existe um jogo em andamento, e poucos sabem como vencê-lo. Enquanto você se esforça para enfrentar as ondas, outros <span className="text-customBlue font-semibold">estão no topo, controlando. </span> O que os distingue dos demais? Eles têm conhecimento sobre os Fios.
        </p>
        <p className="mt-4 pr-[480px] text-[18px] text-justify">
        <span className="text-customBlue font-semibold"> Dinheiro, Sexo e Poder. </span> Três elementos que orientam todas as suas escolhas, seus insucessos e seus êxitos.
        </p>
        <div className="btn1 flex mt-8">
          <button id="btn1" onClick={onButtonClick} className=" uppercase text-white font-bold py-2 px-4 shadow-md transition">
            DESCUBRA AGORA 
          </button>
        </div>
      </div>

      
    </section>
  );
}

export default HeroSection;
