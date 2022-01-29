import { FETCH_ALL_COMMENTS } from "./ManageTypes";
const initialState = {
  comments: [],
  user: {},
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_COMMENTS:
      return {
        comments: action.payload.comments,
        user: action.payload.currentUser,
      };
    default:
      return state;
  }
};

export default commentReducer;
