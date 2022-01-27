import React from "react";
import AddComment from "../addComment/AddComment";
import Comment from "./comment/Comment";
import { CommentsContainer, CommentsWrapper, ReplyBox } from "./CommentsStyles";
const Comments = () => {
  return (
    <CommentsContainer>
      <CommentsWrapper>
        <Comment />
        <ReplyBox>
          <Comment />
          <Comment />
        </ReplyBox>
        <AddComment />
      </CommentsWrapper>
    </CommentsContainer>
  );
};

export default Comments;
