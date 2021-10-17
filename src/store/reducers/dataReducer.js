export const dataReducer = (state = null, action) => {
  switch (action.type) {
    case "setLang":
      return action.payload;
    default:
      return state;
  }
};
