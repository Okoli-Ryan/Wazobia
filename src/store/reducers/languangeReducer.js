export const languageReducer = (state = "english", action) => {
  switch (action.type) {
    case "english":
      return "english";
    case "yoruba":
      return "yoruba";
    case "hausa":
      return "hausa";
    default:
      return state;
  }
};
