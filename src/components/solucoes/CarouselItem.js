import React from 'react';

import Avatar from '../common/Avatar';

const CarouselItem = ({ image, alt, header, subHeader, text, classes }) => (
  <div className={`carousel-item ${classes}`}>
    <div className="row">
      <div className="col-md-6">
        <Avatar src={image} alt={alt} />
      </div>
      <div className="col-md-6">
        <h4>{header}</h4>
        <h3>{subHeader}</h3>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default CarouselItem;
