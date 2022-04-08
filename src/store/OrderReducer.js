const INITIAL_STATE = {
  menu: [],
  order: {
    items: [],
    paymentType: '',
    status: '',
    placeId: {}
  },
  isRequest: false,
  isPay: false,
  statusRequest: '',
};

export const ORDER_TYPES = {
  MENU_LOADED: 'MENU_LOADED',
};

export const OrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER_TYPES.MENU_LOADED:
      return { ...state, menu: action.payload };
    default:
      return { ...state };
  }
};
