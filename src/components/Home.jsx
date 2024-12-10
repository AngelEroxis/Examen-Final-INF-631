import React from "react";
import { useSpring, animated } from "react-spring";
import { TypeAnimation } from 'react-type-animation';
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
import landingImg from "/logo.svg";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
} from "../constants";

export default function Home() {
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const iconSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 20 },
    delay: 300,
  });

  return (
    <div id="home" className="container mx-auto bg-lightDesert flex flex-col items-center justify-center min-h-screen px-4 sm:px-8">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <animated.img
          style={logoSpring}
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1543357480-c60d40007a3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Trumpet with tentacle logo"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Soy Luis Angel</h1>

          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Soy un</h2>

          <h3 className="text-xl sm:text-2xl">
            <TypeAnimation
              sequence={[
                'Desarrollador', 2000, 'Descifrador', 2000, 'Entusiasta de la tecnología', 2000,
                'Programador Backend', 2000, 'Frontend Developer', 2000, 'Creador de soluciones tecnológicas', 2000,
                'Investigador de Inteligencia Artificial', 2000, 'Aprendiz de Machine Learning', 2000, 'Arquitecto de Software', 2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h3>
        </div>
      </div>

      <animated.div style={iconSpring} className="flex flex-row space-x-6 mt-6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={GITHUB_URL}
          className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
        >
          <FaGithub className="w-8 h-8 sm:w-10 sm:h-10" />
          <span className="sr-only">GitHub account</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={LINKEDIN_URL}
          className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
        >
          <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10" />
          <span className="sr-only">LinkedIn account</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={RESUME_URL}
          className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
        >
          <FaFileAlt className="w-8 h-8 sm:w-10 sm:h-10" />
          <span className="sr-only">Resume</span>
        </a>
      </animated.div>
    </div>
  );
}
