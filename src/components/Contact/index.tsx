import { RefProps } from "../Types";
import ContactDetails from "./ContactDetails";
import Form from "./Form";
import { useAppSelector } from "../../state/store";
import ModalForm from "./ModalFormAlert";

const Contact: React.FC<RefProps> = ({ contactref }) => {
  const stateForm = useAppSelector((state) => state.formModal.isOpen);
  return (
    <section className="contact" ref={contactref} data-testid="contact">
      <Form />
      <ContactDetails />
      {stateForm && <ModalForm />}
    </section>
  );
};
export default Contact;
