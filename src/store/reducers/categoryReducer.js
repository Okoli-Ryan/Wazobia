export const categoryReducer = (state = "", action) => {
  switch (action.type) {
    case "setCategory":
      return action.payload;
    default:
      return state;
  }
};
