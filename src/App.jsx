import React, { useState } from 'react';
import HeroSection from './assets/components/HeroSection/HeroSection.jsx';

import SecondSection from './assets/components/SecondSection/SecondSection.jsx';
import Fios from './assets/components/Fios/Fios.jsx';
import ImageSection from './assets/components/ImageSection/ImageSection.jsx';
import Cards from './assets/components/Cards/Cards.jsx'
{/*import FeatureSection from './assets/components/Features/FeatureSection.jsx';*/}
{/*import StatsSection from './assets/components/Status/StatsSection.jsx';*/}
import AboutSection from './assets/components/AboutSection/AboutSection.jsx';
import DepoimentosSection from './assets/components/DepoimentosSection/DepoimentosSection.jsx';
import PromotionSection from './assets/components/Promotion/PromotionSection.jsx';
import FAQ from './assets/components/FAQ/FAQ.jsx';
import Form from './assets/components/Form/Form.jsx';
import Footer from './assets/components/Footer/Footer.jsx';
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  const [isFormOpen, setIsFormOpen] = useState(false);

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });

  }, []);

 {/* const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);*/}

  return (
    <div className="exo bg-black text-white font-sans">

      <HeroSection />
      <SecondSection />
      <Fios />
      <ImageSection />
      <DepoimentosSection />
      <AboutSection />
      <Cards />
      {/*<FeatureSection />*/}
      {/*<StatsSection />*/}
      <PromotionSection />
      <FAQ />
      <Footer />

     {/* {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="formApp relative w-full max-w-md p-6 bg-[#1e1e1e] rounded-lg border border-customBlueBorder">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-gray-300"
              aria-label="Fechar"
            >
              &times;
            </button>
            <Form />
          </div>
        </div>
      )} */}

    </div>
  );
}

export default App;
