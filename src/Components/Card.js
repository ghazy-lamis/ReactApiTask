import React, { Component } from 'react'

export default class Card extends Component {
  render() {
   
      let {title,description,btn,image} = this.props;
      return (
        
          <div className="card col-md-4">
          <img src={image} className="Image" alt={title} />
          <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">{btn}</a>
          </div>
          </div> 
      );
  }
}
