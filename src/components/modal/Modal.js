import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { to_delete } from "../../redux";
// prettier-ignore
import {ModalContainer,ModalWrapper,ModalTitle,ModalMsg,ModalCtrl,ModalCancel,ModalAccept,
} from "./ModalStyling";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalTitle>Delete comment</ModalTitle>
        <ModalMsg>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </ModalMsg>
        <ModalCtrl>
          <ModalCancel onClick={() => dispatch(to_delete({}))}>
            NO, CANCEL
          </ModalCancel>
          <ModalAccept>YES, DELETE</ModalAccept>
        </ModalCtrl>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
