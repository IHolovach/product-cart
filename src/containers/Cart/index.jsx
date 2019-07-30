import React from 'react';

import useAsyncProducts from '../../hooks/useAsyncProducts';
import useAsyncSku from '../../hooks/useAsyncSku';
import List from '../../components/List';
import CartContainer from '../../container-components/Cart';

import './style.css';

const Cart = () => {
  const isProductsLoading = useAsyncProducts();
  const isSkuLoading = useAsyncSku();

  if (!isProductsLoading || !isSkuLoading) return null;

  return (
    <CartContainer>
      {containerProps => (
        <List
          className="cart"
          listTitle="Cart"
          products={containerProps.products}
          sku={containerProps.sku}
          total={containerProps.total}
          onQuantityChange={containerProps.onQuantityChange}
          onDeleteItem={containerProps.onDeleteItem}
          onChangeSku={containerProps.onChangeSku}
        />
      )}
    </CartContainer>
  );
};

export default Cart;
