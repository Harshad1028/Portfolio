import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from '../assets/Tailwind CSS.png';
import bootstrap from '../assets/Bootstrap.png';
import js from "../assets/js.png";
import react from "../assets/react.png";
import AOS from "aos";
import { useEffect } from "react";

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const skillsData = [
    {
      id: 1,
      name: "HTML5",
      img: html,
      desc: "Building the solid, semantic foundation of web applications with a strong focus on clean code structure, modern SEO practices, and web accessibility.",
    },
    {
      id: 2,
      name: "CSS",
      img: css,
      desc: "Designing visually stunning, mobile-responsive layouts from scratch while bringing interfaces to life using modern animations and custom styling.",
    },
    {
      id: 3, // Adjust ID as needed
      name: "Tailwind CSS",
      img: tailwind, // Ensure you have this image variable defined
      desc: "Crafting highly customized, modern user interfaces using a utility-first approach that eliminates bloated stylesheets, optimizes bundle sizes, and ensures rapid layout design.",
    },
    {
      id: 4, // Adjust ID as needed
      name: "Bootstrap",
      img: bootstrap, // Ensure you have this image variable defined
      desc: "Developing fully responsive, mobile-first web pages quickly by leveraging a robust grid system, extensive pre-built component libraries, and reliable cross-browser consistency.",
    },
    {
      id: 5,
      name: "JAVASCRIPT",
      img: js,
      desc: "Adding core logic, handling dynamic user interactions, and fetching data from APIs to transform static layouts into functional web applications.",
    },
    {
      id: 6,
      name: "REACT JS",
      img: react,
      desc: "Constructing fast, high-performance web applications utilizing reusable components, efficient virtual DOM rendering, and seamless state management.",
    },
  ];

  return (
    <div
      name="Skill"
      className="pt-24 min-h-screen flex flex-col justify-center items-center px-5 max-w-6xl mx-auto"
    >
      <div
        data-aos="fade-up"
        className="text-2xl font-bold text-center mb-12 border-b-2 border-amber-400 pb-2 tracking-wide"
      >
        My Technical Skill
      </div>

      <div
        data-aos="fade-up"
        className="cards flex flex-col gap-5 items-center justify-center sm:flex-row flex-wrap"
      >
        {skillsData.map((skill) => (
        <div  key={skill.id}
            data-aos="fade-up">
              <div
            className="card bg-[#111236]/60 border border-gray-700/60 rounded-xl w-60 sm:w-52 flex flex-col items-center justify-between cursor-pointer group
                        transition-all duration-700 hover:scale-105 hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
          >
            {/* લોગો વાળું બોક્સ */}
            <div className="flex items-center justify-center mt-7 bg-[#0D0E2B] rounded-xl mb-4 border border-gray-800 p-4
                            transition-all duration-700 group-hover:scale-105 group-hover:border-amber-400/50 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]">
              <img src={skill.img} alt={`${skill.name} Logo`} className="w-16 h-16 object-contain" />
            </div>

            {/* લખાણ વાળું બોક્સ */}
            <div className="py-2 px-3 pb-6">
              <h3 className="text-center font-bold mb-3 transition-colors duration-700  group-hover:text-amber-400">
                {skill.name}
              </h3>
              <p className="text-center text-sm text-gray-500 transition-colors duration-700  group-hover:text-gray-300">
                {skill.desc}
              </p>
            </div>
          </div>
        </div>          
        ))}
      </div>
    </div>
  );
};

export default Skill;