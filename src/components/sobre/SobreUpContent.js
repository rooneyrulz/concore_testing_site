import React, { Fragment } from 'react';

import Avatar from '../common/Avatar';

const SobreUpContent = () => {
  return (
    <Fragment>
      <h2>
        Grande parte dos projetos de software falham em custo, prazo
        <br />
        ou valor entregue.
      </h2>
      <Avatar
        classes="divider1"
        src="https://i.ibb.co/wCJj8hV/divider-gradient.png"
        alt="Gradient divider"
      />
      <p>
        A Concore surgiu com a missão de descomplicar o desenvolvimento de
        software e tornar a inovação tecnológica acessível para todas as
        empresas.
      </p>
      <p>
        <b>
          Nós criamos a plataforma que permite desenvolver softwares
          customizados à uma fração do tempo tradicional.
        </b>
      </p>
      <p>
        Nossa ferramenta, aliada ao nosso time especialista em inovação, nos
        permite criar soluções em projetos de softwares que atendem fielmente as
        regras do seu negócio.
      </p>
    </Fragment>
  );
};

export default SobreUpContent;
