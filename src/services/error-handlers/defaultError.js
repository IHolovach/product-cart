export const errorTemplate = (status, message) => ({
  status,
  data: {
    message,
  },
});

export default response => {
  const {
    status,
    data: message,
  } = response;

  throw errorTemplate(status, message);
};
