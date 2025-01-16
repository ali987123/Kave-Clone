

// const Navbar = () => {
//     return (
//       <nav className="w-full px-8 flex justify-center items-center top-0 ">
//         <div className="w-screen flex justify-between items-center">
//           <a href="/" className="flex-shrink-0">
//             <img
//               alt="Logo"
//               src="https://kavelogics.com/kavelogics-full-logo.svg"
//               className="h-8 lg:h-10"
//             />
//           </a>
  
//           <nav className="hidden md:flex space-x-4">
//             <a
//               href="#home"
//               className="font-bold text-4xl lg:text-base text-gray-700 hover:text-green-500"
//             >
//               Services
//             </a>
//             <a
//               href="#about"
//               className="font-bold text-4xl lg:text-base text-gray-700 hover:text-green-500"
//             >
//               Portfolio
//             </a>
//             <a
//               href="#about"
//               className="font-bold text-4xl lg:text-base text-gray-700 hover:text-green-500"
//             >
//               About Us
//             </a>
//             <a
//               href="#about"
//               className="font-bold text-4xl lg:text-base text-gray-700 hover:text-green-500"
//             >
//               Industries
//             </a>
//             <a
//               href="#about"
//               className="font-bold text-4xl lg:text-base text-gray-700 hover:text-green-500"
//             >
//               Careers
//             </a>
//             <a
//               href="#contact"
//               className="font-bold text-4xl lg:text-base text-gray-700 hover:text-green-500"
//             >
//               Contact
//             </a>
//           </nav>
//           <button className="bg-green-500 text-white px-5 py-2 rounded-md text-sm lg:text-base focus:outline-none mb-2 pt-3 pb-4">
//             Get Quote
//           </button>
//         </div>
//       </nav>
//     );
//   };
  
//   export default Navbar;
  

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-8 mt-2 flex justify-center items-center top-0 ">
      <div className="w-screen flex justify-between items-center">
     
        <a href="/" className="flex-shrink-0">
          <img
            alt="Logo"
            src="https://kavelogics.com/kavelogics-full-logo.svg"
            className="h-8 lg:h-10"
          />
        </a>

        
        <nav className="hidden md:flex space-x-4">
          <a
            href="#home"
            className="font-bold text-gray-700 lg:text-base hover:text-green-500"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="font-bold text-gray-700 lg:text-base hover:text-green-500"
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="font-bold text-gray-700 lg:text-base hover:text-green-500"
          >
            About Us
          </a>
          <a
            href="#industries"
            className="font-bold text-gray-700 lg:text-base hover:text-green-500"
          >
            Industries
          </a>
          <a
            href="#careers"
            className="font-bold text-gray-700 lg:text-base hover:text-green-500"
          >
            Careers
          </a>
          <a
            href="#contact"
            className="font-bold text-gray-700 lg:text-base hover:text-green-500"
          >
            Contact
          </a>
        </nav>

    
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
         
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16" 
                }
              />
            </svg>
          </button>
        </div>


        <button className="hidden sm:block bg-green-500 text-white px-5 py-2 rounded-md text-sm lg:text-base focus:outline-none">
          Get Quote
        </button>
      </div>

      {isMenuOpen && (
        <div className="bg-gray-800 top-20 z-20 absolute left-0 md:hidden  w-full">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#home" className="font-bold text-gray-700 hover:text-green-500">
              Services
            </a>
            <a href="#portfolio" className="font-bold text-gray-700 hover:text-green-500">
              Portfolio
            </a>
            <a href="#about" className="font-bold text-gray-700 hover:text-green-500">
              About Us
            </a>
            <a href="#industries" className="font-bold text-gray-700 hover:text-green-500">
              Industries
            </a>
            <a href="#careers" className="font-bold text-gray-700 hover:text-green-500">
              Careers
            </a>
            <a href="#contact" className="font-bold text-gray-700 hover:text-green-500">
              Contact
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
