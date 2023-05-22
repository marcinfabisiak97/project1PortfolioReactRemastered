import Clipboard from "react-clipboard-animation";
import { copyEmail } from "../../Utils";
import { useAppSelector, useAppDispatch } from "../../../state/store";
import { open } from "../../../state/slices/modalSlice/modalSlice";
import { useChangeCopiedStateToDefaultAfter } from "../../Hooks";
const ButtonsCopyAndDownload: React.FC = () => {
  const state = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  const [copied, setCopied] = useChangeCopiedStateToDefaultAfter(1000);
  return (
    <article className="copyAndDownloadButton">
      <button
        onClick={() => {
          setCopied(true);
          copyEmail(state.email);
        }}
      >
        <strong>Copy e-mail</strong>
        <Clipboard
          style={{ width: "100px" }}
          copied={copied}
          setCopied={setCopied}
          text={state.email}
          color="black"
        />
      </button>

      <button onClick={() => dispatch(open())}>
        <strong>Download CV</strong>
      </button>
    </article>
  );
};
export default ButtonsCopyAndDownload;
