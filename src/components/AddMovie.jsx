import React from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';
import ImagePath from './ImagePath';
import RatingForm from './RatingForm';
import Storyline from './Storyline';
import Subtitle from './Subtitle';
import Title from './Title';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      img: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  resetState() {
    this.setState({
      title: '',
      subtitle: '',
      img: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  submit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
  }

  render() {
    const { title, subtitle, img, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          value={ title }
          handleChange={ this.handleChange }
        />
        <Subtitle
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <ImagePath
          value={ img }
          handleChange={ this.handleChange }
        />
        <Storyline
          value={ storyline }
          handleChange={ this.handleChange }
        />
        <RatingForm
          value={ rating }
          handleChange={ this.handleChange }
        />
        <Genre
          value={ genre }
          handleChange={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => {
            this.submit(event);
            this.resetState();
          } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

// Para o requisito 14, consultei a PR do meu colega Leandro Reis, para entender melhor a função submit().
// link: https://github.com/tryber/sd-010-b-project-movie-cards-library-stateful/pull/39

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
