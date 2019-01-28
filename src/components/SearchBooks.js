import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';
import Book from './Book';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    searchResults: []
  };

  updateQuery = query => {
    this.setState({ query: query }, this.searchBooks(query));
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  searchBooks = query => {
    if (query) {
      BooksAPI.search(query)
        .then(results => {
          if (results.error) {
            this.setState({ searchResults: [] });
          } else {
            results.map(resultBook => {
              let matchedBook = this.props.books.filter(
                shelfBook => resultBook.id === shelfBook.id
              );

              if (matchedBook[0]) {
                resultBook.shelf = matchedBook[0].shelf;
              }

              return resultBook;
            });
            this.setState({ searchResults: results });
          }
        })
        .catch(this.setState({ searchResults: [] }));
    } else {
      this.setState({ searchResults: [] });
    }
  };

  render() {
    const { query, searchResults } = this.state;
    const { onUpdateShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => {
                this.updateQuery(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="search-books-results">
          <Book books={searchResults} onUpdateShelf={onUpdateShelf} />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
