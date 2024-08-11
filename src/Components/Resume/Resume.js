import React, { useState } from "react";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

const Resume = () => {
  const [selectedTab, setSelectedTab] = useState("1");

  const buttonClass = (tab) =>
    `font-bold py-2 w-96 rounded  hover:text-black ${
      selectedTab === tab
        ? "bg-green-400 text-black"
        : "bg-gray-800 hover:bg-green-400 text-white"
    }`;

  return (
    <div className="grid grid-cols-5 gap-4 lg:mx-20">
      <div className="text-gray-200 mt-10 mb-10 text-sm font-serif col-span-2">
        <div className="text-4xl font-mono">Why hire me?</div>

        <div className="mt-5 text-sm text-gray-300 leading-loose font-serif tracking-widest">
          "I offer strong frontend skills and basic backend knowledge,
          delivering well-rounded web solutions that enhance user experience and
          functionality."
        </div>
        <div className="mt-5">
          <button
            className={buttonClass("1")}
            onClick={() => setSelectedTab("1")}
          >
            Experience
          </button>
        </div>
        <div className="mt-5">
          <button
            className={buttonClass("2")}
            onClick={() => setSelectedTab("2")}
          >
            Education
          </button>
        </div>
        <div className="mt-5">
          <button
            className={buttonClass("3")}
            onClick={() => setSelectedTab("3")}
          >
            Skills
          </button>
        </div>
        <div className="mt-5">
          <button
            className={buttonClass("4")}
            onClick={() => setSelectedTab("4")}
          >
            About Me
          </button>
        </div>
      </div>

      <div className="flex  col-span-3">
        <div className="text-gray-200 mt-10 mb-10 text-sm font-serif">
          {selectedTab === "1" && <Experience />}
          {selectedTab === "2" && <Education />}
          {selectedTab === "3" && <Skills />}
          {selectedTab === "4" && <AboutMe />}
        </div>
      </div>
    </div>
  );
};

export default Resume;
