import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Author extends Component {
  static propTypes = {
    authors: PropTypes.array.isRequired
  };

  render() {
    const { authors } = this.props;

    if (authors !== undefined) {
      return (
        <>
          {authors.map(author => (
            <p key={author} className="book-authors">
              {author}
            </p>
          ))}
        </>
      );
    } else {
      return <p className="book-authors">No Authors</p>;
    }
  }
}

export default Author;
