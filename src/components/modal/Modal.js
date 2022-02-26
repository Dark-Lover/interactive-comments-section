import React from "react";
import { useSelector, useDispatch } from "react-redux";
import services from "./../../redux/manage/axiosServices";
import { to_delete, newchange_false } from "../../redux";
// prettier-ignore
import {ModalContainer,ModalWrapper,ModalTitle,ModalMsg,ModalCtrl,ModalCancel,ModalAccept,
} from "./ModalStyling";

const Modal = () => {
  const dispatch = useDispatch();
  const origin = useSelector((state) => state.toDelete);
  const { remove } = services;
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
          <ModalAccept
            onClick={() => {
              remove(origin.id)
                .then((res) => {
                  dispatch(newchange_false());
                  dispatch(to_delete({}));
                })
                .catch((err) => console.log("Error Deleting: ", err));
            }}
          >
            YES, DELETE
          </ModalAccept>
        </ModalCtrl>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
