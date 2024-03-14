// ImageGallery.js
import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((imageName, index) => (
        <img
          key={index}
          src={process.env.PUBLIC_URL + '/' + imageName} // Access images from the public folder
          alt={imageName}
          style={{ width: '200px', height: '200px', margin: '10px' }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
