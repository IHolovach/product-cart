import { combineReducers } from 'redux';

import products from './products';
import sku from './sku';

export default combineReducers({
  products,
  sku,
});
