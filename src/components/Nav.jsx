import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Nav = () => {
  const [open, setopen] = useState(false);

  const activestyle = "text-gray-500 font-bold border-b-2 border-gray-500";

  return (
    <nav
      className={`flex flex-col p-5  z-50 fixed top-0 left-0 w-full h-auto transition-all duration-300 ${open ? "bg-[#0D0E2B] text-amber-200" : ""} backdrop-blur-3xl border-b border-slate-500/50 sm:flex-row sm:justify-between sm:items-center sm:p-4`}
    >
      <div className="flex justify-between items-center w-full sm:w-auto ">
        <img src={logo} alt="HN" className="w-50 sm:w-80 cursor-pointer" />
        <button
          className="sm:hidden text-amber-200"
          onClick={() => setopen(!open)}
        >
          <i className={`fa ${open ? "fa-times" : "fa-bars"} fa-2x`}></i>
        </button>
      </div>
      <div
        className={`${open ? "flex " : "hidden"} flex-col gap-2 mt-4 transition-all duration-300 sm:mt-0 sm:flex-row sm:gap-5 sm:flex`}
      >
        <Link
          className="cursor-pointer hover:scale-90 transition-transform duration-300"
          to="Home"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={0}
          duration={500}
          activeClass={activestyle}
          onClick={() => setopen(false)}
        >
          Home
        </Link>
        <Link
          className="cursor-pointer hover:scale-90 transition-transform duration-300"
          to="About"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          activeClass={activestyle}
          onClick={() => setopen(false)}
        >
          About
        </Link>
        <Link
          className="cursor-pointer hover:scale-90 transition-transform duration-300"
          to="Skill"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          activeClass={activestyle}
          onClick={() => setopen(false)}
        >
          Skill
        </Link>
        <Link
          className="cursor-pointer hover:scale-90 transition-transform duration-300"
          to="Project"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          activeClass={activestyle}
          onClick={() => setopen(false)}
        >
          Project
        </Link>
        <Link
          className="cursor-pointer hover:scale-y-90 transition-transform duration-300"
          to="Contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={450}
          activeClass={activestyle}
          onClick={() => setopen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
