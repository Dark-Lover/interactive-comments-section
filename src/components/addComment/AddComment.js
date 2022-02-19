import React, { useState } from "react";
import { useEffect } from "react";
import services from "../../redux/manage/axiosServices";
import { useSelector, useDispatch } from "react-redux";
// prettier-ignore
import {
  AddContainer,AddWrapper,AddInput,User,Avatar,SendBtn,
} from "./AddStyles";
import { add_comment, newchange_false } from "../../redux";

const AddComment = ({ type, origin, setterHandler }) => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const hideInput = setterHandler !== "" ? setterHandler : () => {};
  if (origin) console.log(`we are ${type} to ${origin.id} with type: ${type}`);
  else {
    console.log("just ADDING A NEW COMMENT");
  }
  const handleInput = (val) => {
    setMessage(val);
  };
  const handleAction = (type) => {
    //* ADD a New Comment
    if (type === "SEND") {
      const { create } = services;
      dispatch(add_comment(message));
      const newMsg = { content: message };
      create(newMsg)
        .then((res) => {
          console.log("Add New Comment");
        })
        .catch((err) => {
          console.log(err);
        });
      dispatch(newchange_false());
    }
    //* ADD a New Reply
    if (type === "Reply") {
      console.log("new Reply");
    }
    //* Update a Comment
    if (type === "UPDATE") {
      const { update } = services;
      const data = message;
      update(origin.id, { data: data })
        .then((res) => console.log(`We are updating ${origin.id}`))
        .catch((err) => console.log(`error Updating ${origin.id}`));
      dispatch(newchange_false());
    }
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <AddContainer>
      <AddWrapper>
        <AddInput
          // value={
          //   type === "Reply" && message === ""
          //     ? `@${origin?.user.username} `
          //     : type === "UPDATE"
          //     ? `${origin?.content} `
          //     : clearInput
          //     ? ""
          //     : message
          // }
          // value={message}
          onChange={(e) => handleInput(e.target.value)}
          defaultValue={
            type === "UPDATE"
              ? `${origin?.content} `
              : type === "Reply"
              ? `@${origin?.user.username} `
              : message
          }
        />
        <User>
          <Avatar src={require(`../../assets/avatars/${user?.image.png}`)} />
          <SendBtn
            type={type}
            onClick={() => {
              handleAction(type);
              hideInput(false);
              // setClearInput(true);
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
