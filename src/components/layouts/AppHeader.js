import React, { Fragment } from 'react';

import Avatar from '../common/Avatar';

const AppHeader = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-md navbar-light nav-header col-md-12">
            <div className="menu-holder">
              <a href="#!">
                <Avatar
                  classes="logo"
                  src="https://i.ibb.co/mNBzXkz/logo.png"
                  alt="Concore"
                />
              </a>
            </div>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-icon">
                <Avatar src="https://i.ibb.co/fdn2xrR/hamburguer.png" alt="Menu" />
              </span>
            </button>
            <div className="navbar-collapse collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li>
                  <a className="link" href="index.html" data-link="true">
                    Home
                  </a>
                </li>
                <li>
                  <a className="link" href="sprintzero.html" data-link="false">
                    Sprint Zero
                  </a>
                </li>
                <li>
                  <a className="link" href="innovationsquad.html" data-link="false">
                    Innovation Squad
                  </a>
                </li>
                <li>
                  <a href="#!" className="link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default AppHeader;
