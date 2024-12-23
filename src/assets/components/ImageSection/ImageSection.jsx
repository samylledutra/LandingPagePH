import React, { useEffect, useState } from "react";
import ImgSection from '../../imagens/ImgSection.png';
import ImgSectionBlue from '../../imagens/ImgSectionBlue.png';
import "../../../index.css";

const ImageSection = () => {
  const [currentImage, setCurrentImage] = useState(ImgSection);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === ImgSection ? ImgSectionBlue : ImgSection
      );
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <section
      className="relative text-center pt-[10rem] pb-[10rem]  bg-cover bg-center"
      style={{
        backgroundImage: `url(${currentImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out", // Suaviza a transição
      }}
    >
      <div className="pb-6">
        <div className="relative z-10 max-w-[65rem] mx-auto">
          <div>
            <div className="grid grid-cols-1 gap-6 relative z-10">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
