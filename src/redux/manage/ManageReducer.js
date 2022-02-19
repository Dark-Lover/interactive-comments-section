import {
  FETCH_ALL_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  NEWCHANGE_FALSE,
} from "./ManageTypes";
const initialState = {
  comments: [],
  user: {},
  currentComment: "",
  newChange: false,
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
        newChange: true,
      };
    // Add a comment
    case ADD_COMMENT:
      return {
        ...state,
        currentComment: payload,
        newChange: true,
      };
    // Update a comment
    case UPDATE_COMMENT:
      return {
        ...state,
        currentComment: payload,
        newChange: true,
      };
    // Flasify New change
    case NEWCHANGE_FALSE:
      return {
        ...state,
        newChange: payload,
      };
    // Default Return
    default:
      return state;
  }
};

export default commentReducer;
