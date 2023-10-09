import React, { Component } from "react";
import "../Product/Product.css";

class CardProduct extends Component {
  state = {
    order: 0,
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.props.onProductChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.props.onProductChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="https://placehold.co/250x250" alt="" />
        </div>
        <p className="product-title">
          Daging Ayam Berbumbu Rasa Original plus Telur Ayam Ras
        </p>
        <p className="product-price">Rp. 410.000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
