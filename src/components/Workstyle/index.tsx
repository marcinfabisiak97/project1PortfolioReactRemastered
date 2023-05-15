import Images from "../../assets/exportFiles";
import { RefProps } from "../Types";
const Workstyle: React.FC<RefProps> = ({ blogref }) => {
  return (
    <section className="workStyle" ref={blogref}>
      <article className="workStyle__mainTitle">
        <h2>&#47;&#47; How I work</h2>
        <h3>Hints and tips</h3>
      </article>
      <section className="workStyle__paragraphs">
        <article className="paragraph">
          <figure className="paragraph__photo">
            <img src={Images.noteBook} alt="noteBook" />
          </figure>
          <article className="paragraph__descr">
            <h2>&#47;&#47; Searching on my own</h2>
            <h3>Using my own experience</h3>
            <p>
              I always start work by breaking down the problem. I need to know
              what effect I want to achieve and then I can start developing the
              solution.
            </p>
          </article>
        </article>
        <article className="paragraph">
          <figure className="paragraph__photo">
            <img src={Images.noteBooks} alt="noteBooks" />
          </figure>
          <article className="paragraph__descr">
            <h2>&#47;&#47; Looking for help in Stack Overflow</h2>
            <h3>Using experience of others</h3>
            <p>
              When I don't have clue how to solve problem I look it on Stack,
              sometimes make a new topic.
            </p>
          </article>
        </article>
      </section>
    </section>
  );
};
export default Workstyle;
