import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label
        htmlFor="input-img"
        data-testid="image-input-label"
      >
        Imagem
        <input
          name="img"
          type="text"
          id="input-img"
          data-testid="image-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default ImagePath;
