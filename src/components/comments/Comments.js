import React from "react";
import Comment from "./comment/Comment";
import { CommentsContainer, CommentsWrapper } from "./CommentsStyles";
const Comments = () => {
  return (
    <CommentsContainer>
      <CommentsWrapper>
        <Comment />
        <Comment />
      </CommentsWrapper>
    </CommentsContainer>
  );
};

export default Comments;
