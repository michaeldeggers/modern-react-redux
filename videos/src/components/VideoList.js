import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    const { etag } = video;
    return <VideoItem key={etag} video={video}/>;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
