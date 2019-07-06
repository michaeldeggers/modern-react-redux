import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term }
    });
    this.setState({images: response.data.results});
  };

  render() {
    const images = this.state.images;
    return (
      <div className="ui container" style={{ marginTop: `10px` }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <div>{`Found ${images.length} images.`}</div>
        <ImageList images={images}/>
      </div>
    );
  }
}

export default App;
