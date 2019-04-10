import React from 'react';
import { Link } from '@reach/router';

const Footer = () => (
  <footer className="footer">
    <div className="contain-width footer-container">
      <div className="footer-links">
        <Link
          to="/terms-and-conditions"
          href="/terms-and-conditions"
          className="footer-link"
        >
          Terms & Conditions
        </Link>
        <Link
          to="/privacy-policy"
          href="/privacy-policy"
          className="footer-link"
        >
          Privacy Policy
        </Link>
      </div>

      <span className="footer-byline">
        Made by{' '}
        <a
          href="http://neilspurgeon.com/"
          target="_blank"
          className="footer-link footer-external-link"
        >
          Neil Spurgeon
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
