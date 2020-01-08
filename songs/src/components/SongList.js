import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    const { songs } = this.props;
    return (
      <div>
        <ul>
          {songs.map(({title, duration}, i) => {
            return (
              <li key={`song-${i}`}>
                <span>Title: {title}</span>
                <span>Duration: {duration}</span>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ songs }) => {
  return { songs };
};

export default connect(mapStateToProps)(SongList);