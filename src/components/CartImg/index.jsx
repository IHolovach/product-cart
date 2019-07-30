import React from 'react';
import PropTypes from 'prop-types';

import ActivityIndicator from '../ActivityIndicator';

import './style.css';

const CartImg = ({
  src,
  className,
}) => {
  const isImgExists = !!(src.length);

  return (
    isImgExists
      ? (
        <div className={`cart-image-wrapper ${className}`}>
          <img
            src={src}
            className="cart-image opacity-on-hover"
            alt="cart"
          />
        </div>
      )
      : <ActivityIndicator isLoading={isImgExists} />
  );
};

CartImg.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

CartImg.defaultProps = {
  src: '',
  className: '',
};

export default CartImg;
