import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';
import Shelf from './Shelf';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, onUpdateShelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <main className="list-books-content">
          <Shelf name="Currently Reading" />
          <Book
            books={books.filter(book => book.shelf === 'currentlyReading')}
            onUpdateShelf={onUpdateShelf}
          />
          <Shelf name="Want to Read" />
          <Book
            books={books.filter(book => book.shelf === 'wantToRead')}
            onUpdateShelf={onUpdateShelf}
          />
          <Shelf name="Read" />
          <Book
            books={books.filter(book => book.shelf === 'read')}
            onUpdateShelf={onUpdateShelf}
          />
        </main>
        <Link to="/search" className="open-search">
          <button>Add a book</button>
        </Link>
      </div>
    );
  }
}

export default ListBooks;
