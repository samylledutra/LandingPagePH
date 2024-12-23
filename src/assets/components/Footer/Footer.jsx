import React from "react";
import  "../../../index.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
      <section className="footerSection relative text-center pt-10 pb-20 px-4 bg-cover bg-center">
        <div className="">
          <div className="relative text-justify z-10 max-w-[65rem] mx-auto px-4">
          <div className="flex footer items-center justify-center gap-4 mb-4">
              
              <span className="text-[20px] leading-[1.25rem] text-white">
              @copyright 2024 Todos os direitos reservados.
            </span>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Footer;
