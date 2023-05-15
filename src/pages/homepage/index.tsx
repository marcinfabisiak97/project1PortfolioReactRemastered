import { useRef } from "react";
import { useScroll } from "../../components/Hooks";
import { scrollToRef } from "../../components/Utils";
import Navigation from "../../components/Navigation";
import ExperienceAndAbout from "../../components/ExperienceAndAbout";
import Tools from "../../components/Tools";
import Myworks from "../../components/Myworks";
import Workstyle from "../../components/Workstyle";
import Contact from "../../components/Contact";
import JokePart from "../../components/JokePart";
import { BsFillCaretUpFill } from "react-icons/bs";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
const Homepage = () => {
  const aboutref = useRef(null);
  const skillref = useRef(null);
  const myworkref = useRef(null);
  const blogref = useRef(null);
  const contactref = useRef(null);
  const [scrolled] = useScroll(skillref);
  const isKeyboardOpen = useDetectKeyboardOpen();
  return (
    <>
      <header>
        <Navigation
          {...{ aboutref, skillref, myworkref, blogref, contactref }}
        />
      </header>
      <main className="page">
        {scrolled && !isKeyboardOpen && (
          <div className="page__upper" onClick={() => scrollToRef(aboutref)}>
            <BsFillCaretUpFill className="icons" />
          </div>
        )}
        <section>
          <ExperienceAndAbout skillref={skillref} />
          <Tools />
          <Myworks myworkref={myworkref} />
          <Workstyle blogref={blogref} />
          <JokePart />
        </section>
      </main>
      <Contact contactref={contactref} />
    </>
  );
};
export default Homepage;
