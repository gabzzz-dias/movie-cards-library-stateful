import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
    };
  }

  render() {
    const { movies } = this.state;
    return (
      <main>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
