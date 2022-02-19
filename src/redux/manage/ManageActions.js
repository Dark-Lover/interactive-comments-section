import {
  FETCH_ALL_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  NEWCHANGE_FALSE,
} from "./ManageTypes";

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

export const update_comment = (comment) => {
  return {
    type: UPDATE_COMMENT,
    payload: comment,
  };
};

export const newchange_false = () => {
  return {
    type: NEWCHANGE_FALSE,
    payload: false,
  };
};
