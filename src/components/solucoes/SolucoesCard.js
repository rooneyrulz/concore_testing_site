import React from 'react';

import Avatar from '../common/Avatar';

const SolucoesCard = ({ image, alt, text }) => (
  <div className="row">
    <div className="col-md-5 text-center">
      <div className="img-solucoes">
        <Avatar
          src="https://i.ibb.co/8PpHxQQ/logo-sprint-zero.png"
          alt="Sprint zero"
        />
      </div>
    </div>
    <div className="col-md-7">
      <h3>{text}</h3>
      <div className="link-area">
        <span className="a-style hvr-wobble-vertical">Saiba mais</span>
      </div>
    </div>
  </div>
);

export default SolucoesCard;
