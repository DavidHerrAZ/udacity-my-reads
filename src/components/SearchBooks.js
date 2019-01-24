import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

class SearchBooks extends Component {
  state = {
    query: '',
    searchResults: []
  };

  updateQuery = query => {
    this.setState({ query: query.trim() }, this.searchBooks(query));
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  searchBooks = query => {
    if (query) {
      BooksAPI.search(query).then(results => {
        this.setState({ searchResults: results });
      });
    } else {
      this.setState({ searchResults: [] });
    }
  };

  render() {
    const { query, searchResults } = this.state;

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
          <ol className="books-grid">
            {searchResults.map(book => (
              <li key={book.id} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
