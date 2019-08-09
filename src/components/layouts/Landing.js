import React, { Fragment } from 'react';

const Landing = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>
              A revolução no <br />
              <b>desenvolvimento</b>
              <br />
              >de inovação digital.
            </h1>
            <p>
              Projeto e desenvolvimento de software prático, eficiente
              <br />e dentro do orçamento.
            </p>
            <div className="link-scroll">
              <a href="#!" className="scrolldown hvr-wobble-vertical">
                <i className="fas fa-chevron-down" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
