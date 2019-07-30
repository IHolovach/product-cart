import { useState, useEffect } from 'react';

import { getProducts } from '../store/actions/products';
import store from '../store';

export default function useAsyncProducts() {
  const { dispatch } = store;
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchProducts() {
    await dispatch(getProducts());
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return isLoaded;
}
