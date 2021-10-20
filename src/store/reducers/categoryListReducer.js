export const categoryListReducer = (state = [], action) => {
  switch (action.type) {
    case "setCategoryList":
      return action.payload;
    default:
      return state;
  }
};
