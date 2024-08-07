import React, { useState, useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import profilepic from "../../assets/Mobile Banner.png";
import AnimatedBorder from "../Animations/AnimatedBorder ";

const LandingPage = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2 lg:mx-20">
      <div className="text-gray-200 mt-10 mb-10 text-sm font-serif">
        <div className="text-sm text-green-300">Frontend Developer</div>
        <div className="text-5xl font-mono">Hello, I'm</div>
        <div className="text-5xl font-mono text-green-300">Srijan Majumder</div>
        <div className="mt-5 text-sm text-gray-300 leading-loose font-serif tracking-widest">
          I am a fresher frontend developer passionate about creating
          user-friendly web interfaces using HTML, CSS, and JavaScript. I am
          eager to apply my skills and learn new technologies in real-world
          projects. In addition to my frontend expertise, I am currently a
          beginner at Spring Boot and have a foundational understanding of its
          core concepts. I am enthusiastic about expanding my knowledge in
          backend development and integrating it with my frontend skills to
          build comprehensive web applications.
        </div>
        <div className="flex mt-5">
          <a
            href="C:\Users\Srijan\OneDrive\Desktop\Portfolio\src\assets\SrijanMajumder_Resume" // Replace with the correct file path
            download="Your-File-Name.pdf" // This sets the default file name for download
          >
            <button className="border border-green-300 px-3 py-2 text-green-300 rounded-full flex items-center  hover:drop-shadow-green-300">
              Download CV
              <MdOutlineFileDownload className="ml-2 " size={20} />
            </button>
          </a>

          <a
            href="https://github.com/UltraInstinctSri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-green-300">
              <VscGithub
                className="ml-5 hover:text-green-300 hover:drop-shadow-green-300"
                size={30}
                color="#68d391"
              />
            </button>
          </a>
          <a>
            <button className="border-green-300 ">
              <CiLinkedin
                className="ml-5  hover:text-green-300 hover:drop-shadow-green-300"
                size={30}
                color="#68d391"
              />
            </button>
          </a>
          <a>
            {" "}
            <button className="border-green-300">
              <SiLeetcode
                className="ml-5  hover:text-green-300 hover:drop-shadow-green-300"
                size={30}
                color="#68d391"
              />
            </button>
          </a>
          <a>
            {" "}
            <button className="border-green-300">
              <FaTwitter
                className="ml-5  hover:text-green-300 hover:drop-shadow-green-300"
                size={30}
                color="#68d391"
              />
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {showImage && (
          <AnimatedBorder>
            <img
              src={profilepic}
              alt="Profile"
              className="w-96 h-96 rounded-full object-cover"
            />
          </AnimatedBorder>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
