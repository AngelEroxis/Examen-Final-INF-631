import { useTrail, animated } from "react-spring";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiMongodb,
  SiTailwindcss,
  SiMui,
  SiTypescript,
  SiJavascript,
  SiYarn,
  SiVite,
  SiMysql,
  SiGoogledrive,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const skills = [
  { id: "html", Component: FaHtml5, level: 90 },
  { id: "css", Component: FaCss3Alt, level: 85 },
  { id: "javascript", Component: SiJavascript, level: 80 },
  { id: "bootstrap", Component: FaBootstrap, level: 70 },
  { id: "typescript", Component: SiTypescript, level: 75 },
  { id: "react", Component: FaReact, level: 80 },
  { id: "mui", Component: SiMui, level: 60 },
  { id: "tailwind", Component: SiTailwindcss, level: 85 },
  { id: "node", Component: FaNodeJs, level: 70 },
  { id: "sql", Component: SiMysql, level: 65 },
  { id: "npm", Component: FaNpm, level: 90 },
  { id: "yarn", Component: SiYarn, level: 75 },
  { id: "mongodb", Component: SiMongodb, level: 60 },
  { id: "vite", Component: SiVite, level: 80 },
  { id: "vscode", Component: SiVisualstudiocode, level: 95 },
  { id: "github", Component: DiGithubBadge, level: 85 },
  { id: "google_drive", Component: SiGoogledrive, level: 65 },
];

export default function Skills() {
  const trail = useTrail(skills.length, {
    from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
  });

  return (
    <div
      id="skills"
      className="bg-lightDesert rounded-lg shadow-md flex items-center justify-center min-h-screen"
    >
      <div className="text-center max-w-4xl w-full mx-auto">
      <br/><br/><br/>
        <h2 className="text-4xl font-bold text-darkDesert mb-6">Mis Habilidades</h2>
        <div className="grid grid-cols-1 gap-6 my-4">
          {trail.map((props, index) => {
            const { Component, id, level } = skills[index];
            return (
              <animated.div
                style={props}
                key={id}
                className="flex items-center gap-4 text-goldDesert"
              >
                <div className="text-5xl">
                  <Component />
                </div>
                <div className="flex-grow">
                  <div className="text-left font-medium">{id.toUpperCase()}</div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-goldDesert h-4 rounded-full"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm font-bold text-darkDesert">{level}%</div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
