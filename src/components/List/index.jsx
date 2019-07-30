import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem';

import './style.css';

const List = ({
  className,
  listTitle,
  products,
  sku,
  total,
  onQuantityChange,
  onDeleteItem,
  onChangeSku,
}) => {
  const isProducts = !!products.length;
  const isSku = !!sku.length;

  return (
    <div className="list box-fields">
      <p className="list-title">
        {listTitle}
      </p>
      {(isProducts && isSku)
        ? (
          <div className={className}>
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                sku={sku}
                onQuantityChange={onQuantityChange}
                onDeleteItem={onDeleteItem}
                onChangeSku={onChangeSku}
              />
            ))}
          </div>
        )
        : <div>No Items</div>
      }
      <div className="list-cart-total">
        Total:
        {' '}
        {total}
      </div>
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string.isRequired,
  listTitle: PropTypes.string,
  products: PropTypes.oneOfType([
    PropTypes.array,
  ]),
  sku: PropTypes.oneOfType([
    PropTypes.array,
  ]),
  total: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onChangeSku: PropTypes.func.isRequired,
};

List.defaultProps = {
  listTitle: '',
  products: [],
  sku: [],
};

export default List;
