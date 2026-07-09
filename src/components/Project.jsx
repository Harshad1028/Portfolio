import notesapp from "../assets/notesApp.png";
import newsapp from "../assets/newsapp.png";
import letterlab from "../assets/letterlab.png";
import AOS from "aos";

const Project = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <div
      name="Project"
      className="pt-24 min-h-screen flex flex-col justify-center items-center px-5 max-w-6xl mx-auto"
    >
      <div
        data-aos="fade-up"
        className="text-2xl font-bold text-center mb-12 border-b-2 border-amber-400 pb-2 tracking-wide"
      >
        Featured Projects
      </div>

      <div className="flex flex-col gap-10 w-full mb-10">
        {/* Project 1: Noterix */}
        <div
          data-aos="fade-up"
          className="bg-[#111236]/40 p-5 border border-gray-700/60 rounded-2xl flex flex-col lg:flex-row gap-8 transition-all duration-300 hover:border-gray-500 shadow-md"
        >
          <div className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-inner">
            <img
              className="w-full h-full py-8 object-cover hover:scale-105 transition-transform duration-500"
              src={notesapp}
              alt="Notes App"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-2xl text-amber-400 mb-3">
                Noterix
              </h3>
              <ul className="text-gray-300 text-sm pl-4 list-disc space-y-2 leading-relaxed">
                <li>
                  Designed and engineered a persistent productivity application
                  enabling streamlined CRUD tasks (Create, Read, Delete
                  notes/tasks).
                </li>
                <li>
                  Utilized client-side state management coupled with HTML5
                  LocalStorage to achieve explicit data persistence, ensuring
                  zero data loss.]
                </li>
                <li>
                  Architected a highly clean, modern, and completely responsive
                  user interface leveraging utility-first workflows in Tailwind
                  CSS.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <div className="text-xs text-amber-200/70 font-semibold uppercase tracking-wider mb-3">
                Tech Stack: React, Tailwind CSS
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="https://noterix.vercel.app/" target="_blank" className="flex-1 sm:flex-none text-sm px-4 py-2 font-medium text-black bg-amber-200 hover:bg-amber-300 rounded-xl transition-colors shadow-md">
                  Live Demo <i className="fa fa-external-link ml-1"></i>
                </a>
                <a href="https://github.com/Harshad1028/Noterix" target="_blank"  className="flex-1 sm:flex-none text-sm px-4 py-2 font-medium text-gray-300 border border-gray-600 hover:bg-gray-800 rounded-xl transition-colors">
                  GitHub <i className="fa fa-github ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: HeadlineHub (Flex-row-reverse for alternate layout) */}
        <div
          data-aos="fade-up"
          className="bg-[#111236]/40 p-5 border border-gray-700/60 rounded-2xl flex flex-col lg:flex-row-reverse gap-8 transition-all duration-300 hover:border-gray-500 shadow-md"
        >
          <div className="w-full lg:w-1/2 overflow-hidden rounded-xl  shadow-inner">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              src={newsapp}
              alt="HeadlineHub"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-2xl text-amber-400 mb-3">
                HeadlineHub
              </h3>
              <ul className="text-gray-300 text-sm pl-4 list-disc space-y-2 leading-relaxed">
                <li>
                  Developed a dynamic news platform that fetches and displays
                  top breaking headlines across multiple categories using a live
                  News REST API.
                </li>
                <li>
                  Implemented an Infinite Scroll mechanism for continuous data
                  loading and integrated an interactive automated top loading
                  bar indicator.
                </li>
                <li>
                  Engineered a responsive category-based navigation system using
                  Bootstrap, allowing users to filter news domains effortlessly.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <div className="text-xs text-amber-200/70 font-semibold uppercase tracking-wider mb-3">
                Tech Stack: React, Bootstrap, REST API
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="flex-1 sm:flex-none text-sm px-4 py-2 font-medium text-black bg-amber-200 hover:bg-amber-300 rounded-xl transition-colors shadow-md">
                  No Live Demo Available Beacause of API Limitaion 
                </button>
                <a href="https://github.com/Harshad1028/HeadLineHub" target="_blank" className="flex-1 sm:flex-none text-sm px-4 py-2 font-medium text-gray-300 border border-gray-600 hover:bg-gray-800 rounded-xl transition-colors">
                  GitHub <i className="fa fa-github ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: LetterLab */}
        <div
          data-aos="fade-up"
          className="bg-[#111236]/40 p-5 border border-gray-700/60 rounded-2xl flex flex-col lg:flex-row gap-8 transition-all duration-300 hover:border-gray-500 shadow-md"
        >
          <div className="w-full lg:w-1/2 overflow-hidden rounded-xln shadow-inner">
            <img
              className="py-8 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              src={letterlab}
              alt="LetterLab"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-2xl text-amber-400 mb-3">
                LetterLab
              </h3>
              <ul className="text-gray-300 text-sm pl-4 list-disc space-y-2 leading-relaxed">
                <li>
                  Built an interactive text-processing workbench providing
                  comprehensive text transformations like conversions, deep
                  white-space stripping, and single-click copy.
                </li>
                <li>
                  Architected an advanced UI theme personalization engine
                  utilizing integrated color palettes to dynamically update
                  layout styles based on active user states.
                </li>
                <li>
                  Programmed adaptive persistence that reliably preserves
                  user-configured workspace palettes across window closures
                  based on optimized storage defaults.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <div className="text-xs text-amber-200/70 font-semibold uppercase tracking-wider mb-3">
                Tech Stack: React, Custom CSS, State Architecture
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="https://letter-lab-three.vercel.app/" target="_blank" className="flex-1 sm:flex-none text-sm px-4 py-2 font-medium text-black bg-amber-200 hover:bg-amber-300 rounded-xl transition-colors shadow-md">
                  Live Demo <i className="fa fa-external-link ml-1"></i>
                </a>
                <a href="https://github.com/Harshad1028/LetterLab" target="_blank" className="flex-1 sm:flex-none text-sm px-4 py-2 font-medium text-gray-300 border border-gray-600 hover:bg-gray-800 rounded-xl transition-colors">
                  GitHub <i className="fa fa-github ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
