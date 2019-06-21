import React from 'react';

class SearchBar extends React.Component {
  // event automatically passed when using this callback
  onInputChange(event) {
    let text = event.target.value;
    console.log(text);
  }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
