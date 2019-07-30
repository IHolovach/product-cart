import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ControlBtn from '../ControlBtn';

import './style.css';

class Counter extends Component {
  onDecrease = () => {
    const {
      product,
      sku,
      onChange,
    } = this.props;
    if (product.quantity > sku.min) {
      const newQuantity = +product.quantity - 1;

      onChange(newQuantity, product.id);
    }
  };

  onIncrease = () => {
    const {
      product,
      sku,
      onChange,
    } = this.props;
    if (product.quantity < sku.max) {
      const newQuantity = +product.quantity + 1;

      onChange(newQuantity, product.id);
    }
  };

  render() {
    const {
      className,
      product,
    } = this.props;

    return (
      <div className={`counter ${className}`}>
        <ControlBtn
          body="-"
          id={product.id}
          onClick={this.onDecrease}
        />
        <div className="counter-quantity">
          {product.quantity}
        </div>
        <ControlBtn
          body="+"
          id={product.id}
          onClick={this.onIncrease}
        />
      </div>
    );
  }
}

Counter.propTypes = {
  className: PropTypes.string,
  product: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  sku: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  className: '',
};

export default Counter;
