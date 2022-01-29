import { FETCH_ALL_COMMENTS } from "./ManageTypes";

export const fetch_comments = (data) => {
  return {
    type: FETCH_ALL_COMMENTS,
    payload: data,
  };
};
