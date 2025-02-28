import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setToken = (token) => {
  cookies.set('token', token, { path: '/', maxAge: 60 * 60 * 24 * 120 }); // 120 days
};

export const getToken = () => {
  return cookies.get('token');
};

export const removeToken = () => {
  cookies.remove('token', { path: '/' });
};
