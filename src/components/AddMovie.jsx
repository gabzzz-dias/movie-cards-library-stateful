import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input type="text" id="input-title" data-testid="title-input" />
        </label>
        <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" id="input-subtitle" data-testid="subtitle-input" />
        </label>
        <label htmlFor="input-img" data-testid="image-input-label">
          Imagem
          <input type="text" id="input-img" data-testid="image-input" />
        </label>
        <label htmlFor="textarea-input" data-testid="storyline-input-label">
          Sinopse
          <textarea data-testid="storyline-input" id="textarea-input" />
        </label>
        <label htmlFor="number-input" data-testid="rating-input-label">
          Avaliação
          <input type="number" id="number-input" data-testid="rating-input" />
        </label>
        <label htmlFor="select-input" data-testid="genre-input-label">
          Gênero
          <select id="select-input" data-testid="genre-input">
            <option data-testid="genre-option">Ação</option>
            <option data-testid="genre-option">Comédia</option>
            <option data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
