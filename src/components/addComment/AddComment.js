import React, { useState } from "react";
import { useSelector } from "react-redux";
// prettier-ignore
import {
  AddContainer,AddWrapper,AddInput,User,Avatar,SendBtn,
} from "./AddStyles";

const handleAction = (type) => {
  console.log(`This Action ${type} has happened !`);
};
const AddComment = ({ type, origin, setterHandler }) => {
  const { user } = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const hideInput = setterHandler !== "" ? setterHandler : () => {};
  console.log("content in add comment");
  console.log(origin);
  console.log(type);
  console.log("message: ", message);
  const handleInput = (val) => {
    setMessage(val);
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
