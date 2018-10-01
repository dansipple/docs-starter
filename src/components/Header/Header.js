import React from 'react';
import { Link } from 'gatsby';

import styles from './styles.module.css';

const logo = require('../../images/ambassador-logo.svg');

const Header = ({ siteTitle }) => (
  <header
    className={styles.Header}
  >
    <div className={styles.Container}>
      <Link to="/" className={styles.LogoLink}>
        <img src={logo} alt="Ambassador Logo" className={styles.LogoImage} />
      </Link>
      <ul className={styles.NavContainer}>
        <li>
          <Link activeClassName={styles.NavLinkActive} className={styles.NavLink} to="/docs">Features</Link>
        </li>
        <li>
          <Link activeClassName={styles.NavLinkActive} className={styles.NavLink} to="/about/why-ambassador">Docs</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
