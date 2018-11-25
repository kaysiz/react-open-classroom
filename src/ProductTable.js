import React, { Component } from 'react';
import ProductRow from './ProductRow';
import SortableColumnHeader from './SortableColumnHeader'

class ProductTable extends Component {
    render() {
        let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
        let rows = []

        productsAsArray.forEach((product) => {
            rows.push(
              <ProductRow product={product} key={product.id} ></ProductRow>
            );
          });
          console.log(rows);
        return (
            <table>
                <thead>
                    <tr>
                        <SortableColumnHeader column="name"/>
                        <SortableColumnHeader column="price"/>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        );
    }
}

export default ProductTable;