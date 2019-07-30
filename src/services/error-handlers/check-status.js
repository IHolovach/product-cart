import handleDefaultError from './defaultError';

export default (error) => {
  const { response } = error;

  const status = response
    ? response.status
    : 'failed';

  switch (status) {
    case 401: return handleDefaultError(response);
    case 400:
    case 403:
    case 404:
    case 409:
    case 412:
    case 440: return handleDefaultError(response);

    default: return handleDefaultError(response);
  }
};
