export const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "setData":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
