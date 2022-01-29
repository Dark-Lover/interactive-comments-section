import styled from "styled-components";

export const CommentsContainer = styled.div`
  min-height: 100vh;
  max-width: 1440px;
  margin: auto;
  padding: 2rem 1rem;
`;
export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 768px;
  margin: auto;
`;

export const ReplyBox = styled.div`
  padding-left: 1.5rem;
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
