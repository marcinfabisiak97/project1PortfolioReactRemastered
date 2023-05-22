import React, { useState } from "react";
import { send } from "emailjs-com";
import { useAppDispatch } from "../../../state/store";
import { open } from "../../../state/slices/formModalSlice/formModalSlice";

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await send(
        "service_angvk1e",
        "template_7othq2o",
        toSend,
        "user_CZXASdETJkJ7zZ1G1Ouhg"
      );
      dispatch(open());
      setToSend({
        from_name: "",
        to_name: "",
        message: "",
        reply_to: "",
      });
    } catch (err) {
      console.log("FAILED...", err);
    }
  };
  return (
    <>
      <section className="formPart">
        <h2>&#47;&#47; Contact me</h2>
        <p>If you are willing to work with me, please send me a message.</p>
        <form onSubmit={onSubmit} className="form">
          <fieldset className="form__input">
            <input
              required
              type="email"
              name="reply_to"
              placeholder="Your email"
              value={toSend.reply_to}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="form__input">
            <input
              required
              type="text"
              pattern="[A-Za-z].{1,}"
              name="from_name"
              placeholder="Your name"
              value={toSend.from_name}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="form__textArea">
            <textarea
              required
              name="message"
              placeholder="How can I help you? &#13;Please, put here your message/request."
              value={toSend.message}
              onChange={handleChange}
            ></textarea>
          </fieldset>
          <fieldset className="form__submit">
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default Form;
