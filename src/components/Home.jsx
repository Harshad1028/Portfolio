import { Link } from "react-router-dom";
import AOS from "aos";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import myimage from '../assets/ProfilePic.png'

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div
      name="Home"
      className="flex flex-col-reverse items-center justify-center gap-10 mt-20 pt-24 px-5 max-w-6xl min-h-screen mx-auto sm:flex-row  sm:mt-0"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex-1 text-center sm:text-left"
      >
        <p className="sm:text-2xl text-xl font-bold text-gray-400">
          Hi, I'm 👋
        </p>
        <p className="text-amber-400 inline-block border-b-2 border-amber-400 sm:text-5xl text-4xl font-black pb-2 mt-2">
          <Typewriter
            words={["Frontend Developer","React Developer"]}
            loop={0}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>

        <p className="pt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
          I build modern, responsive, and high-performance
          <br className="hidden sm:inline" />
           websites and web applications with clean user interfaces.
        </p>

        <div className="flex justify-center sm:justify-start gap-6 mt-6 text-3xl text-gray-400">
          <Link
            to="https://github.com/Harshad1028?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            <i className="fa fa-github"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/harshad-nakiya-aab8672b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link
            to="mailto:hharshadnakiya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            <i className="fa fa-envelope"></i>
          </Link>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="w-56 h-56 rounded-full overflow-hidden  sm:w-80 sm:h-80 hover:scale-105 transition-all duration-300 border-4 border-amber-200/30 hover:border-amber-200 shadow-2xl animate-normal-float">
          <img
            className="w-full h-full object-cover "
            src={myimage}
            alt="Harshad Nakiya"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
