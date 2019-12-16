import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.handleSearchSubmit('reactjs').then(() => console.log('videos loaded'))
  }

  handleSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  handleVideoSelect = (selectedVideo) => {
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
