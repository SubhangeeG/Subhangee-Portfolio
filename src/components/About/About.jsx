import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import HeroImage from "../../assets/HeroImage.png";

function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7w] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left-Side Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Subhangee
          </h2>
          {/* Skills heading with typing effect*/}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Computer Science Engineer",
                "Frontend Developer",
                "Software Engineer",
                "Coder",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </h3>
          {/* About section- paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Computer Science Engineering student with a strong interest
            in web development and software engineering. Skilled in JavaScript,
            React, and modern front-end technologies, I enjoy building
            responsive and user-friendly web applications. With a solid
            foundation in programming and problem-solving, I am continuously
            learning and expanding my expertise to grow as a full-stack
            developer and contribute to impactful projects.
          </p>
          {/* Resume Download Button */}
          <a
            href="https://drive.google.com/file/d/1iC1WHJUVFeUMztM7APlu08vgVf1PYGu7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            Download Resume
          </a>
        </div>
        {/* Right-Side Content */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full "
            tiltAngleXInitial={0}
            tiltMaxAngleX={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={HeroImage}
              alt="Subhangee"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default About;
