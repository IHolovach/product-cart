import ProductsService from '../../services/api/products';

// Action types constants
export const productsActionTypes = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  UPDATE_PRODUCTS: 'UPDATE_PRODUCTS',
};

// Action creators
export const startLoading = () => ({
  type: productsActionTypes.START_LOADING,
});

export const endLoading = () => ({
  type: productsActionTypes.END_LOADING,
});

export const updateProducts = (products) => ({
  type: productsActionTypes.UPDATE_PRODUCTS,
  products,
});

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data: products } = await ProductsService.getProducts();

    dispatch(updateProducts(products));
  } catch (e) {
    dispatch(endLoading());
  }
};
