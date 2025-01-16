// import SectionItems from "./SectionItems";

// const Section = () => {
//   const industries = [
//     {
//       title: 'E-Commerce',
//       description:
//         'We revolutionize online shopping experiences with intuitive interfaces and scalable platforms for seamless transactions.',
//       imageSrc:
//         'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/d639d50a-fbb0-4c0e-5426-6d2276563400/w=3840,q=75',
//       link: '/industries/ecommerce',
//     },
//     {
//       title: 'Business',
//       description:
//         'We drive efficiency and growth through tailored software solutions that optimize operations and enhance productivity.',
//       imageSrc:
//         'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2980e6fb-5749-45c8-b61d-e76f46a08000/w=3840,q=75',
//       link: '/industries/business',
//     },
//     {
//       title: 'Entertainment',
//       description:
//         'Kavelogics’ team craft immersive digital experiences that captivate audiences and redefine entertainment standards.',
//       imageSrc:
//         'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/9c74b64e-cbc4-4ac2-5a86-da9f4e5f6500/w=3840,q=75',
//       link: '/industries/entertainment',
//     },
//     {
//       title: 'Entertainment',
//       description:
//         'Kavelogics’ team craft immersive digital experiences that captivate audiences and redefine entertainment standards.',
//       imageSrc:
//         'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/9c74b64e-cbc4-4ac2-5a86-da9f4e5f6500/w=3840,q=75',
//       link: '/industries/entertainment',
//     },
//     {
//       title: 'Health',
//       description:
//         'Kavelogics provides tailored health apps and telemedicine platforms, revolutionizing patient care with efficiency and innovation.',
//       imageSrc:
//         'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/d7e2df5d-f7b6-455b-3426-d9085bef7b00/w=3840,q=75',
//       link: '/industries/health',
//     },
//     {
//       title: 'EdTech',
//       description:
//         'We empower learning journeys with interactive platforms and engaging tools that redefine education in the digital age.',
//       imageSrc:
//         'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/c41b899c-4da0-422f-9b02-c9b1ffef2800/w=3840,q=75',
//       link: '/industries/edtech',
//     },
//     {
//       title: 'EdTech',
//       description:
//         'We empower learning journeys with interactive platforms and engaging tools that redefine education in the digital age.',
//       imageSrc:
//         'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/c41b899c-4da0-422f-9b02-c9b1ffef2800/w=3840,q=75',
//       link: '/industries/edtech',
//     },
//     {
//       title: 'EdTech',
//       description:
//         'We empower learning journeys with interactive platforms and engaging tools that redefine education in the digital age.',
//       imageSrc:
//         'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/c41b899c-4da0-422f-9b02-c9b1ffef2800/w=3840,q=75',
//       link: '/industries/edtech',
//     },
//   ];

//   return (
//     <div className="w-full flex flex-col justify-center items-center mb-[145px] lg:mb-[150px]">
//       <h1 className="text-center text-black mb-[12vw] lg:mb-[6vw] font-bold text-5xl pt-20">
//         Elevating Success In The<span className="block font-bold"> Digital Sphere</span>
//       </h1>
//       <div className="flex flex-col justify-center items-center gap-6 md:grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2">
//         {industries.map((industry, index) => (
//           <SectionItems key={index} {...industry} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Section;




import SectionItems from "./SectionItems"; 

const Section = () => {
  const industries = [
    {
      title: 'E-Commerce',
      description:
        'We revolutionize online shopping experiences with intuitive interfaces and scalable platforms for seamless transactions.',
      imageSrc:
        'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/d639d50a-fbb0-4c0e-5426-6d2276563400/w=3840,q=75',
      link: '/industries/ecommerce',
    },
    {
      title: 'Business',
      description:
        'We drive efficiency and growth through tailored software solutions that optimize operations and enhance productivity.',
      imageSrc:
        'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2980e6fb-5749-45c8-b61d-e76f46a08000/w=3840,q=75',
      link: '/industries/business',
    },
    {
      title: 'Entertainment',
      description:
        'Kavelogics team craft immersive digital experiences that captivate audiences and redefine entertainment standards.',
      imageSrc:
        'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/9c74b64e-cbc4-4ac2-5a86-da9f4e5f6500/w=3840,q=75',
      link: '/industries/entertainment',
    },
    {
      title: 'Entertainment',
      description:
        'Kavelogics team craft immersive digital experiences that captivate audiences and redefine entertainment standards.',
      imageSrc:
        'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/9c74b64e-cbc4-4ac2-5a86-da9f4e5f6500/w=3840,q=75',
      link: '/industries/entertainment',
    },
    {
      title: 'Health',
      description:
        'Kavelogics provides tailored health apps and telemedicine platforms, revolutionizing patient care with efficiency and innovation.',
      imageSrc:
        'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/d7e2df5d-f7b6-455b-3426-d9085bef7b00/w=3840,q=75',
      link: '/industries/health',
    },
    {
      title: 'EdTech',
      description:
        'We empower learning journeys with interactive platforms and engaging tools that redefine education in the digital age.',
      imageSrc:
        'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/c41b899c-4da0-422f-9b02-c9b1ffef2800/w=3840,q=75',
      link: '/industries/edtech',
    },
    {
      title: 'EdTech',
      description:
        'We empower learning journeys with interactive platforms and engaging tools that redefine education in the digital age.',
      imageSrc:
        'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/c41b899c-4da0-422f-9b02-c9b1ffef2800/w=3840,q=75',
      link: '/industries/edtech',
    },
    {
      title: 'EdTech',
      description:
        'We empower learning journeys with interactive platforms and engaging tools that redefine education in the digital age.',
      imageSrc:
        'https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/c41b899c-4da0-422f-9b02-c9b1ffef2800/w=3840,q=75',
      link: '/industries/edtech',
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center mb-[145px] lg:mb-[150px]">
      <h1 className="text-center text-black mb-[12vw] lg:mb-[6vw] font-bold text-3xl sm:text-4xl lg:text-5xl pt-20">
        Elevating Success In The<span className="block font-bold"> Digital Sphere</span>
      </h1>
      <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 xl:gap-10">
        {industries.map((industry, index) => (
          <SectionItems key={index} {...industry} />
        ))}
      </div>
    </div>
  );
};

export default Section;
