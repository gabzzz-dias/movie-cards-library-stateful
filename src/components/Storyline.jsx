import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label
        htmlFor="textarea-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          id="textarea-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Storyline;
