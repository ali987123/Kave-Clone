import { useState } from "react";

const OurProcess = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="flex flex-col mt-10 md:mt-20 md:flex-row items-center bg-blue-950 text-white py-12 px-4 sm:px-8 md:px-16">
     
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2d7941c9-7dab-4a63-bb6d-a60ef27b5f00/w=750,q=75"
          alt="Interactive dashboard"
          className="max-w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>


      <div className="w-full md:w-1/2 ml-1">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Process</h2>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base">
          See how we build innovative software solutions and high-quality
          products.
        </p>

       
        <div className="space-y-4 ml-5">
          <div
            className="bg-white text-blue-900 p-4 rounded-lg shadow-md "
            onClick={() => toggleAccordion(1)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <span className="font-medium">1. Discovery Stage</span>
              <span className="font-bold">{activeIndex === 1 ? "-" : "+"}</span>
            </div>
            {activeIndex === 1 && (
              <p className="mt-4 text-sm text-gray-700">
                In this stage, we gather requirements, understand client needs,
                and brainstorm solutions to ensure project success.
              </p>
            )}
          </div>

          <div
            className="bg-white text-blue-900 p-4 rounded-lg shadow-md"
            onClick={() => toggleAccordion(2)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <span className="font-medium">2. Development Stage</span>
              <span className="font-bold">{activeIndex === 2 ? "-" : "+"}</span>
            </div>
            {activeIndex === 2 && (
              <p className="mt-4 text-sm text-gray-700">
                Our team develops and implements the solution using the latest
                technologies to deliver a high-quality product.
              </p>
            )}
          </div>

          <div
            className="bg-white text-blue-900 p-4 rounded-lg shadow-md"
            onClick={() => toggleAccordion(3)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <span className="font-medium">
                3. Continuous Support & Development
              </span>
              <span className="font-bold">{activeIndex === 3 ? "-" : "+"}</span>
            </div>
            {activeIndex === 3 && (
              <p className="mt-4 text-sm text-gray-700">
                We provide ongoing support and continuous development to ensure
                your product evolves and thrives in the market.
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 flex justify-center md:justify-start">
          <button className="px-6 py-3 ml-5 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition">
            Let’s Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
