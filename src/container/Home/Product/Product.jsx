import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 0,
  };

  handleCounterOnChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="https://placehold.co/50x50" alt="" />
          </div>
          <div className="troley">
            <img src="https://placehold.co/50x50" alt="" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onProductChange={(value) => this.handleCounterOnChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;
