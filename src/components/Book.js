import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Author from './Author';

class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    const { books } = this.props;

    return (
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                  }}
                />
                <div className="book-shelf-changer">
                  <select value={book.shelf || 'none'}>
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <p className="book-title">{book.title}</p>
              <Author authors={book.authors} />
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

export default Book;
