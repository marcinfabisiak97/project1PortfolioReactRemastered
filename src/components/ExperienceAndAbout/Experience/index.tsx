import React from "react";
import Images from "../../../assets/exportFiles";
import ButtonsCopyAndDownload from "../ButtonsCopyAndDownload";
import Typewriter from "typewriter-effect";
import { useAppSelector } from "../../../state/store";
const Experience = () => {
  const stateData = useAppSelector((state) => state.data);
  return (
    <React.Fragment>
      <section className="upperPart">
        <article className="experience">
          <h2>&#47;&#47; Hi, My name is Martin</h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("React Developer")
                .pauseFor(3000)
                .deleteAll()
                .typeString("Front-End Developer")
                .pauseFor(3000)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
          <p>
            Passionate about coding user-side applications with more than 1 year
            of experience within creating my own projects.
          </p>
          <figure className="experience__seework">
            <a target="blank" href={stateData.gitHub}>
              <p>See my work in github</p>
            </a>
            <a target="blank" href={stateData.gitHub}>
              <img src={Images.gitHub} alt="github" />
            </a>
          </figure>
        </article>
        <article className="freelanceDescr">
          <h1>&#47;&#47; I am freelancer</h1>
          <p>Contact me if you want to work with me</p>
          <div>
            <ButtonsCopyAndDownload />
          </div>
        </article>
      </section>
    </React.Fragment>
  );
};
export default Experience;
