import React from 'react';

import SolucoesCarousel from './SolucoesCarousel';
import SolucoesDownHeader from './SolucoesDownHeader';

const SolucoesDown = () => {
  return (
    <div className="slider-concore" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <SolucoesDownHeader />
          </div>
          <div className="col-md-12">
            <SolucoesCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolucoesDown;
