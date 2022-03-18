

export default function selectedReducer(state = "", { type, payload }) {
  switch (type) {
    case "selectedSubreddit":
        return payload;
        default:
      return state;
  }
}




