export const topicReducer = (state = "", action) => {
  switch (action.type) {
    case "setTopic":
      return action.payload;
    default:
      return state;
  }
};
