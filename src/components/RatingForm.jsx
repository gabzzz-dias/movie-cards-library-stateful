import React from 'react';
import PropTypes from 'prop-types';

class RatingForm extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label
        htmlFor="number-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          name="rating"
          type="number"
          id="number-input"
          data-testid="rating-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default RatingForm;
