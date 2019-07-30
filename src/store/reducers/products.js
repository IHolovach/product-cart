import { productsActionTypes } from '../actions/products';

const initialState = {
  isLoaded: false,
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productsActionTypes.START_LOADING:

      return {
        ...state,
        isLoaded: false,
      };

    case productsActionTypes.END_LOADING:

      return {
        ...state,
        isLoaded: true,
      };

    case productsActionTypes.UPDATE_PRODUCTS:

      return {
        ...state,
        list: action.products,
        isLoaded: true,
      };

    default:
      return state;
  }
};
