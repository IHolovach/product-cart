import SkuService from '../../services/api/sku';

// Action types constants
export const skuActionTypes = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  UPDATE_SKU: 'UPDATE_SKU',
};

// Action creators
export const startLoading = () => ({
  type: skuActionTypes.START_LOADING,
});

export const endLoading = () => ({
  type: skuActionTypes.END_LOADING,
});

export const updateSku= (sku) => ({
  type: skuActionTypes.UPDATE_SKU,
  sku,
});

export const getSku = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data: sku } = await SkuService.getSku();

    dispatch(updateSku(sku));
  } catch (e) {
    dispatch(endLoading());
  }
};
