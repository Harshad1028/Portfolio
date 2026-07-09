import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import { useState } from "react";
import AOS from "aos";

const Contact = (props) => {
  AOS.init();

  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);
    formData.append("access_key",props.apikey );
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    const msg = document.getElementById("msg");
    if (data.success) {
      msg.innerHTML = setResult("Sended Successfully");
      setTimeout(() => {
        msg.innerHTML = "";
      }, 1800);

      e.target.reset();
    } else {
      msg.innerHTML = setResult("Error");
      setTimeout(() => {
        msg.innerHTML = "";
      }, 2000);
    }
  };

  return (
    <div
      name="Contact"
      className="pt-24 min-h-screen flex flex-col justify-center items-center px-4 max-w-5xl mx-auto"
    >
      <div
        data-aos="fade-up"
        className="text-2xl font-bold text-center mb-10 border-b-2 border-amber-400 pb-2 tracking-wide"
      >
        Contact Me
      </div>

      <div
        data-aos="fade-up"
        className="w-full flex flex-col gap-10 lg:flex-row bg-[#111236]/40 border border-gray-700/60 p-6 sm:p-10 rounded-2xl shadow-xl"
      >
        <form
          data-aos="fade-up"
          onSubmit={onSubmit}
          className="w-full lg:w-1/2 flex flex-col gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className="bg-[#0D0E2B] border border-gray-700 w-full p-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/80 transition-colors shadow-inner"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
            <input
              className="bg-[#0D0E2B] border border-gray-700 w-full p-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/80 transition-colors shadow-inner"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="w-full">
            <textarea
              className="bg-[#0D0E2B] border border-gray-700 w-full p-3 h-32 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/80 transition-colors shadow-inner resize-none"
              name="message"
              id="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full p-3 rounded-xl bg-amber-200 text-black font-bold hover:bg-amber-300 transition-colors shadow-md cursor-pointer"
            >
              Send Message
            </button>
            <span id="msg">{result}</span>
          </div>
        </form>

        <div
          data-aos="fade-up"
          className="w-full lg:w-1/2 flex flex-col gap-6 justify-center lg:pl-10 lg:border-l border-gray-700/60"
        >
          <div className="text-lg font-medium text-gray-300 text-center lg:text-left">
            Let's connect and build something amazing together!
          </div>

          <div className="flex gap-4 flex-row justify-center lg:justify-start">
            <a
              className="flex-1 max-w-[160px] bg-[#0D0E2B]/80 border border-gray-700/80 rounded-xl py-5 px-3 flex flex-col justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:border-amber-400/40 hover:shadow-lg hover:scale-102 group"
              href="https://www.linkedin.com/in/harshad-nakiya-aab8672b0/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-10 w-10 rounded-xl"
                src={linkedin}
                alt="LinkedIn"
              />
              <div className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                LinkedIn
              </div>
              <div className="text-[12px] text-gray-500 text-center">
                Connect With Me
              </div>
            </a>

            <a
              className="flex-1 max-w-[160px] bg-[#0D0E2B]/80 border border-gray-700/80 rounded-xl py-5 px-3 flex flex-col justify-center items-center gap-2 cursor-pointer transition-all duration-300 hover:border-amber-400/40 hover:shadow-lg hover:scale-102 group"
              href="https://github.com/Harshad1028"
              target="_blank"
              rel="noreferrer"
            >
              <img className="h-10 w-10 rounded-xl" src={github} alt="GitHub" />
              <div className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                GitHub
              </div>
              <div className="text-[12px] text-gray-500 text-center">
                Check My Work
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
