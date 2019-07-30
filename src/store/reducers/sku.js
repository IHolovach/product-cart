import { skuActionTypes } from '../actions/sku';

const initialState = {
  isLoaded: false,
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case skuActionTypes.START_LOADING:

      return {
        ...state,
        isLoaded: false,
      };

    case skuActionTypes.END_LOADING:

      return {
        ...state,
        isLoaded: true,
      };

    case skuActionTypes.UPDATE_SKU:

      return {
        ...state,
        list: action.sku,
        isLoaded: true,
      };

    default:
      return state;
  }
};
