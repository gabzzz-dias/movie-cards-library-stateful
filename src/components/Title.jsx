import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label
        htmlFor="input-title"
        data-testid="title-input-label"
      >
        Título
        <input
          name="title"
          type="text"
          id="input-title"
          data-testid="title-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Title;
