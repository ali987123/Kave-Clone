import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Counter from "../../components/Counter";
import { HorizontalScroll } from "../../components/HorizontalScroll";
import Technologies from "../../components/Technologies";
import Accordion from "../../components/Accordian";
import Section from "../../components/Section";
import Footer1 from "../../components/Footer1";
import Footer from "../../components/footer";
import OurProcess from "../../components/OurProcess";
import Crousel from "../../components/Crousel";



const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="border-b-2 border-gray-300 py-2"></div> 
     <Hero />
     <HorizontalScroll className="mx-10"/>
     <Services className="mt-10"/>
     <Counter/>
    <OurProcess/>
     <Technologies/>
     <Section/>
     <Accordion/>
     <Crousel/>
     <Footer1/>
     <Footer/>
    </div>
  );
};

export default Home;
