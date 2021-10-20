export const modalReducer = (
  state = { show: false, message: "Network error", callback: () => {} },
  action
) => {
  switch (action.type) {
    case "setModalError":
      return {
        ...state,
        show: true,
        message: action.payload,
        callback: action.callback,
      };
    case "setDismissModalError":
      return { ...state, show: false };
    default:
      return state;
  }
};
