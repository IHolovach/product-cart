import { useState, useEffect } from 'react';

import { getSku } from '../store/actions/sku';
import store from '../store';

export default function useAsyncSku() {
  const { dispatch } = store;
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchSku() {
    await dispatch(getSku());
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchSku();
  }, []);

  return isLoaded;
}
