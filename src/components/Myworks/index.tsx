import React from "react";
import Portfolios from "./Portfolios";
import { RefProps } from "../Types";

const Myworks: React.FC<RefProps> = ({ myworkref }) => {
  return (
    <React.Fragment>
      <article className="myWorks" ref={myworkref}>
        <h2>&#47;&#47; My works</h2>
        <h3>Portfolio</h3>
        <p>
          I have three main projects in my portfolio. First is this site, second
          is a quiz application and third is one page project. Last project uses
          Typescript.{" "}
        </p>
      </article>
      <Portfolios />
    </React.Fragment>
  );
};
export default Myworks;
