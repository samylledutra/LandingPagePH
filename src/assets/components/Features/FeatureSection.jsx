import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FeatureSection.css';
import ChessImg from '../../imagens/ChessImg.jpeg';
import ChessImgCopy from '../../imagens/ChessImgCopy.jpeg';
import Chess2 from '../../imagens/chess2.jpeg';

const carouselItems = [
  { imageUrl: ChessImgCopy },
  { imageUrl: ChessImg },
  { imageUrl: Chess2 },
];

function FeatureSection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    arrows: false,
  };

  return (
    <section className="relative text-center pt-10 pb-20 px-4 bg-cover bg-center">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
          Lorem ipsum dolor sit amet, consectetur.
        </h1>
        <p className="text-lg text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis.
        </p>
      </div>

      {/* Carousel and Text Section Side by Side */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start mb-16 max-w-[65rem] mx-auto w-full">
        {/* Carousel Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
          <Slider {...sliderSettings}>
            {carouselItems.map((item, index) => (
              <div key={index} className="px-2">
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <img src={item.imageUrl} alt={`carousel-item-${index}`} className="w-full h-64 object-cover" />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="mb-8">
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis.
            </p>
            <p className="text-lg font-semibold text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis.
            </p>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis.
            </p>
          </div>
        </div>
      </div>

      <button id="btn2" className="uppercase bg-green-500 text-black font-semibold py-3 px-6  text-lg hover:bg-green-600">
        Lorem ipsum dolor sit amet
      </button>
    </section>
  );
}

export default FeatureSection;
