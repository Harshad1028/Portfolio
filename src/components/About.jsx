import { Link } from "react-scroll";
import AOS from "aos";

const About = () => {
  AOS.init({
    offset: 250,
    duration: 1000,
  });

  return (
    <div className="pt-24 min-h-screen flex flex-col justify-center items-center px-4 sm:px-20 ">
      <div
        data-aos="fade-up"
        className="text-2xl font-bold text-center mb-10 border-b-2 border-amber-400 pb-2"
      >
        About Me
      </div>

      <div
        data-aos="fade-up"
        name="About"
        className="max-w-3xl w-full border-2 border-gray-700/60 p-6 rounded-xl bg-[#111236] shadow-xl flex flex-col gap-4"
      >
        <p className="text-lg leading-relaxed text-gray-200">
          Hello! I am
          <span className="text-amber-400 font-bold"> Harshad Nakiya</span>, a
          BCA graduate and an enthusiastic Front-End Developer with a strong
          focus on creating interactive and clean user experiences.
        </p>

        <p className="text-gray-300 leading-relaxed">
          My expertise lies in building responsive, feature-rich web
          applications using
          <span className="text-white font-semibold">
            &nbsp;React.js, JavaScript (ES6+), HTML5, and CSS3
          </span>
          . I love styling layouts using modern utility frameworks like
          <span className="text-white font-semibold">
            Tailwind CSS and Bootstrap
          </span>
          .
        </p>

        <p className="text-gray-300 leading-relaxed">
          I have hands-on experience integrating REST APIs and handling
          client-side state architecture, which allows me to turn complex ideas
          into smooth, operational web realities. As a passionate fresher, I am
          always geared up to learn quickly, tackle challenging environments,
          and contribute effectively to organizational growth.
        </p>

        <div className="mt-2 pt-4 border-t border-gray-700">
          <h4 className="font-bold text-amber-200 mb-2">
            Education Background:
          </h4>
          <p className="text-sm text-gray-400">
            <span className="text-white font-medium">
              Bachelor of Computer Applications (BCA)
            </span>
            <br />
            Saurashtra University / C.U. Shah College of Commerce, Management
            and Computer Education, Wadhwan (Graduation: 2026)
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            to="Project"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="flex-1 flex justify-center items-center gap-2 p-2.5 rounded-xl bg-amber-200 text-black font-semibold cursor-pointer hover:bg-amber-300 transition-colors shadow-md text-center"
          >
            View My Work
          </Link>

          <a
            href="/Harshad_Nakiya_Resume.pdf"
            download="Harshad_Nakiya_Resume.pdf"
            className="flex-1 flex justify-center items-center gap-2 p-2.5 rounded-xl border-2 border-amber-200 text-amber-200 font-semibold cursor-pointer hover:bg-amber-200 hover:text-black transition-all shadow-md text-center"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 15V3" />
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="m7 10 5 5 5-5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
