import React from "react";
import styled from "styled-components";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { FaReply } from "react-icons/fa";

const CommentContainer = styled.div`
  border-radius: 0.5rem;
  background-color: white;
  overflow: hidden;
`;
const CommentWrapper = styled.div`
  padding: 1rem;
  position: relative;
`;
const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
`;
const Infos = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: blue;
  margin-right: 1rem;
`;
const Name = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.03rem;
  color: hsl(221, 19%, 22%);
`;
const CommentDate = styled.div`
  color: hsl(206, 3%, 45%);
  font-weight: 500;
  letter-spacing: 0.03rem;
  font-size: 1.1rem;
  margin-left: 1rem;
`;
const Message = styled.p`
  padding: 0.5rem 0;
  line-height: 1.3rem;
  font-weight: bold;
  letter-spacing: 0.03rem;
  color: hsl(206, 3%, 45%);
`;
const CommentStats = styled.div`
  background-color: hsl(225, 25%, 97%);
  color: hsl(245, 26%, 81%);
  padding: 0.5rem;
  border-radius: 0.3rem;
  width: 5rem;
  display: flex;
  justify-content: space-around;
`;
const Count = styled.div`
  color: hsl(242, 30%, 43%);
  font-weight: 600;
`;

const Reply = styled.div`
  color: hsl(242, 30%, 43%);
  font-weight: 600;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  padding: 0.5rem;
`;
const Comment = () => {
  return (
    <CommentContainer>
      <CommentWrapper>
        <CommentAuthor>
          <Infos>
            <Avatar />
            <Name>amyrobson</Name>
          </Infos>
          <CommentDate>1 month ago</CommentDate>
        </CommentAuthor>
        <Message>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          recusandae laboriosam doloremque eum assumenda in, sed ut cum
          obcaecati, exercitationem esse, deleniti eligendi quidem? Ratione
          recusandae nesciunt assumenda possimus! Commodi. Provident quos est
          omnis impedit reprehenderit inventore, consectetur libero nisi
          deserunt animi.
        </Message>
        <CommentStats>
          <HiPlusSm />
          <Count>12</Count>
          <HiMinusSm />
        </CommentStats>
        <Reply>
          <FaReply /> Reply
        </Reply>
      </CommentWrapper>
    </CommentContainer>
  );
};

export default Comment;
