import React, { Component } from 'react';

class SearchBar extends Component {
  inputText() {
    const { onSearchTextChange } = this.props;
    return (
      <label for="InputText">
        <p>Inclui o texto</p>
        <input
          type="text"
          id="InputText"
          name="InputText"
          value={this.props}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }

  checkbox() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <label for="InputCheck">
        <input type="checkbox" id="InputCheck" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <p>Mostrar somente favoritos</p>
      </label>
    )
  }

  select() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <label for="select">
          <p>Filtrar por gênero</p>
          <select name="select" id="select" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }


  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    <div>
      <form>
        {this.inputText(searchText)}
        <br />
        {this.checkbox(bookmarkedOnly)}
        <br />
        {this.select(selectedGenre)}
      </form>
    </div>
  }
}

export default SearchBar;
