import React from 'react';

import SobreUpContent from './SobreUpContent';
import Avatar from '../common/Avatar';

const SobreUp = () => {
  return (
    <div className="container">
      <div className="row" data-aos="fade-up">
        <div className="col-md-5">
          <Avatar
            classes="img-width"
            src="https://i.ibb.co/gSThfmR/img-section-about.png"
            alt="Concore"
          />
        </div>
        <div className="col-md-7">
          <SobreUpContent />
        </div>
      </div>
    </div>
  );
};

export default SobreUp;
