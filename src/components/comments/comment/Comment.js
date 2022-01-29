import React from "react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { FaReply } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
// prettier-ignore
import {
  CommentContainer,CommentWrapper,Content,CommentAuthor,Infos,Avatar,Name,CommentDate,Message,MessageControl,CommentStats,Count,Reply,ModifyComment,DeleteCom,EditCom,
} from "./CommentStyles";

const Comment = ({ content }) => {
  console.log(content);
  return (
    <CommentContainer>
      <CommentWrapper>
        <Content>
          <CommentAuthor>
            <Infos>
              <Avatar
                src={require(`../../../assets/avatars/${content.user.image.png}`)}
              />
              <Name>{content.user.username}</Name>
            </Infos>
            <CommentDate>{content.createdAt}</CommentDate>
          </CommentAuthor>
          <Message>{content.content}</Message>
        </Content>
        <MessageControl>
          <CommentStats>
            <HiPlusSm />
            <Count>{content.score}</Count>
            <HiMinusSm />
          </CommentStats>
          <Reply>
            <FaReply /> Reply
            {/* Show section Only When the Comment is owned by the User*/}
            <ModifyComment>
              <DeleteCom>
                <MdDelete /> Delete
              </DeleteCom>
              <EditCom>
                <RiPencilFill /> Edit
              </EditCom>
            </ModifyComment>
            {/* END Modify Comment */}
          </Reply>
        </MessageControl>
      </CommentWrapper>
    </CommentContainer>
  );
};

export default Comment;
