import React from 'react';
import { Fade } from 'react-reveal';
import styles from './Header3.module.scss';

const Header = ({ children }) => (
  <div className={styles.header}>
    <Fade down tag="h1">
      {children}
    </Fade>
  </div>
);

export default Header;
