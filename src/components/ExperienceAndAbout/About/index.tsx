import { RefProps } from "../../Types";
import Bars from "../Bars";
import { useInView } from "react-intersection-observer";
const About: React.FC<RefProps> = ({ skillref }) => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <section ref={skillref} className="downPart">
      <section className="downPart__about">
        <h2>&#47;&#47; About me</h2>
        <h3>All about Techy</h3>
        <p>
          I am interested in practical creating innovative websites. I can
          easily make and maintain a full functional React sites. I always like
          to improve my skills and use new functionalities. When I create a
          project, I always follow the DRY – KISS – YAGNI rules.
        </p>
        <h3>My interests</h3>
        <ul>
          <li>music</li>
          <li>football</li>
          <li>cycling</li>
        </ul>
      </section>
      <section className="downPart__skills">
        <h2 id="skills" ref={ref}>
          &#47;&#47; Skills
        </h2>
        <h3>Techs or languages known by practical side.</h3>
        <Bars inView={inView} />
      </section>
    </section>
  );
};
export default About;
