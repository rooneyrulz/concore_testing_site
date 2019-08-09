import React from 'react';

import SobreCard from './SobreCard';
import SobreDownHeader from './SobreDownHeader';

const SobreDown = () => {
  return (
    <div className="container">
      <div className="row" data-aos="fade-up">
        <div className="col-md-12 text-center" data-aos="fade-down">
          <SobreDownHeader />
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <SobreCard
            image="https://i.ibb.co/8PmrT6f/4x.png"
            alt="4x mais rápido"
            text="Tecnologia própria que nos permite desenvolver de forma mais
              eficiente e rápida,"
            textBold="economizando preciosos recursos."
          />
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <SobreCard
            image="https://i.ibb.co/FWYQbYc/squad.png"
            alt="Squad de inovação"
            text="Nossa equipe respira tecnologia e inovação há mais de 10 anos,"
            textBold="gerando soluções assertivas e práticas."
          />
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <SobreCard
            image="https://i.ibb.co/GxtsCRc/datadriven.png"
            alt="Data driven"
            text="Criamos estimativas técnicas com base em dados científicos,"
            textBold="gerando assertividade."
          />
        </div>
      </div>
    </div>
  );
};

export default SobreDown;
