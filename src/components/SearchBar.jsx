import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input1">
          Inclui o texto:
          <input type="text" id="text-input1" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
