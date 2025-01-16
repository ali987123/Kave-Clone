import { useState } from "react";

const tabs = {
  Frontend: [
    { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { name: "Android", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" },
    { name: "React Native", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Flutter", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
    { name: "iOS", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Electron", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg" },
    { name: "Angular", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
    { name: "Next.js", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "Django", icon: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" },
    { name: "Svelte", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" },
    { name: "Vue", icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
    { name: "Flask", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" },
  ],
  Backend: [],
  DevOps: [],
};

const Technologies = () => {
  const [selectedTab, setSelectedTab] = useState("Frontend");

  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">
        Technologies We Use for Innovation
      </h1>
      <p className="pt-4 text-center font-medium text-lg sm:text-xl">
        The following are the most recent tools we evaluate while creating the best IT solutions for you!
      </p>
      <div className="p-6 sm:p-10 bg-blue-100 rounded-lg mt-10">
        <div className="flex justify-center flex-wrap space-x-2 sm:space-x-6 mb-6">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 mb-2 rounded-full text-sm sm:text-lg font-semibold transition ${
                selectedTab === tab
                  ? "bg-green-500 text-white"
                  : "bg-transparent border border-green-500 text-green-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {tabs[selectedTab].map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center  p-4 rounded-lg transition"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2"
              />
              <span className="text-center font-medium text-sm sm:text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
