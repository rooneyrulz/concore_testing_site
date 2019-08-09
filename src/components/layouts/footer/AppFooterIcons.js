import React, { Fragment } from 'react';

import Avatar from '../../common/Avatar';

const AppFooterIcons = () => (
  <Fragment>
    <Avatar
      src="https://i.ibb.co/TwmbBYF/logo-footer.png"
      alt="Logo Concore"
    />
    <ul>
      <li>
        <a href="https://www.facebook.com/concore.io/" target="_blank">
          <Avatar
            src="https://i.ibb.co/jr84Tb7/facebook.png"
            alt="Facebook Concore"
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/concore.io/" target="_blank">
          <Avatar
            src="https://i.ibb.co/FbXYT8S/linkedin.png"
            alt="Linkedin Concore"
          />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/concore.oficial/" target="_blank">
          <Avatar
            src="https://i.ibb.co/hdV4yHx/instagram.png"
            alt="Instagram Concore"
          />
        </a>
      </li>
    </ul>
  </Fragment>
);

export default AppFooterIcons;
