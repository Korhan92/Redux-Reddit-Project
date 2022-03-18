
import { INVALID_SUBREDDIT, RECEIVE_POSTS } from "../actions";

export default function receiveReducer(state = [], { type, payload }) {
  switch (type) {
    case RECEIVE_POSTS:
      console.log(type, payload);
      return payload;
    
    case INVALID_SUBREDDIT:
      return payload;
    default:
      return state;
  }
}


