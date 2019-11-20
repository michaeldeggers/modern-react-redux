import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  &&& {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      max-width: 180px;
    }
`;

const VideoItem = ({ video, handleVideoSelect }) => {
  const { snippet: { title, thumbnails: { medium: { url } } } } = video;
  return (
    <Wrapper onClick={() => handleVideoSelect(video)} className="item">
      <img className="ui image" src={url} alt={title}/>
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </Wrapper>
  );
};

export default VideoItem;
