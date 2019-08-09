import React from 'react';

import AppFooterIcons from './AppFooterIcons';
import AppFooterNewletter from './AppFooterNewletter';
import AppFooterContact from './AppFooterContact';

const AppFooterUp = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 text-center">
          <AppFooterIcons />
        </div>
        <div className="col-md-4 offset-md-1">
          <AppFooterNewletter />
        </div>
        <div className="col-md-4 text-center-mobile">
          <AppFooterContact />
        </div>
      </div>
    </div>
  );
};

export default AppFooterUp;
