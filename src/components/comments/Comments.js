import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddComment from "../addComment/AddComment";
import { CommentsContainer, CommentsWrapper, ReplyBox } from "./CommentsStyles";
// import { useDispatch, useSelector } from "react-redux";
import ShowComment from "./reply/ShowComment";
import Loading from "../loading/Loading";
import Modal from "../modal/Modal";

//! move to app.js
// import { fetch_comments } from "../../redux";
// import services from "../../redux/manage/axiosServices";
// const fetchData = async () => {
//   try {
//     const { getAll } = services;
//     const jsonData = await getAll();
//     console.log(jsonData.data.data[0]);
//     return jsonData.data.data[0];
//   } catch (error) {
//     console.log("error from fetchData Func: ", error);
//   }
// };
//!
const Comments = ({ data, dataReady, setNewChange }) => {
  //{ data, setNewChange, dataReady }
  const comments = data;
  const toDelete = useSelector((state) => state.toDelete);
  console.log("todelet: ", toDelete);
  //!move to app.js
  // const { comments } = useSelector((state) => state);
  // const [dataReady, setDataReady] = useState(false);
  // const [newChange, setNewChange] = useState(false);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("comments useEffect");
  //   const myData = fetchData();
  //   myData
  //     .then((res) => {
  //       dispatch(fetch_comments(res));
  //       setDataReady(true);
  //     })
  //     .catch((err) => console.log(err));
  //   setNewChange(false);
  // }, [newChange]);
  //!
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
