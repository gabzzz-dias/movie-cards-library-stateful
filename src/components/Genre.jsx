import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label
        htmlFor="select-input"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          id="select-input"
          data-testid="genre-input"
          value={ value }
          onChange={ handleChange }
        >
          <option
            data-testid="genre-option"
          >
            Ação
          </option>
          <option
            data-testid="genre-option"
          >
            Comédia
          </option>
          <option
            data-testid="genre-option"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Genre;
