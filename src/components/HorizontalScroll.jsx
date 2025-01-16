

// const logos = [
//   { src: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png", alt: "JavaScript" },
//   { src: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png", alt: "Python" },
//   { src: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png", alt: "Java" },
//   { src: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png", alt: "C#" },
//   { src: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/php/php.png", alt: "PHP" },
// ];

// export default function HorizontalScroll() {
//   return (
//     <div className="relative overflow-hidden bg-blue-950 px-6">
    
//       <div className="flex  animate- space-x-10">

//         {logos.map((logo, index) => (
//           <div key={index} className="flex-row">
//             <img
//               src={logo.src}
//               alt={logo.alt}
//               className="w-20 h-20 object-contain px-3"
//             />
//           </div>
//         ))}
      
        
//       </div>
//     </div>
//   );
// }


import {
  FigmaLogoIcon,
  FramerLogoIcon,
  SketchLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const LOGOS = [
  { id: "figma", icon: <FigmaLogoIcon width={30} height={30} className="text-white" /> },
  { id: "framer", icon: <FramerLogoIcon width={30} height={30} className="text-white" /> },
  { id: "sketch", icon: <SketchLogoIcon width={30} height={30} className="text-white" /> },
  { id: "twitter", icon: <TwitterLogoIcon width={30} height={30} className="text-white" /> },
  { id: "github", icon: <GitHubLogoIcon width={30} height={30} className="text-white" /> },
  { id: "vercel", icon: <VercelLogoIcon width={30} height={30} className="text-white" /> },
  { id: "notion", icon: <NotionLogoIcon width={30} height={30} className="text-white" /> },
  { id: "discord", icon: <DiscordLogoIcon width={30} height={30} className="text-white" /> },
  { id: "instagram", icon: <InstagramLogoIcon width={30} height={30} className="text-white" /> },
  { id: "linkedin", icon: <LinkedInLogoIcon width={30} height={30} className="text-white" /> },
];

export const HorizontalScroll = () => {
  return (
    <div className="bg-blue-950 relative overflow-hidden  before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px]  before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100  after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((logo) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={logo.id}
          >
            {logo.icon}
          </div>
        ))}
        {LOGOS.map((logo) => (
          <div
            className="slide flex items-center justify-center object-contain px-6 w-28 h-28"
            key={logo.id}
          >
            {logo.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
