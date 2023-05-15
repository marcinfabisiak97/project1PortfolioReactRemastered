import React from "react";
const myBar = [
  {
    style: "bar__javascript bar__javascript--width",
    class: "bar__javascript",
    text: "javascript 60%",
  },
  {
    style: "bar__react bar__react--width",
    class: "bar__react",
    text: "react 60%",
  },
  {
    style: "bar__typescript bar__typescript--width",
    class: "bar__typescript",
    text: "typescript 40%",
  },
  { style: "bar__css bar__css--width", class: "bar__css", text: "css 80%" },
  {
    style: "bar__html bar__html--width",
    class: "bar__html",
    text: "html 100%",
  },
  { style: "bar__node bar__node--width", class: "bar__node", text: "node 20%" },
];

const Bars: React.FC<{ inView: boolean }> = ({ inView }) => {
  return (
    <React.Fragment>
      {myBar.map((el, index) => {
        return (
          <section className="wrapper-bar" key={index}>
            <article className={inView ? el.style : el.class}>
              <p className={inView ? "bar__displayBlock" : "bar__displayNone"}>
                {el.text}
              </p>
            </article>
          </section>
        );
      })}
    </React.Fragment>
  );
};
export default Bars;
