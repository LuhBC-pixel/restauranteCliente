export const INITIAL_STATE = {
  user: {},
  token: null,
};

export const AUTH_TYPES = {
  USER_LOGGED_IN: 'USER_LOGGED_IN',
  USER_LOGGED_OUT: 'USER_LOGGED_OUT',
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_TYPES.USER_LOGGED_IN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case AUTH_TYPES.USER_LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
