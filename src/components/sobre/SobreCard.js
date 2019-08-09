import React from 'react';

import Avatar from '../common/Avatar';

const SobreCard = ({ image, alt, text, textBold }) => {
  return (
    <div className="box-df">
      <div className="div-img">
        <Avatar classes={null} src={image} alt={alt} />
      </div>
      <hr className="hr-g" />
      <p>
        {text} <strong>{textBold}</strong>
      </p>
    </div>
  );
};

export default SobreCard;
