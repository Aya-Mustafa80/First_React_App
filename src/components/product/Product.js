import React, { Component } from "react";
class Product extends Component {
  state = {
    name: "Burger",
    count: 3,
  };
  render() {
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <span>{this.state.name}</span>
          <span className="badge bg-primary m-2">{this.state.count}</span>
        </body>
      </html>
    );
  }
}

export default Product;
