export const bookmarkReducer = (state = [], action) => {
  switch (action.type) {
    case "setBookmark":
      if (state.includes(action.payload))
        return state.filter((item) => item !== action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};
