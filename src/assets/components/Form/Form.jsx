import React from 'react';
import "../../../index.css";


function Form () {
  return (
    <section>
    <div className="flex items-center justify-center bg-[rgb(85,0,0)] text-white ">
      <div className="formDiv2 w-full px-6 py-8  bg-[#1e1e1e]">
        <h1 className="text-center text-justify text-lg font-semibold mb-6 leading-relaxed"> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet libero nisi. Suspendisse potenti.:
        </h1>

        <form className="space-y-4">
          {/* Name input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Digite seu nome:"
              className="w-full px-4 py-3 bg-black text-white rounded-full outline-none placeholder-gray-400 focus:ring-2 focus:blue"
            />
          </div>

          {/* Email input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Digite seu e-mail:"
              className="w-full px-4 py-3 bg-black text-white rounded-full outline-none placeholder-gray-400 focus:ring-2 focus:blue"
            />
          </div>

          {/* WhatsApp input */}
          <div className="relative flex items-center">
            <input
              type="tel"
              placeholder="Digite seu whatsapp:"
              className="w-full px-4 py-3 bg-black text-white rounded-full outline-none placeholder-gray-400 focus:ring-2 focus:blue"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="buttonForm2 w-full py-3 mt-4 font-semibold text-white bg-white rounded-full glow-button transition duration-300 backgroundImage"
          >
            Lorem ipsum dolor sit amet
          </button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default Form;
