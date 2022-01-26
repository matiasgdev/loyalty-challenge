import { _fetch } from '../utils/_fetch';

export const customNextApi = <T = any>(resource: string) => {
  const url = window.location.origin.concat(resource);

  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return _fetch<T>(url, options);
};
