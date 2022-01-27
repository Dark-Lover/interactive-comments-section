import React from "react";
import styled from "styled-components";

const AddContainer = styled.div`
  border-radius: 0.5rem;
  background-color: white;
  overflow: hidden;
`;
const AddWrapper = styled.div`
  padding: 1rem;
  position: relative;
`;
const AddInput = styled.textarea`
  width: 100%;
  min-height: 5rem;
  border: 1px solid hsl(228, 12%, 88%);
  resize: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  outline: none;
`;
const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: blue;
  margin-right: 1rem;
`;
const SendBtn = styled.button`
  font-family: "Montserrat", sans-serif;
  padding: 0.8rem 1.5rem;
  font-weight: 500;
  letter-spacing: 0.03rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
  background-color: hsl(242, 32%, 51%);
  cursor: pointer;
`;
const AddComment = () => {
  return (
    <AddContainer>
      <AddWrapper>
        <AddInput placeholder="Add a comment..."></AddInput>
        <User>
          <Avatar />
          <SendBtn>SEND</SendBtn>
        </User>
      </AddWrapper>
    </AddContainer>
  );
};

export default AddComment;
