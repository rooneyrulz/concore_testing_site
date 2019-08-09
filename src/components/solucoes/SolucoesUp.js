import React from 'react';

import SolucoesCard from './SolucoesCard';
import SolucoesUpHeader from './SolucoesUpHeader';

const SolucoesUp = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center" data-aos="fade-up">
          <SolucoesUpHeader />
        </div>
        <div className="col-md-12">
          <a href="sprintzero.html">
            <div className="bg-sprint" data-aos="fade-left">
              <SolucoesCard
                image="https://i.ibb.co/8PpHxQQ/logo-sprint-zero.png"
                alt="Sprint zero"
                text="Comece transformando a sua ideia em um projeto de software
                    completo e com protótipo navegável."
              />
            </div>
          </a>
          <a href="innovationsquad.html">
            <div className="bg-innovation" data-aos="fade-right">
              <SolucoesCard
                image="https://i.ibb.co/fpWvVKS/logo-innovationsquad.png"
                alt="Innovation squad"
                text="Tenha a disposição uma equipe sênior para projeto e
                    desenvolvimento do seu software."
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SolucoesUp;
