import React from 'react';
import styled from 'styled-components';

import ImageCard from './ImageCard';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 10px;
  
  img {
    width: 250px;
  }
`;


const ImageList = ({ images }) => {
  const imageList = images.map((image) => {
    return (
      <ImageCard
        key={image.id}
        image={image}
      />
    );
  });

  return <Container>{imageList}</Container>;
};

export default ImageList;
