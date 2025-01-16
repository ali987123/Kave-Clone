// import { useState } from "react";

// const Crousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slidesData = [
//     {
//       title: "Business",
//       description:
//         "Option A helps businesses to start, grow, and scale by focusing on revenue growth and business operations.",
//       tags: ["Website Design", "UI/UX Design", "Website Development"],
//       testimonial:
//         "We are thrilled with Kavelogics results. Their expertise in website development has enhanced our operational efficiency and user experience. Highly recommend.",
//       name: "Jonathan Roberts",
//       role: "Co-Founder",
//       image:
//         "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/dfff5a3f-e899-438f-a825-4ae7f519c000/w=48,q=75",
//       mainImage:
//         "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/111cfda1-e2c0-4fb1-aafc-a017b4953200/w=640,q=75",
//     },
//     {
//       title: "Technology",
//       description:
//         "Option B provides innovative technological solutions to businesses, improving efficiency and driving growth.",
//       tags: ["App Development", "Cloud Solutions", "Cybersecurity"],
//       testimonial:
//         "Kavelogics' tech solutions revolutionized our workflow, ensuring seamless operations and enhanced security.",
//       name: "Sophia Lee",
//       role: "CTO",
//       image:
//         "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/3ea2ab36-4f17-4e60-542a-af1d4ab1bb00/w=48,q=75",
//       mainImage:
//         "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/5c82106a-21f6-4d4f-e8cc-d5d8778bf000/w=384,q=75",
//     },
//   ];

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % slidesData.length);
//   };

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
//   };

//   const currentData = slidesData[currentSlide];

//   return (
//     <div className="pt-10">
//       <h1 className="font-bold text-3xl">Our Success Stories</h1>
//       <p className="font-semibold pt-6 text-center mx-[15rem]">
//         Explore testimonials from satisfied clients who have experienced our
//         exceptional services firsthand. Discover how we have helped businesses
//         like yours achieve success and elevate their online presence.
//       </p>

//       <div className="relative overflow-hidden w-4/5 mx-auto mt-10">
//         <div className="flex items-center justify-between p-6 bg-blue-950">
//           <div className="mr-6">
//             <div className="space-y-8 pt-10">
//               <h2 className="text-2xl font-bold text-left text-white">
//                 {currentData.title}
//               </h2>
//               <p className="text-left text-white">{currentData.description}</p>
//               <div className="flex gap-2 flex-nowrap mb-7">
//                 {currentData.tags.map((tag, index) => (
//                   <div
//                     key={index}
//                     className="text-xs lg:text-sm bg-zinc-100/30 rounded-full px-6 py-2 text-white/[98] border-white border-2"
//                   >
//                     {tag}
//                   </div>
//                 ))}
//               </div>
//               <p className="text-left text-white">{currentData.testimonial}</p>
//               <div className="flex items-center space-x-4">
//                 <img src={currentData.image} alt="" className="w-12 h-12" />
//                 <div className="grid grid-cols-1">
//                   <div className="text-white/[98] text-base font-semibold leading-[23px] lg:text-lg">
//                     {currentData.name}
//                   </div>
//                   <div className="text-white/[98] text-xs font-normal leading-[23px]">
//                     {currentData.role}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md mt-10 mr-[10rem]">
//               Case Study
//             </button>
//           </div>

//           <img
//             src={currentData.mainImage}
//             alt="Slider"
//             className="rounded-md w-1/2"
//           />
//         </div>

//         <div className="mt-2 relative left-1/2 transform -translate-x-1/2 flex space-x-4 mr-[55rem] ">
//           <button
//             className="flex items-center rounded-full  bg-green-600 text-white  hover:bg-green-700 shadow-lg"
//             onClick={handlePrev}
//           >
//             <span className="mr-2 text-2xl p-2 items-center">←</span>
//           </button>
//           <button
//             className="flex items-center rounded-full  bg-green-600 text-white  hover:bg-green-700 shadow-lg"
//             onClick={handleNext}
//           >
//             <span className="ml-2 text-2xl p-2 items-center">→</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Crousel;




import { useState } from "react";

const Crousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData = [
    {
      title: "Business",
      description:
        "Option A helps businesses to start, grow, and scale by focusing on revenue growth and business operations.",
      tags: ["Website Design", "UI/UX Design", "Website Development"],
      testimonial:
        "We are thrilled with Kavelogics results. Their expertise in website development has enhanced our operational efficiency and user experience. Highly recommend.",
      name: "Jonathan Roberts",
      role: "Co-Founder",
      image:
        "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/dfff5a3f-e899-438f-a825-4ae7f519c000/w=48,q=75",
      mainImage:
        "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/111cfda1-e2c0-4fb1-aafc-a017b4953200/w=640,q=75",
    },
    {
      title: "Technology",
      description:
        "Option B provides innovative technological solutions to businesses, improving efficiency and driving growth.",
      tags: ["App Development", "Cloud Solutions", "Cybersecurity"],
      testimonial:
        "Kavelogics' tech solutions revolutionized our workflow, ensuring seamless operations and enhanced security.",
      name: "Sophia Lee",
      role: "CTO",
      image:
        "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/3ea2ab36-4f17-4e60-542a-af1d4ab1bb00/w=48,q=75",
      mainImage:
        "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/5c82106a-21f6-4d4f-e8cc-d5d8778bf000/w=384,q=75",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const currentData = slidesData[currentSlide];

  return (
    <div className="pt-10 px-4 sm:px-8 md:px-16 lg:px-32">
      <h1 className="font-bold text-3xl text-center">Our Success Stories</h1>
      <p className="font-semibold pt-6 text-center mx-auto max-w-4xl">
        Explore testimonials from satisfied clients who have experienced our exceptional services firsthand. Discover how we have helped businesses like yours achieve success and elevate their online presence.
      </p>

      <div className="relative overflow-hidden w-full mt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-blue-950 rounded-lg shadow-md">
          <div className="mr-0 lg:mr-6 w-full lg:w-1/2">
            <div className="space-y-8 pt-10">
              <h2 className="text-2xl font-bold text-left text-white">
                {currentData.title}
              </h2>
              <p className="text-left text-white">{currentData.description}</p>
              <div className="flex gap-2 flex-wrap mb-7">
                {currentData.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="text-xs lg:text-sm bg-zinc-100/30 rounded-full px-6 py-2 text-white/[98] border-white border-2"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p className="text-left text-white">{currentData.testimonial}</p>
              <div className="flex items-center space-x-4">
                <img src={currentData.image} alt="" className="w-12 h-12 rounded-full" />
                <div>
                  <div className="text-white/[98] text-base font-semibold leading-[23px] lg:text-lg">
                    {currentData.name}
                  </div>
                  <div className="text-white/[98] text-xs font-normal leading-[23px]">
                    {currentData.role}
                  </div>
                </div>
              </div>
            </div>
            <button className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md mt-10">
              Case Study
            </button>
          </div>

          <img
            src={currentData.mainImage}
            alt="Slider"
            className="rounded-md w-full lg:w-1/2 mt-6 lg:mt-0"
          />
        </div>
        <div className=" relative inset-x-0 bottom-0 flex justify-center gap-4 mt-4 ">
          <button
            className="flex items-center rounded-full bg-green-600 text-white hover:bg-green-700 shadow-lg p-2 "
            onClick={handlePrev}
          >
            <span className="text-2xl">←</span>
          </button>
          <button
            className="flex items-center rounded-full bg-green-600 text-white hover:bg-green-700 shadow-lg p-2"
            onClick={handleNext}
          >
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Crousel;
