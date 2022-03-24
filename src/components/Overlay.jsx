import React, { useContext } from "react";
import { AppContext } from "../contexts/appContext";
import OverlayEl from "../styles/components/OverlayEl";
import Modal from "./Modal";

const Overlay = () => {
  const { setModalState, modalState } = useContext(AppContext);
  return (
    <OverlayEl
      onClick={() => setModalState({ active: false, data: undefined })}
      active={modalState.active ? true : false}
    >
      <Modal />
    </OverlayEl>
  );
};

export default Overlay;
