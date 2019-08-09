import React, { Fragment } from 'react';

const AppFooterNewsletter = () => (
  <Fragment>
    <h5>Assine nossa newsletter</h5>
    <form className="form-style">
      <div className="form-group">
        <input
          required
          type="text"
          placeholder="Nome:"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          required
          type="text"
          placeholder="E-mail:"
          className="form-control"
        />
      </div>
      <div className="button-area">
        <button type="submit">Enviar</button>
      </div>
    </form>
  </Fragment>
);

export default AppFooterNewsletter;
