

const Navbar = () => {
    return (
      <nav className="w-full px-8 flex justify-center items-center top-0 ">
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
              className="font-bold text-4xl lg:text-base text-gray-700 hover:text-green-500"
            >
              Services
            </a>
            <a
              href="#about"
              className="font-bold text-4xl lg:text-base text-gray-700 hover:text-green-500"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="font-bold text-4xl lg:text-base text-gray-700 hover:text-green-500"
            >
              About Us
            </a>
            <a
              href="#about"
              className="font-bold text-4xl lg:text-base text-gray-700 hover:text-green-500"
            >
              Industries
            </a>
            <a
              href="#about"
              className="font-bold text-4xl lg:text-base text-gray-700 hover:text-green-500"
            >
              Careers
            </a>
            <a
              href="#contact"
              className="font-bold text-4xl lg:text-base text-gray-700 hover:text-green-500"
            >
              Contact
            </a>
          </nav>
          <button className="bg-green-500 text-white px-5 py-2 rounded-md text-sm lg:text-base focus:outline-none mb-2 pt-3 pb-4">
            Get Quote
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
