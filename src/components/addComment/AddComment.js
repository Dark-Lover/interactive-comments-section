import React, { useState } from "react";
import { useEffect } from "react";
import services from "../../redux/manage/axiosServices";
import { useSelector, useDispatch } from "react-redux";
import { add_comment } from "../../redux";
// prettier-ignore
import {
  AddContainer,AddWrapper,AddInput,User,Avatar,SendBtn,
} from "./AddStyles";

const AddComment = ({ type, origin, setterHandler, setNewChange }) => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [clearInput, setClearInput] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const hideInput = setterHandler !== "" ? setterHandler : () => {};
  // console.log("content in add comment");
  if (origin) console.log(`we are ${type} to ${origin.user.username}`);
  else {
    console.log("just ADDING A NEW COMMENT");
  }
  const handleInput = (val) => {
    setMessage(val);
  };
  const handleAction = (type) => {
    setSubmitted(true);
    console.log("Hada howa type: ", type);
    //* ADD a New Comment
    if (type === "SEND") {
      const { create } = services;
      console.log(create);
      console.log("add comment");
      console.log("my message: ", message);
      dispatch(add_comment(message));
      const newMsg = { content: message };
      create(newMsg)
        .then((res) => {
          console.log("added");
        })
        .catch((err) => {
          console.log(err);
        });
      setNewChange(true);
    }
    //* ADD a New Reply
    if (type === "Reply") {
      console.log("new Reply");
    }
  };
  return (
    <AddContainer>
      <AddWrapper>
        <AddInput
          value={
            type === "Reply" && message === ""
              ? `@${origin?.user.username} `
              : type === "UPDATE"
              ? `${origin?.content}`
              : clearInput
              ? ""
              : message
          }
          onChange={(e) => handleInput(e.target.value)}
        />
        <User>
          <Avatar src={require(`../../assets/avatars/${user?.image.png}`)} />
          <SendBtn
            type={type}
            onClick={() => {
              handleAction(type);
              hideInput(false);
              setClearInput(true);
            }}
          >
            {type === "Reply" ? "SEND" : type}
          </SendBtn>
        </User>
      </AddWrapper>
    </AddContainer>
  );
};

export default AddComment;
