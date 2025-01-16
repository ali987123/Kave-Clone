// import { useState } from "react";

// const categories = [
//   { name: "AI Development", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/948cc148-849b-43fd-69e7-ea0933692700/w=3840,q=75" },
//   { name: "Mobile App Development", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/f8d9523e-68df-4c20-5d57-d20b36997800/w=3840,q=75" },
//   { name: "Website Development", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2a7fd0d1-608d-48a2-5bd4-89ef4c452e00/w=3840,q=75" },
//   { name: "Graphic Design", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2f4c00ae-3ebc-4dea-5ff5-e5010731cc00/w=3840,q=75" },
//   { name: "UI/UX Design", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/a9b16d0f-741d-4d74-73ec-ae2c0f244900/w=3840,q=75" },
//   { name: "SaaS Based Website Development", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/0c920ac4-635f-4798-8872-61a4a1182000/w=3840,q=75" },
//   { name: "SEO & Marketing", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/cb1ba4e7-dd6d-4f45-32a2-5b8d12956600/w=750,q=75" },
// ];
// const Services = () => {
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//   const [sliderPosition, setSliderPosition] = useState(0);

//   const handleCategoryClick = (category, index) => {
//     setSelectedCategory(category);
//     setSliderPosition(index * 40); 
//   };

//   return (
//     <div className="pt-20">
//         <h1 className="font-semibold text-5xl ">Our Services</h1>
//         <p className="pt-10 mx-[15rem]">Embark on a journey of digital transformation with our comprehensive solutions. 
//             From advanced development to intuitive design and strategic marketing, we empower businesses with innovation and excellence,
//              elevating your digital presence and capabilities.</p>
//              <div className="flex w-full h-screen">
   
//       <div className="w-1/4 h-full bg-white relative p-4 pt-20">
//         <div
//           className="h-[80%] flex flex-col overflow-y-10"
//         >
//           {categories.map((category, index) => (
//             <div
//               key={category.name}
//               className={`category-item p-2 cursor-pointer font-semibold   rounded-md ${selectedCategory.name === category.name ? 'bg-green-500 text-white' : ''}`}
//               onClick={() => handleCategoryClick(category, index)}
//             >
//               {category.name}
//             </div>
//           ))}
//         </div>

     
//         <div
//           className="relative bottom-[370px] left-0 w-1 h-10 bg-black rounded-md pb-10"
//           style={{
//             transform: `translateY(${sliderPosition}px)`,
//             transition: "transform 0.3s ease",
//           }}
//         />
//       </div>

  
//       <div className="w-3/4 h-full flex justify-center items-center bg-white pb-20">
//   <img 
//     src={selectedCategory.image} 
//     alt={selectedCategory.name} 
//     className="w-[40rem] h-[50rem] object-contain rounded-lg mx-auto px-15" 
//   />
// </div>
//  </div>
// </div>
//   );
// };

// export default Services;
  

import { useState } from "react";

const categories = [
  { name: "AI Development", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/948cc148-849b-43fd-69e7-ea0933692700/w=3840,q=75" },
  { name: "Mobile App Development", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/f8d9523e-68df-4c20-5d57-d20b36997800/w=3840,q=75" },
  { name: "Website Development", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2a7fd0d1-608d-48a2-5bd4-89ef4c452e00/w=3840,q=75" },
  { name: "Graphic Design", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2f4c00ae-3ebc-4dea-5ff5-e5010731cc00/w=3840,q=75" },
  { name: "UI/UX Design", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/a9b16d0f-741d-4d74-73ec-ae2c0f244900/w=3840,q=75" },
  { name: "SaaS Based Website Development", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/0c920ac4-635f-4798-8872-61a4a1182000/w=3840,q=75" },
  { name: "SEO & Marketing", image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/cb1ba4e7-dd6d-4f45-32a2-5b8d12956600/w=750,q=75" },
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="pt-20 px-4">
      <h1 className="font-semibold text-3xl md:text-5xl text-center">Our Services</h1>
      <p className="pt-6 md:pt-10 mx-auto text-center max-w-3xl">
        Embark on a journey of digital transformation with our comprehensive solutions. 
        From advanced development to intuitive design and strategic marketing, we empower businesses with innovation and excellence, 
        elevating your digital presence and capabilities.
      </p>

      <div className="flex flex-col md:flex-row w-full h-full mt-10">
   
        <div className="w-full md:w-1/4 bg-white p-4">
          <div className="flex flex-col space-y-4 md:space-y-2">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`p-4 cursor-pointer text-center font-semibold rounded-md border ${
                  selectedCategory.name === category.name
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>

   
        <div className="w-full md:w-3/4 flex justify-center items-center bg-white mt-8 md:mt-0 mb-20">
          <img 
            src={selectedCategory.image} 
            alt={selectedCategory.name} 
            className="w-full max-w-lg md:max-w-3xl h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
