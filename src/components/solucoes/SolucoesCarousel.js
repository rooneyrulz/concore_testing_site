import React, { Fragment } from 'react';

import CarouselItem from './CarouselItem';

const SolucoesCrousel = () => (
  <div
    id="carouselConcore"
    className="carousel slide"
    data-ride="carousel"
    data-interval="10000"
  >
    <div className="carousel-inner">
      <Fragment>
        <CarouselItem
          image="https://i.ibb.co/2Ykg2yD/case-ingresse.png"
          alt="Concore"
          classes="active"
          header="Cliente: Ingresse S.A"
          subHeader="Diminuinos o tempo de repasses financeiros de horas para minutos."
          text="Nós projetamos em conjunto com o setor financeiro da Ingresse uma
              ferramenta de solicitação e gestão de repasses financeiros. O
              processo de repasse era realizado por planilhas, o que resultava
              em eventuais erros, perdas e dificuldade de gestão em grande
              volume."
        />
      </Fragment>
      <Fragment>
        <CarouselItem
          image="assets/images/home/case-ingresse.png"
          alt="Concore"
          header="Cliente: Ingresse S.A"
          subHeader="Diminuinos o tempo de repasses financeiros de horas para minutos."
          text="Nós projetamos em conjunto com o setor financeiro da Ingresse uma
              ferramenta de solicitação e gestão de repasses financeiros. O
              processo de repasse era realizado por planilhas, o que resultava
              em eventuais erros, perdas e dificuldade de gestão em grande
              volume."
        />
      </Fragment>
    </div>
    <a
      className="carousel-control-prev car-control"
      href="#carouselConcore"
      role="button"
      data-slide="prev"
    >
      <i className="fas fa-chevron-left" />
    </a>
    <a
      className="carousel-control-next car-control"
      href="#carouselConcore"
      role="button"
      data-slide="next"
    >
      <i className="fas fa-chevron-right" />
    </a>
  </div>
);

export default SolucoesCrousel;
