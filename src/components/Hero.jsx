import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Img from "../assets/Img1.png";

const names = ["Web Development", "UI/UX Design", "App Development"];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // To track the current word
  const [showNextWord, setShowNextWord] = useState(false); // Flag to trigger word change

  useEffect(() => {
    // When the current word has finished displaying, switch to the next word
    if (!showNextWord && currentWordIndex < names.length) {
      setShowNextWord(true);
    }
  }, [currentWordIndex, showNextWord]);

  useEffect(() => {
    // Set a timeout to change the word after all characters in the current word are shown
    if (showNextWord && currentWordIndex < names.length) {
      const timeout = setTimeout(() => {
        setShowNextWord(false); // Reset the flag to show the next word
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % names.length); // Move to next word
      }, 3000); // Time to wait after the word is fully displayed before switching to next word

      return () => clearTimeout(timeout); // Cleanup the timeout
    }
  }, [showNextWord, currentWordIndex]);

  return (
    <div className="flex items-center justify-between px-8 py-10">
      <div className="w-full md:w-1/2">
        <h1 className="font-bold text-4xl flex items-center">
          <span className="relative z-10 bg-blue-200 text-black px-2 py-1">
            Build
          </span>
          <p className="font-bold text-4xl pl-3">Your Business through</p>
        </h1>

        <div className="font-bold text-left text-green-500 text-4xl pl-3">
          {/* Show the current word */}
          {names[currentWordIndex] && (
            <motion.div
              key={currentWordIndex}
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 0, // Adjust timing for initial word display
                duration: 0.9, // Increased duration to make the appearance smoother
              }}
            >
              <div style={{ display: "inline-block" }}>
                {Array.from(names[currentWordIndex]).map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: 20 }} // Slide out to the right
                    transition={{
                      delay: i * 0.2, // Increase delay to slow down character appearance
                      duration: 0.4, // Increased duration to make the character appear slower
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
        <p className="font-semibold text-left pr-2">
          Unlock your digital potential with our tailored solutions.
          <br />
          Discover how we can elevate your online presence and drive lasting
          success.
        </p>

        <div className="flex items-center space-x-4 mt-8 w-full">
          <button className="bg-green-500 text-white px-6 py-3 rounded-md">
            Book Consultation
          </button>
          <h3 className="text-green-500 font-semibold">See Our Work</h3>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={Img}
          alt="Hero Image"
          className="w-full h-auto object-cover rounded-lg pb-10"
        />
      </div>
    </div>
  );
};

export default Hero;
