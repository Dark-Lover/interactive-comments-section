import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_comment } from "../../redux";
// prettier-ignore
import {
  AddContainer,AddWrapper,AddInput,User,Avatar,SendBtn,
} from "./AddStyles";

const AddComment = ({ type, origin, setterHandler }) => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
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
    // console.log(`This Action ${type} has happened on ${origin.user.username}!`);
    setSubmitted(true);
    console.log("add comment");
    console.log("my message: ", message);
    const newMessage = {
      id: 6,
      content: message,
      createdAt: "Now",
      score: 0,
      user: {
        image: { png: "image-juliusomo.png", webp: "image-juliusomo.webp" },
        username: "juliusomo",
      },
      replies: [],
    };
    dispatch(add_comment(newMessage));
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
