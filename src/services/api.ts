import { ApiRequestInterface } from "../interfaces/ApiInterface";

const BASE_URL = 'https://6172cfe5110a740017222e2b.mockapi.io/elements';

export const getData = async () => {
  return new Promise<ApiRequestInterface[]>(async (resolve, reject) => {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: {},
    });

    if (response.ok) {
      const result = await response.json();
      resolve(result);
    } else {
      reject('Error in GET DATA request');
    }
  });
};
