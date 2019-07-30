import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

class CartContainer extends Component {
  state = {
    products: [],
    sku: [],
    total: 0,
  };

  componentDidMount() {
    const {
      products,
      sku,
    } = this.props;

    this.setState({
      products,
      sku,
    }, () => this.calculateTotal());
  }

  calculateTotal = () => {
    const { products } = this.state;
    let total = 0;

    products.map(product => {
      total += product.price;
      return total;
    });

    this.setState({ total });
  };

  onQuantityChange = (newQuantity, productId) => {
    const { products } = this.state;

    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        product.quantity = newQuantity;
        product.price = newQuantity * product.originalPrice;
      }
      return product;
    });

    this.setState({ products: updatedProducts }, () => this.calculateTotal());
  };

  onDeleteItem = (event) => {
    const { products } = this.state;
    const productId = event.currentTarget.dataset.id;
    const updatedProducts = products.filter(product => product.id !== productId);

    this.setState({ products: updatedProducts }, () => this.calculateTotal());
  };

  onChangeSku = (event) => {
    const skuId = event.currentTarget.value;
    const { productId } = event.currentTarget.dataset;
    const {
      products,
      sku,
    } = this.state;

    // todo: set min and max values for product
    const [selectedSku] = sku.filter(item => item.skuId === skuId);

    const updatedProducts = products.map(product => {
      const price = selectedSku.originalPrice;

      if (product.id === productId) {
        product.originalPrice = price;
        product.price = +product.quantity * +price;
        product.skuId = selectedSku.skuId;
      }
      return product;
    });

    this.setState({ products: updatedProducts }, () => this.calculateTotal());
  };

  render() {
    const { children } = this.props;

    return children({
      ...this.state,
      onQuantityChange: this.onQuantityChange,
      calculateTotal: this.calculateTotal,
      onDeleteItem: this.onDeleteItem,
      onChangeSku: this.onChangeSku,
    });
  }
}

const mapStateToProps = (state) => ({
  products: state.products.list,
  sku: state.sku.list,
});

CartContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
  products: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  sku: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
};

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(CartContainer);
