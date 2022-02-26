import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddComment from "../addComment/AddComment";
import { CommentsContainer, CommentsWrapper, ReplyBox } from "./CommentsStyles";
// import { useDispatch, useSelector } from "react-redux";
import ShowComment from "./reply/ShowComment";
import Loading from "../loading/Loading";
import Modal from "../modal/Modal";

const Comments = ({ data, dataReady, setNewChange }) => {
  const comments = data;
  const toDelete = useSelector((state) => state.toDelete);
  return (
    <>
      <CommentsContainer>
        <CommentsWrapper>
          {dataReady ? (
            comments.map((comment) => {
              return <ShowComment content={comment} key={comment.id} />;
            })
          ) : (
            <Loading />
          )}

          {dataReady ? (
            <AddComment
              type="SEND"
              setterHandler=""
              setNewChange={setNewChange}
            />
          ) : (
            ""
          )}
        </CommentsWrapper>
      </CommentsContainer>
      {Object.keys(toDelete).length !== 0 &&
        toDelete.constructor === Object && <Modal />}
    </>
  );
};

export default Comments;
