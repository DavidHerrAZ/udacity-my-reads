import React, { Component } from 'react';

class Author extends Component {
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
