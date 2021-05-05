import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="input-title"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            id="input-title"
            data-testid="title-input"
          />
        </label>
        <label
          htmlFor="input-subtitle"
          data-testid="subtitle-input-label"
        >
          <input
            type="text"
            id="input-subtitle"
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
