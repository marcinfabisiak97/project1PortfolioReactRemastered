import Images from "../../assets/exportFiles";

import { useInView } from "react-intersection-observer";
const Tools = () => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  const myTools = [
    { pict: Images.javaScript, text: "Javascript" },
    { pict: Images.reactIcon, text: "React" },
    { pict: Images.typeScriptIcon, text: "Typescript" },
    { pict: Images.reduxIcon, text: "Redux" },
    { pict: Images.sassIcon, text: "Sass" },
    { pict: Images.bootstrap, text: "Bootstrap" },
    { pict: Images.bitBucket, text: "Bitbucket" },
    { pict: Images.sourceTree, text: "Sourcetree" },
  ];

  return (
    <section className="wrapperTools">
      <h2>&#47;&#47; Tools</h2>
      <h3>My essentials</h3>
      <article className="tollsIcon" ref={ref}>
        {myTools.map((el, index) => {
          return (
            <div
              key={index}
              className={
                inView
                  ? "tollsIcon__img"
                  : "tollsIcon__img tollsIcon__img--translate"
              }
            >
              <img src={el.pict} alt={el.pict} />
              <p>{el.text}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};
export default Tools;
