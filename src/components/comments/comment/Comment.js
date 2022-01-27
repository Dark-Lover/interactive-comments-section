import React from "react";
import styled from "styled-components";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { FaReply } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

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
  padding: 0.5rem 0;
  border-radius: 0.3rem;
  width: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
const Count = styled.div`
  color: hsl(242, 32%, 51%);
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;

const Reply = styled.div`
  color: hsl(242, 32%, 51%);
  padding: 0.5rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.3rem;
  }
`;
const ModifyComment = styled.div`
  right: 1rem;
  bottom: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;
const DeleteCom = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: hsl(358, 79%, 66%);
`;
const EditCom = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: hsl(242, 32%, 51%);
`;

const MessageControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
        <MessageControl>
          <CommentStats>
            <HiPlusSm />
            <Count>12</Count>
            <HiMinusSm />
          </CommentStats>
          <Reply>
            <FaReply /> Reply
          </Reply>
          {/* <ModifyComment>
            <DeleteCom>
              <MdDelete /> Delete
            </DeleteCom>
            <EditCom>
              <RiPencilFill /> Edit
            </EditCom>
          </ModifyComment> */}
        </MessageControl>
      </CommentWrapper>
    </CommentContainer>
  );
};

export default Comment;
