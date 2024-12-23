import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserSecret } from "react-icons/fa";

const testimonials = [
  {
    icon: <FaUserSecret />,
    name: "Richard Santas",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    rating: 5,
  },
  {
    icon: <FaUserSecret />,
    name: "Richard Santes",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    rating: 5,
  },
  {
    icon: <FaUserSecret />,
    name: "Richard Santis",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    rating: 5,
  },
  {
    icon: <FaUserSecret />,
    name: "Richard Santos",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    rating: 5,
  },
];

function DepoimentosSection({ onButtonClick }) {
  const settings = {
    dots: false, // Não exibe os indicadores (bolinhas)
    infinite: true, // Faz o carrossel ser infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 2, // Mostra 2 slides por vez
    slidesToScroll: 2, // Muda 2 slides por vez
    autoplay: true, // Ativa a troca automática de slides
    autoplaySpeed: 3000, // Define a velocidade para troca automática (em ms)
    arrows: false, // Oculta os botões "Previous" e "Next"
    responsive: [
      {
        breakpoint: 1024, // Para telas menores que 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Mostra e move 1 slide por vez
        },
      },
    ],
  };

  return (
    <section className="relative containerDepoimentos text-center pt-10 pb-20 px-4 bg-cover bg-center">
      <div className="relative z-10 max-w-[65rem] mx-auto px-4">
        <h2 className="uppercase text-center text-3xl font-bold mb-6">
          Lorem ipsum dolor sit amet, consectetur <br />
          <span className="text-customBlue">dolor sit amet.</span>
        </h2>
        <p className="depoimentosJustify text-center text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et fermentum orci. In venenatis
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bgCards border border-customBlueBorder rounded-lg p-6 shadow-md text-2xl text-justify py-8 px-3 w-full mx-auto">
                <div className="flex items-center mb-4">
                  <div className="text-4xl text-customBlue mr-3 ml-4">
                    {testimonial.icon}
                  </div>
                 {/*} <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl mr-1">★</span>
                    ))}
                  </div>*/}
                </div>
                <p className="depoimentosJustify text-sm p-[15px]">{testimonial.text}</p>
                <p className="testimonialName mb-2 text-[1.15rem] text-right">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </Slider>
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
    </section>
  );
}

export default DepoimentosSection;
