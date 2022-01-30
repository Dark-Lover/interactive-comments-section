import React from "react";
import styled from "styled-components";
import Comment from "../comment/Comment";

const ReplyContainer = styled.div``;
const ReplyWrapper = styled.div``;
const ReplyBox = styled.div`
  padding-left: 1.5rem;
  padding-top: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &::before {
    background-color: hsl(228, 12%, 88%);
    position: absolute;
    content: "";
    height: 100%;
    width: 0.1rem;
    z-index: 1000;
    left: 0;
  }
`;
const ReplyCom = ({ content }) => {
  return (
    <ReplyContainer>
      <ReplyWrapper>
        <Comment content={content} />
        {content.replies.length !== 0 ? (
          <ReplyBox>
            {content.replies.map((reply) => {
              return <Comment content={reply} />;
            })}
          </ReplyBox>
        ) : (
          ""
        )}
      </ReplyWrapper>
    </ReplyContainer>
  );
};

export default ReplyCom;
