import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.addMovie = this.addMovie.bind(this);

    this.state = {
      movies: props.movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({ selectedGenre: value });
    const { movies } = this.props;

    if (value === 'action') {
      this.setState({
        movies: movies.filter((movie) => movie.genre === 'action'),
      });
    } else if (value === 'thriller') {
      this.setState({
        movies: movies.filter((movie) => movie.genre === 'thriller'),
      });
    } else if (value === 'comedy') {
      this.setState({
        movies: movies.filter((movie) => movie.genre === 'comedy'),
      });
    } else {
      this.setState({ movies });
    }
  }

  onBookmarkedChange = ({ target: { checked } }) => {
    this.setState({ bookmarkedOnly: checked });
    const { movies } = this.props;
    if (checked) {
      this.setState({
        movies: movies.filter((movie) => movie.bookmarked === true),
      });
    } else {
      this.setState({ movies });
    }
  }

  onSearchTextChange({ target: { value } }) {
    this.setState({ searchText: value });
    const { movies } = this.props;
    value = value.toUpperCase();

    this.setState({
      movies: movies.filter((movie) => movie.title.toUpperCase().includes(value)
      || movie.subtitle.toUpperCase().includes(value)
      || movie.storyline.toUpperCase().includes(value)),
    });
  }

  addMovie(newMovie) {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <main>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSearchTextChange={ this.onSearchTextChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ (newMovie) => {
            this.addMovie(newMovie);
          } }
        />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
