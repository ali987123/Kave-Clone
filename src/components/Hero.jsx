import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Img from "../assets/Img1.png";

const names = ["Web Development", "UI/UX Design", "App Development"];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // To track the current word
  const [showNextWord, setShowNextWord] = useState(false); // Flag to trigger word change

  useEffect(() => {
    if (!showNextWord && currentWordIndex < names.length) {
      setShowNextWord(true);
    }
  }, [currentWordIndex, showNextWord]);

  useEffect(() => {
    if (showNextWord && currentWordIndex < names.length) {
      const timeout = setTimeout(() => {
        setShowNextWord(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % names.length);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showNextWord, currentWordIndex]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 py-10 gap-8">
      <div className="text-section flex flex-col justify-center">
        <h1 className="font-bold text-3xl md:text-4xl flex items-center">
          <span className="relative z-10 bg-blue-200 text-black px-2 py-1">
            Build
          </span>
          <p className="font-bold text-3xl md:text-4xl pl-3">
            Your Business through
          </p>
        </h1>

        <div className="font-bold text-left text-green-500 text-3xl md:text-4xl pl-3 mt-2">
          {names[currentWordIndex] && (
            <motion.div
              key={currentWordIndex}
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 0,
                duration: 0.9,
              }}
            >
              <div style={{ display: "inline-block" }}>
                {Array.from(names[currentWordIndex]).map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      delay: i * 0.2,
                      duration: 0.4,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <br />
        <p className="font-semibold text-left pr-2 text-sm md:text-base">
          Unlock your digital potential with our tailored solutions.
          <br />
          Discover how we can elevate your online presence and drive lasting
          success.
        </p>

        <div className="flex items-center space-x-4 mt-6 md:mt-8 w-full">
          <button className="bg-green-500 text-white px-5 md:px-6 py-2 md:py-3 rounded-md text-sm md:text-base">
            Book Consultation
          </button>
          <h3 className="text-green-500 font-semibold text-sm md:text-base">
            See Our Work
          </h3>
        </div>
      </div>

      <div className="image-section flex justify-center items-center">
        <img
          src={Img}
          alt="Hero Image"
          className="w-[150%] sm:w-[120%] md:w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;


