import React, { useEffect, useState } from "react";
import AddComment from "../addComment/AddComment";
import { CommentsContainer, CommentsWrapper, ReplyBox } from "./CommentsStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetch_comments } from "../../redux";
import data from "../../nodeData.json";
import ShowComment from "./reply/ShowComment";
import Loading from "../loading/Loading";
const fetchData = async () => {
  try {
    const jsonData = await data;
    return jsonData;
    // console.log(myData);
  } catch (error) {
    console.log("error from fetchData Func: ", error);
  }
};

const Comments = () => {
  const { comments } = useSelector((state) => state);
  const [dataReady, setDataReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("comments useEffect");
    const myData = fetchData();
    myData
      .then((res) => {
        dispatch(fetch_comments(res));
        setDataReady(true);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <CommentsContainer>
      <CommentsWrapper>
        {dataReady ? (
          comments.map((comment) => {
            return <ShowComment content={comment} key={comment.id} />;
          })
        ) : (
          <Loading />
        )}

        {/* <Comment />
        <AddComment />
        <ReplyBox>
          <Comment />
          <Comment />
        </ReplyBox>*/}
        {dataReady ? <AddComment type="SEND" setterHandler="" /> : ""}
      </CommentsWrapper>
    </CommentsContainer>
  );
};

export default Comments;
