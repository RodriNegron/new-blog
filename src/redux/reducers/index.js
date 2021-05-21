import { combineReducers } from "redux";
import { postsReducer, selectedPostsReducer } from "./postReducer";
import { sessionReducer } from "redux-react-session";


const reducers = combineReducers({
    allPosts: postsReducer,
    posts: selectedPostsReducer,
    session: sessionReducer
  });

export default reducers;