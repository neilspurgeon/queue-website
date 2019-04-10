import React from 'react';
import buttonText from './img/ios-button-text.svg';

const DownloadButtonIOS = () => (
  <a
    className="Download-button-ios"
    href="google.com"
    style={{ backgroundImage: `url(${buttonText})` }}
  >
    <span className="download-button-text">Download on the App Store</span>
  </a>
);

export default DownloadButtonIOS;
