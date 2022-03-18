import axios from "axios";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const INVALID_SUBREDDIT = "INVALID_SUBREDDIT";


// export const fetchPosts = subreddit => async dispatch => {

// }

export const selectedSubReddit = (subReddit) => {
  return {
    type: "selectedSubreddit",
    payload: subReddit,
  };
};
export const receivePosts = (post) => {
  return {
    type: RECEIVE_POSTS,
    payload: post,
  };
};
export const invalidSubreddit = () => {
  return {
    type: INVALID_SUBREDDIT,
    payload: "reduc",
  };
};



export function fetchPosts(subreddit) {
  return async (dispatch) => {
    await axios
      .get(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => dispatch( receivePosts(res.data.data.children)));
  };
}
