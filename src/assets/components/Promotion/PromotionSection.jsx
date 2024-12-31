import React from 'react';
import { GiChessKing } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import "../../../index.css";

function PromotionSection() {
    return (
        <section className="relative text-center pt-2 pb-20 px-4 bg-cover bg-center">
            <div className="bg-black text-gray-200 flex justify-center items-center p-6">
                <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start mb-16 max-w-[65rem] mx-auto w-full lg:flex-nowrap">
                    
                    {/* Left Section */}
                    <div className="flex-grow lg:flex-grow-0 lg:basis-1/3 flex flex-col justify-center p-4 mt-[60px]">
                        <div className="flex justify-end items-center mb-[50px]">
                            <div className="bg-customBlueBorder w-12 h-12 flex items-center justify-center rounded-md">
                                <span className="text-white font-bold text-lg"> <GiChessKing className="text-[25px] leading-[1.75rem] text-white" /></span>
                            </div>
                        </div>
                        <p className="text-gray-300 text-justify text-lg leading-relaxed mb-[50px]">
                            Lorem ipsum dolor sit amet <strong>amet, consectetur adipiscing elit</strong>, nullam tempor sem hendrerit eros vestibulum rhoncus.
                        </p>
                        <div className="flex items-center mt-4 justify-end">
                            <span className="text-white font-bold text-base">Lorem ipsum dolor</span>
                            <img src="https://via.placeholder.com/32" alt="Author" className="w-8 h-8 rounded-full ml-2" />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="rightSectionPromotion rounded-lg p-6 flex-grow lg:flex-grow-0 basis-1/2 mt-[30px] border border-customBlue">
                       {/* <p className="firstP text-purple-500 text-xs font-semibold uppercase tracking-wider mb-2">Lorem ipsum dolor</p> */}
                        <h2 className="firstH2Promotion text-white text-[29px] font-bold mb-2">Garanta seu Lorem! Os lorens são limitados</h2>
                        <p className="promotion text-gray-500 line-through">De R$000,00 por apenas:</p>
                        <p className="promotionValue text-white text-[40px] leading-[6rem] font-bold">R$ <span className="text-[80px]"> 000</span>,00 </p>
                        <p className="promotionP text-gray-400 text-[20px] leading-[0.875rem] mb-[1.5rem]">ou em 12x R$00,00 no cartão.</p>
                        <button className="buttonPromotion w-[90%] bg-pink-500 py-3 rounded-md mb-6 font-bold text-lg text-white hover:bg-pink-600 transition">
                            QUERO ADQUIRIR
                        </button>
                        <hr class="m-auto w-[95%] mb-[30px]"></hr>
                        <p className="text-gray-400 text-[15px] leading-[20px] text-center mb-[50px]">
                            Compra 100% segura! Receba seu ebook imediatamente após a confirmação do pagamento.
                        </p>
                       {/* <div className="flex justify-center gap-2 mb-6">
                            <img src="https://via.placeholder.com/24" alt="Payment Method" className="w-6 h-6" />
                            <img src="https://via.placeholder.com/24" alt="Payment Method" className="w-6 h-6" />
                            <img src="https://via.placeholder.com/24" alt="Payment Method" className="w-6 h-6" />
                            <img src="https://via.placeholder.com/24" alt="Payment Method" className="w-6 h-6" />
                        </div> */}
                    </div>

                    {/* Feature List */}
                    <div className="featureList flex-grow lg:flex-grow-0 lg:basis-1/3 p-4 justify-start">
                        {[
                            "Lorem ipsum dolor",
                            "Lorem ipsum dolor",
                            "Lorem ipsum dolor",
                            "Lorem ipsum dolor",
                            "Lorem ipsum dolor",
                            "Lorem ipsum dolor",
                        ].map((item, index) => (
                            <div key={index} className="flex items-center mb-[15px]">
                                <FaCheckCircle className="text-customBlue mr-[10px]"/>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PromotionSection;
