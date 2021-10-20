export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "setSearch":
      return action.payload;
    default:
      return state;
  }
};
