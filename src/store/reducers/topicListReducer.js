export const topicListReducer = (state = [], action) => {
  switch (action.type) {
    case "setTopicList":
      return action.payload;
    default:
      return state;
  }
};
