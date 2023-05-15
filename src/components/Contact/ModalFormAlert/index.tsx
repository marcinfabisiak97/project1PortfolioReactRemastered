import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../state/store";
import { close } from "../../../state/slices/formModalSlice/formModalSlice";
const ModalForm = () => {
  const state = useAppSelector((state) => state.formModal.isOpen);
  const stateData = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    }
    document.body.style.overflow = "unset";
  }, [state]);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalContainer__CloseBtn">
          <button onClick={() => dispatch(close())}>X</button>
        </div>
        <p>An email has been sent to {stateData.email} </p>
        <div className="modalContainer__ConfirmBtn">
          <button
            onClick={() => {
              dispatch(close());
            }}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
