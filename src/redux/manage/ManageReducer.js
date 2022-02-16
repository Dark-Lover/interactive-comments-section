import { FETCH_ALL_COMMENTS, ADD_COMMENT } from "./ManageTypes";
const initialState = {
  comments: [],
  user: {},
  currentComment: "",
};

const commentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // Fetch All comments
    case FETCH_ALL_COMMENTS:
      return {
        ...state,
        comments: payload.comments,
        user: payload.currentUser,
      };
    // Add a comment
    case ADD_COMMENT:
      return {
        ...state,
        currentComment: payload,
      };
    // Default Return
    default:
      return state;
  }
};

export default commentReducer;
