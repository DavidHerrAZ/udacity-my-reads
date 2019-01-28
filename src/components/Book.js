import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Author from './Author';

class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, onUpdateShelf } = this.props;

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
                    backgroundImage: `url(${book.imageLinks &&
                      (book.imageLinks.thumbnail ||
                        book.imageLinks.smallThumbnail ||
                        '')})`
                  }}
                />
                <div className="book-shelf-changer">
                  <select
                    value={book.shelf || 'none'}
                    onChange={e => {
                      onUpdateShelf(book, e.target.value);
                    }}
                  >
                    <option value="move" disabled>
                      Select Shelf...
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
