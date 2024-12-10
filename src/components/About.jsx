  import React, { memo, useState, useEffect } from "react";
  import { FaGithub, FaLinkedin } from "react-icons/fa";
  import { GITHUB_URL, LINKEDIN_URL, PERPLEXITY_URL } from "../constants/index";
  import { useSpring, animated, config } from "react-spring";
  import { SiPerplexity } from "react-icons/si";

  const Anchor = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
      aria-label={`Link to ${href}`}
    >
      {children}
    </a>
  );

  const About = () => {
    const fadeIn = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config: config.slow,
    });

    const [scale, setScale] = useState(1);
    const springProps = useSpring({
      transform: `scale(${scale})`,
      config: config.wobbly,
    });

    const slideUp = useSpring({
      transform: "translate3d(0,0px,0)",
      from: { transform: "translate3d(0,40px,0)" },
      delay: 200,
    });

    return (
      <animated.div
        style={fadeIn}
        id="about"
        className="container mx-auto flex flex-col items-center justify-center bg-lightDesert min-h-screen"
      >
        <animated.img
          style={{ ...springProps }}
          src="images/yo.jpg"
          alt="Sara"
          className="rounded-full w-64 h-64 border-4 border-darkDesert object-cover mb-8 mt-20"
          onMouseEnter={() => setScale(1.1)}
          onMouseLeave={() => setScale(1)}
        />
        <animated.div style={slideUp}>
        
          <h1 className="text-4xl font-bold text-darkDesert mb-4 text-center px-8">
            Luis Angel Mamani Cabrera
          </h1>
          <p className="text-lg text-darkDesert mb-4 text-center px-8">
          ¡Hola!, Soy Luis Angel, desarrollador de frond-end con pasion por crear experiencias web modernas, intuitivas y funcionales.
          Me especializo en el diseño y desarrollo de interfaces que no solo sean visualmente atractivas, sino tambien altamente usables. 
          Disfruto trabajar con tecnologias como HTML, CSS, JavaScript y frameworks como React, para dar vida a proyectos innovadores que cumplan con las expectativas del usuario final. 
          Cuando no estoy escribiendo código, me encanta explorar nuevas tendencias en tecnología y diseño, manteniéndome siempre a la vanguardia.
          </p>
          <p className="text-lg text-darkDesert mb-4 text-center px-8">
          Fuera del mundo del código, me considero un amante de la música. Toco varios instrumentos y disfruto de una amplia gama de géneros musicales. 
          La música es una fuente constante de inspiración para mí, y me ayuda a mantenerme creativo y motivado. Además, soy un gran fanático de los videojuegos y el streaming, 
          actividades que me permiten desconectar y explorar mundos virtuales llenos de aventura y estrategia.
          </p>
          <p className="text-lg text-darkDesert mb-4 text-center px-8">
            También soy un apasionado por el aprendizaje continuo. Siempre busco mejorar mis habilidades tanto en desarrollo como en otras áreas de interés. Me encanta leer sobre tecnología, ciencia, y filosofía, y pasar tiempo al aire libre, ya sea practicando deportes o disfrutando de la naturaleza.
          </p>
          <p className="text-lg text-darkDesert mb-4 text-center px-8">
            Si compartes mis pasiones o tienes ideas interesantes para proyectos, ¡me encantaría colaborar contigo!
          </p>
          <div className="flex justify-center items-center pb-8">
            <Anchor href={GITHUB_URL}>
              <FaGithub size={32} />
            </Anchor>
            <Anchor href={LINKEDIN_URL}>
              <FaLinkedin size={32} />
            </Anchor>
            {/* <Anchor href={PERPLEXITY_URL}>
              <SiPerplexity size={32} />
            </Anchor> */}
          </div>
          <div>
          </div>
        </animated.div>
      </animated.div>
    );
  };

  export default memo(About);
