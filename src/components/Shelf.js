import React, { Component } from 'react';

class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
      </div>
    );
  }
}

export default Shelf;
