import React from 'react';

const ImageList = ({ images }) => {
  const imageList = images.map(({ id, urls, description}) => {
    const { regular } = urls;
    return (
      <img
        key={id}
        src={regular}
        alt={description}
        style={{ maxHeight: `250px` }} />
    );
  });

  return <div>{imageList}</div>;
};

export default ImageList;
