import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  handleSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      }
    });

    this.setState({ videos: response.data.items });
  };

  handleVideoSelect = (selectedVideo) => {
    this.setState({ selectedVideo })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} />
      </div>
    );
  }
}

export default App;
