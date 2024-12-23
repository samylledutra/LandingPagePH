import React, { useState, useEffect } from "react";
import { FaChess } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoBed } from "react-icons/io5";
import { FaChessKing } from "react-icons/fa";
import "../../../index.css";

const ServiceData = [
  {
    title: "Dinheiro",
    description:
      "Dinheiro não representa apenas riqueza, mas sim poder. Ele estabelece as normas do jogo, regula a velocidade e corrompe os inocentes. Aqueles que o compreendem não trabalham por ele; fazem com que ele trabalhe para eles. Controle o fluxo monetário e você dominará o sistema, tal como um maestro que dirige uma orquestra. Esse é o primeiro fio.",
    icon: <GiTakeMyMoney className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "Sexo",
    description:
      "O sexo, além de proporcionar prazer, é a força mais intensa e manipuladora da vida. Ele domina, seduz e destrói. Na trajetória humana, ele deu origem a conflitos, pactos e traições. Entender como controlá-lo significa dominar o desejo alheio, convertendo fraquezas em armas. A segundo fio não se trata somente de conquistar, mas sim de dominar.",
    icon: <IoBed className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "Poder",
    description:
      "Poder não se solicita; é adquirido. Trata-se da energia que converte sonhos em realidade e realidade em submissão. O poder não se resume apenas à influência - é a combinação dos dois primeiros Fios, elevados à perfeição. Quem detém o poder não só forma sua vida, mas também estabelece as normas para a vida de todos à sua volta. Este é o ponto alto. Este é o Terceiro Fio.",
    icon: <FaChessKing className="text-7xl" />,
    aosDelay: "700",
  },
];


const Fios = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Atualiza o estado com base no tamanho da janela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1440); // Define o limite de tamanho desejado
    };

    handleResize(); // Verifica o tamanho inicial
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative text-center pt-10 pb-20 px-4 bg-cover bg-center">
      <div className="pb-6">
        <div className="relative z-10 max-w-[65rem] mx-auto">
          <h1 className="uppercase text-center text-3xl text-customBlue md:text-4xl font-bold mb-8">
            Os três fios
          </h1>
          <div className="grid grid-cols-1 gap-6 relative z-10">
            {ServiceData.map((data, index) => {
              const alignment = index === 1 ? "justify-end" : "justify-start"; // Define alinhamento
              const textAlignment = index === 1 ? "text-right" : "text-left"; // Define alinhamento do texto

              return (
                <div
                  key={index}
                  data-aos="fade-up" // Aplica fade-up em todas as telas
                  data-aos-delay={data.aosDelay}
                  className="bgCards hover-zoom-fade border border-customBlueBorder min-h-[180px] flex flex-col rounded-xl gap-2 bg-custom backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full mx-auto"
                >
                  {/* Ícone */}
                  <div
                    {...(!isMobile && {
                      "data-aos": `fade-${index === 1 ? "right" : "left"}`,
                      "data-aos-delay": parseInt(data.aosDelay) + 100,
                    })}
                    className={`w-full flex text-customBlue ${alignment}`}
                  >
                    {data.icon}
                  </div>

                  {/* Título */}
                  <h1
                    {...(!isMobile && {
                      "data-aos": `fade-${index === 1 ? "right" : "left"}`,
                      "data-aos-delay": parseInt(data.aosDelay) + 200,
                    })}
                    className={`w-full mt-[10px] text-[30px] uppercase ${textAlignment}`}
                  >
                    {data.title}
                  </h1>

                  {/* Descrição */}
                  <p
                    {...(!isMobile && {
                      "data-aos": `fade-${index === 1 ? "right" : "left"}`,
                      "data-aos-delay": parseInt(data.aosDelay) + 300,
                    })}
                    className={`w-full text-[20px] leading-[1.7rem] ${textAlignment}`}
                  >
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fios;
