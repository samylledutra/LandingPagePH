import React, { useState } from 'react';
import FAQ from '../../imagens/FAQ.png';
import "../../../index.css";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nunc ac faucibus finibus. Nam.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nunc ac faucibus finibus. Nam.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nunc ac faucibus finibus. Nam.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ??',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nunc ac faucibus finibus. Nam.'
    },
    { 
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nunc ac faucibus finibus. Nam.'
    }
  ];

  return (
    <section
      className="relative text-center pt-10 pb-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${FAQ})` }}
    >
       <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative text-justify z-10 max-w-[65rem] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">Perguntas Frequentes</h2>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item text-white text-[20px] border faq-border mb-[20px]">
              <div
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="question-text pr-4">{faq.question}</span>
                {activeIndex === index ? (
                  <IoIosArrowDropup className="caret-icon mt-[5px] mr-[10px] text-customBlue" />
                ) : (
                  <IoIosArrowDropdown className="caret-icon mt-[5px] mr-[10px] text-customBlue" />
                )}
              </div>
              <div
                className="faq-answer"
                style={{ display: activeIndex === index ? 'block' : 'none' }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
