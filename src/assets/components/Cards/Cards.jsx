import React from "react";
import { FaChess } from "react-icons/fa";
import "../../../index.css";

const ServiceData = [
  {
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet congue malesuada. Cras semper et mauris quis tincidunt. Donec sit amet orci ipsum. Duis imperdiet.",
    icon: <FaChess className="text-7xl text-customBlue mb-1rem" />,
    aosDelay: "300",
  },
  {
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet congue malesuada. Cras semper et mauris quis tincidunt. Donec sit amet orci ipsum. Duis imperdiet.",
    icon: <FaChess className="text-7xl text-customBlue mb-2rem" />,
    aosDelay: "500",
  },
  {
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet congue malesuada. Cras semper et mauris quis tincidunt. Donec sit amet orci ipsum. Duis imperdiet.",
    icon: <FaChess className="text-7xl text-customBlue mb-2rem" />,
    aosDelay: "700",
  },
];
function Cards({ onButtonClick }) {
  return (
    <>
      <section className="relative text-center pt-10 pb-8 px-4 bg-cover bg-center">
        <div className="pb-8 ">
          <div className="relative z-10 max-w-[65rem] mb-8 mx-auto">
          <h1 className="uppercase text-center text-3xl md:text-4xl font-bold mb-16 mt-[30px]">
          Lorem ipsum <span className="text-customBlue font-semibold">dolor sit amet</span>
          </h1>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="bgCards hover-zoom-fade border border-customBlueBorder min-h-[180px] flex flex-col justify-center text-justify items-center rounded-xl gap-2 bg-custom backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full  mx-auto"
                    >
                     {data.icon} 
                      <p className="text-sm p-[15px]">{data.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
