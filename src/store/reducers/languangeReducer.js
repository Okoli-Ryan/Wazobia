export const languageReducer = (state = "English", action) => {
  switch (action.type) {
    case "setLang":
      return action.payload;
    default:
      return state;
  }
};
