import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label
        htmlFor="input-subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          name="subtitle"
          type="text"
          id="input-subtitle"
          data-testid="subtitle-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Subtitle;
