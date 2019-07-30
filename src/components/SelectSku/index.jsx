import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SelectSku = ({
  className,
  product,
  options,
  onChange,
}) => {
  const isSkuExists = !!options.length;

  return (
    isSkuExists
      ? (
        <select
          className={`select ${className}`}
          name="sku"
          data-name="sku"
          data-product-id={product.id}
          value={product.skuId}
          onChange={onChange}
        >
          {options.map((item) => (
            <option
              key={item.skuId}
              value={item.skuId}
            >
              {item.label}
            </option>
          ))}
        </select>
      )
      : null
  );
};

SelectSku.propTypes = {
  className: PropTypes.string,
  product: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  options: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectSku.defaultProps = {
  className: '',
};

export default SelectSku;
