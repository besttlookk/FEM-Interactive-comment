import React, { useContext } from "react";
import { actionTypes, AppContext } from "../contexts/appContext";
import ModalEl from "../styles/components/modalEl";
import { WhiteCard } from "../styles/shared";
import Button from "./Button";

const Modal = () => {
  const { setModalState, dispatch, modalState } = useContext(AppContext);

  const handleDeleteClick = () => {
    dispatch({ type: actionTypes.DELETE_COMMENT, payload: modalState.data });
    setModalState({ active: false, data: undefined });
  };
  return (
    <WhiteCard>
      <ModalEl active={modalState.active ? true : false}>
        <ModalEl.Header>
          <h3>Delete comment</h3>
        </ModalEl.Header>
        <ModalEl.Content>
          Are you sure want to delete this comment? This will remove the comment
          and can&apos;t be undone.
        </ModalEl.Content>
        <ModalEl.Footer>
          <Button
            handleClick={() =>
              setModalState({ active: false, data: undefined })
            }
          >
            <span style={{ fontSize: "16px" }}>NO,CANCEL</span>
          </Button>
          <Button variant="danger" handleClick={handleDeleteClick}>
            <span style={{ fontSize: "16px" }}>YES,DELETE</span>
          </Button>
        </ModalEl.Footer>
      </ModalEl>
    </WhiteCard>
  );
};

export default Modal;
