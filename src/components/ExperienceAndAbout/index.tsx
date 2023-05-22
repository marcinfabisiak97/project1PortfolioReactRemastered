import React from "react";
import { RefProps } from "../Types";
import About from "./About";
import Experience from "./Experience";
import Modal from "./ModalAlert";
import { useAppSelector } from "../../state/store";
const ExperienceAndAbout: React.FC<RefProps> = ({ skillref }) => {
  const state = useAppSelector((state) => state.modal.isOpen);
  return (
    <section className="upperpartAndDownpart" data-testid="experienceAndAbout">
      <Experience />
      <About skillref={skillref} />
      {state && <Modal />}
    </section>
  );
};
export default ExperienceAndAbout;
