export const languageReducer = (state = "english", action) => {
  switch (action.type) {
    case "setLang":
      return action.payload;
    default:
      return state;
  }
};
