
// const Footer = () => {
//   return (
//     <footer className="-ml-10 absolute z-20 bg-blue-950 text-white ">
//       <div className="container px-6 lg:px-12">
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
     
//           <div className="flex flex-col items-start mb-8 lg:mb-0">
//             <img
//               alt="Kavelogics Full Logo"
//               loading="lazy"
//               width="200"
//               height="auto"
//               src="https://kavelogics.com/kavelogics-full-logo.svg"
//               className="mb-4 "
//             />
//             <div className="flex gap-3 mb-6">
//               {/* <img
//                 alt="Location"
//                 loading="lazy"
//                 width="20"
//                 height="20"
//                 className="h-[20px] w-auto mt-2"
//                 src="/icons/location.svg"
//               /> */}
//               <a
//                 href="https://maps.app.goo.gl/vpkP2w5JG4boCELg8"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-left hover:underline"
//               >
//                 45 F, Commercial Area, PCHS, Lahore, Punjab, Pakistan 55050
//               </a>
//             </div>
//             <div className="flex items-center gap-3 mb-3">
             
//               <p className="text-left">
//                 <a className="hover:underline" href="tel:+923258290490">
//                   +92 325 8290490
//                 </a>
//               </p>
//             </div>
//             <div className="flex items-center gap-3 mb-6">
              
//               <p className="text-left">
//                 <a className="hover:underline" href="mailto:work@kavelogics.com">
//                   work@kavelogics.com
//                 </a>
//               </p>
//             </div>
           
//           </div>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
//             <div>
//               <h3 className="font-semibold text-xl mb-4">Services</h3>
//               <ul>
//                 <li><a href="/services/web-development" className="hover:underline">Web Development</a></li>
//                 <li><a href="/services/mobile-app" className="hover:underline">Mobile App Development</a></li>
//                 <li><a href="/services/seo" className="hover:underline">SEO</a></li>
//                 <li><a href="/services/digital-marketing" className="hover:underline">Digital Marketing</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-xl mb-4">Case Studies</h3>
//               <ul>
//                 <li><a href="/case-studies/tech-solutions" className="hover:underline">Tech Solutions</a></li>
//                 <li><a href="/case-studies/ecommerce" className="hover:underline">E-commerce</a></li>
//                 <li><a href="/case-studies/education" className="hover:underline">Education</a></li>
//                 <li><a href="/case-studies/healthcare" className="hover:underline">Healthcare</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-xl mb-4">Industries</h3>
//               <ul>
//                 <li><a href="/industries/technology" className="hover:underline">Technology</a></li>
//                 <li><a href="/industries/finance" className="hover:underline">Finance</a></li>
//                 <li><a href="/industries/retail" className="hover:underline">Retail</a></li>
//                 <li><a href="/industries/education" className="hover:underline">Education</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-xl mb-4">Company</h3>
//               <ul>
//                 <li><a href="/about-us" className="hover:underline">About Us</a></li>
//                 <li><a href="/careers" className="hover:underline">Careers</a></li>
//                 <li><a href="/blog" className="hover:underline">Blog</a></li>
//                 <li><a href="/contact-us" className="hover:underline">Contact</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="text-center text-sm mt-8">
//           <p>&copy; 2025 Kavelogics. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white w-full absolute  left-0 py-8 px-6 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Left Side: Logo, Contact Info */}
        <div className="flex flex-col items-start mb-8 lg:mb-0 w-full lg:w-[40%]">
          <img
            alt="Kavelogics Full Logo"
            loading="lazy"
            width="200"
            height="auto"
            src="https://kavelogics.com/kavelogics-full-logo.svg"
            className="mb-4"
          />
          <div className="flex gap-3 mb-6">
            <a
              href="https://maps.app.goo.gl/vpkP2w5JG4boCELg8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left hover:underline text-sm md:text-base"
            >
              45 F, Commercial Area, PCHS, Lahore, Punjab, Pakistan 55050
            </a>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <p className="text-left text-sm md:text-base">
              <a className="hover:underline" href="tel:+923258290490">
                +92 325 8290490
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <p className="text-left text-sm md:text-base">
              <a className="hover:underline" href="mailto:work@kavelogics.com">
                work@kavelogics.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Side: Categories & Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 w-full lg:w-[55%]">
          <div>
            <h3 className="font-semibold text-xl mb-4">Services</h3>
            <ul>
              <li><a href="/services/web-development" className="hover:underline text-sm md:text-base">Web Development</a></li>
              <li><a href="/services/mobile-app" className="hover:underline text-sm md:text-base">Mobile App Development</a></li>
              <li><a href="/services/seo" className="hover:underline text-sm md:text-base">SEO</a></li>
              <li><a href="/services/digital-marketing" className="hover:underline text-sm md:text-base">Digital Marketing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4">Case Studies</h3>
            <ul>
              <li><a href="/case-studies/tech-solutions" className="hover:underline text-sm md:text-base">Tech Solutions</a></li>
              <li><a href="/case-studies/ecommerce" className="hover:underline text-sm md:text-base">E-commerce</a></li>
              <li><a href="/case-studies/education" className="hover:underline text-sm md:text-base">Education</a></li>
              <li><a href="/case-studies/healthcare" className="hover:underline text-sm md:text-base">Healthcare</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4">Industries</h3>
            <ul>
              <li><a href="/industries/technology" className="hover:underline text-sm md:text-base">Technology</a></li>
              <li><a href="/industries/finance" className="hover:underline text-sm md:text-base">Finance</a></li>
              <li><a href="/industries/retail" className="hover:underline text-sm md:text-base">Retail</a></li>
              <li><a href="/industries/education" className="hover:underline text-sm md:text-base">Education</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4">Company</h3>
            <ul>
              <li><a href="/about-us" className="hover:underline text-sm md:text-base">About Us</a></li>
              <li><a href="/careers" className="hover:underline text-sm md:text-base">Careers</a></li>
              <li><a href="/blog" className="hover:underline text-sm md:text-base">Blog</a></li>
              <li><a href="/contact-us" className="hover:underline text-sm md:text-base">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm mt-8">
        <p>&copy; 2025 Kavelogics. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
