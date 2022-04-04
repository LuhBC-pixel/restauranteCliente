import { useStorage } from './useStorage';
import { useDispatch } from 'react-redux';
import { AUTH_TYPES } from '../store/AuthReducer';
import { APP_TYPES } from '../store/AppReducer';

export const useAuth = () => {
  const [getAuth, setAuth, removeAuth] = useStorage('auth');
  const dispatch = useDispatch();

  const checkAuth = async () => {
    const data = await getAuth();

    if (data) {
      dispatch({
        type: AUTH_TYPES.USER_LOGGED_IN,
        payload: data,
      });
    }
    dispatch({
      type: APP_TYPES.APP_READY,
    })
  };

  const login = async (user, token) => {
    const payload = {
      user: {
        id: 1,
        nome: 'Luisa',
        email: 'abc@def.com',
      },
      token: '123',
    };

    dispatch({
      type: AUTH_TYPES.USER_LOGGED_IN,
      payload,
    });

    setAuth(payload); // Salva o usuário no storage
  };

  const logout = async () => {
    dispatch({
      type: AUTH_TYPES.USER_LOGGED_OUT,
    });

    removeAuth(); // Remove o usuário do storage
  };

  return {
    checkAuth,
    login,
    logout,
  };
};
