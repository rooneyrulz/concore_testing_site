import React, { Fragment } from 'react';

import AppFooterUp from './AppFooterUp';
import AppFooterDown from './AppFooterDown';

const AppFooter = () => {
  return (
    <Fragment>
      <AppFooterUp />
      <hr />
      <AppFooterDown />
    </Fragment>
  );
};

export default AppFooter;
