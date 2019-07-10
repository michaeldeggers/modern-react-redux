import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  handleInputChange = event => {
    this.setState({ term: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  render () {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" onChange={this.handleInputChange} value={this.state.term} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
