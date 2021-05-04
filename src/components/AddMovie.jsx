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
            id="input-title"
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
