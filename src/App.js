import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  // update shelf functino from Ryan Waites tutorial @ 58 mins
  // https: //www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.books}
              onUpdateShelf={this.updateShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              books={this.state.books}
              onUpdateShelf={this.updateShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
