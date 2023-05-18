import Images from "../../../assets/exportFiles";
import Clipboard from "react-clipboard-animation";
import { copyEmail } from "../../Utils";
import { useAppSelector } from "../../../state/store";
import { useChangeCopiedStateToDefaultAfter } from "../../Hooks";
const ContactDetails = () => {
  const state = useAppSelector((state) => state.data);
  const [copied, setCopied] = useChangeCopiedStateToDefaultAfter(1000);
  return (
    <section className="contactDetails">
      <article className="phoneAndEmail">
        <figure>
          <a href={`tel:${state.phone}`}>
            <img src={Images.contact} alt="contact" />
          </a>
        </figure>
        <article className="phoneAndEmail__text">
          <div>
            <p
              onClick={() => {
                setCopied(true);
                copyEmail(state.email);
              }}
            >
              {state.email}
            </p>
            <Clipboard
              role="clipboard"
              copied={copied}
              setCopied={setCopied}
              text={state.email}
              color="black"
            />
          </div>
          <a href={`tel:${state.phone}`}>
            <p>{state.phone}</p>
          </a>
        </article>
      </article>
      <article className="descr">
        <figure className="descr__photo">
          <img src={Images.devPhoto} alt="developer" />
        </figure>
        <p>author: {state.author}</p>
        <p>description: Front-End Developer</p>
        <a target="_blank" rel="noreferrer" href={state.gitHub}>
          <p>git: {state.gitHub}</p>
        </a>
      </article>
    </section>
  );
};

export default ContactDetails;
