import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
  
  img {
    width: 250px;
  }
`;


const ImageList = ({ images }) => {
  const imageList = images.map(({ id, urls, description}) => {
    const { regular } = urls;
    return (
      <img
        key={id}
        src={regular}
        alt={description}
      />
    );
  });

  return <Container>{imageList}</Container>;
};

export default ImageList;
