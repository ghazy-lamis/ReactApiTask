import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';


export default class ProductList extends Component {
    state = {
        products: []
    }
     
    componentDidMount () {
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            this.setState({products: response.data});
        })
        .catch(error => {
            console.error("Error fetching data:", error);
          });

    }
  render() {
    return (
        <div className="row">
        {this.state.products.map(product => (
          <Card 
            key={product.id}
            title={product.title}
            description={product.description}
            btn="Buy Now"
            image={product.image}
          />
        ))}
      </div>
      
    );
  }
}
