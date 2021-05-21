let currentId = 0;

const createNotification = (text) => {
  const id = currentId++;
  return {
    id,
    text,
  };
};

export const showNotification = (text) => {
  const notification = createNotification(text);
  return {
    type: "SHOW_NOTIFICATION",
    payload: { ...notification, isTimeout: false },
  };
};

export const hideNotification = (id) => {
  return { type: "HIDE_NOTIFICATION", payload: id };
};

export const showNotificationWithTimeout = (text) => {
  return (dispatch) => {
    const notification = createNotification(text);
    dispatch({
      type: "SHOW_NOTIFICATION",
      payload: { ...notification, isTimeout: true },
    });
    setTimeout(() => dispatch(hideNotification(notification.id)), 3000);
  };
};
