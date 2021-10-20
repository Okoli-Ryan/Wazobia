export const setModalError = (
  message = "Network Error",
  callback = () => {}
) => {
  return {
    type: "setModalError",
    payload: message,
    callback: callback,
  };
};

export const dismissModal = () => {
  return {
    type: "setDismissModalError",
  };
};
