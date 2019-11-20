import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedList = videos.map((video) => {
    const { etag } = video;
    return <VideoItem key={etag} video={video} handleVideoSelect={handleVideoSelect} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
