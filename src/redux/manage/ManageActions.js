import { FETCH_ALL_COMMENTS, ADD_COMMENT } from "./ManageTypes";

export const fetch_comments = (data) => {
  return {
    type: FETCH_ALL_COMMENTS,
    payload: data,
  };
};

export const add_comment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};
