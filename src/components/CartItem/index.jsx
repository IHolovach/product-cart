import React from 'react';
import PropTypes from 'prop-types';

import CartImg from '../CartImg';
import SelectSku from '../SelectSku';
import DeleteBtn from '../DeleteBtn';
import Counter from '../Counter';

import './style.css';

const CartItem = ({
  className,
  product,
  sku,
  onQuantityChange,
  onDeleteItem,
  onChangeSku,
}) => {
  const isProductExists = !!(product.title);
  const [actualSkuSettings] = sku.filter(item => item.skuId === product.skuId);

  return (
    isProductExists
      ? (
        <div
          key={product.id}
          className={`cart-item-wrapper cart-flex ${className}`}
        >
          <CartImg src={product.img} />
          <div className="cart-item-text-info">
            <div className="cart-item-title">
              {product.title}
            </div>
            <div className="cart-item-subtitle">
              {product.subtitle}
            </div>
            <SelectSku
              product={product}
              options={sku}
              onChange={onChangeSku}
            />
          </div>
          <div className="cart-item-quantity-info">
            <Counter
              product={product}
              sku={actualSkuSettings}
              onChange={onQuantityChange}
            />
            <div className="cart-item-total-price">
              {product.price}
            </div>
          </div>
          <DeleteBtn
            id={product.id}
            onClick={onDeleteItem}
          />
        </div>
      )
      : null
  );
};

CartItem.propTypes = {
  className: PropTypes.string,
  product: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  sku: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onChangeSku: PropTypes.func.isRequired,
};

CartItem.defaultProps = {
  className: '',
};

export default CartItem;
