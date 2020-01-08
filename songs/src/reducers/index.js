import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Song One', duration: '1:23' },
    { title: 'Song Two', duration: '3:21' },
    { title: 'Song Three', duration: '4:43' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});