const INITIAL_STATE = {
  loading: 0,
  appReady: false,
};

export const APP_TYPES = {
  APP_READY: 'APP_READY',
  LOADING_START: 'LOADING_START',
  LOADING_STOP: 'LOADING_STOP',
};

export const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_TYPES.APP_READY:
      return {
        ...state,
        appReady: true,
      };

    case APP_TYPES.LOADING_START:
      return {
        ...state,
        loading: state.loading + 1,
      };

    case APP_TYPES.LOADING_STOP:
      return {
        ...state,
        loading: state.loading < 0 ? 0 : state.loading - 1,
      };

    default:
      return state;
  }
};
