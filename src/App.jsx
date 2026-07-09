import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Skill from "./components/Skill.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {

  const apikey = import.meta.env.VITE_WEB3FORMS_APIKEY;

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact apikey={apikey} />
    </>
  );
};

export default App;
