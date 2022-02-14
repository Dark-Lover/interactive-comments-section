import React, { useState } from "react";
import { useSelector } from "react-redux";
// prettier-ignore
import {
  AddContainer,AddWrapper,AddInput,User,Avatar,SendBtn,
} from "./AddStyles";

const AddComment = ({ type, origin, setterHandler }) => {
  const { user } = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const hideInput = setterHandler !== "" ? setterHandler : () => {};
  console.log("content in add comment");
  if (origin) console.log(`we are ${type} to ${origin.user.username}`);
  else {
    console.log("just ADDING A NEW COMMENT");
  }
  const handleInput = (val) => {
    setMessage(val);
  };
  const handleAction = (type) => {
    console.log(`This Action ${type} has happened on ${origin.user.username}!`);
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
