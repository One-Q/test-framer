import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import styles from './Header.module.css';
import animations from './animations';

const HeaderSpan = ({ text, className }) => (
  <motion.span variants={animations.span} className={className}>{text}</motion.span>
);

HeaderSpan.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

HeaderSpan.defaultProps = {
  className: '',
};

const Header = () => (
  <div className={styles.header}>
    <motion.h1 className={styles.title} initial="hidden" animate="show" variants={animations.title}>
      <div className={styles.line}><HeaderSpan text="Hello," /></div>
      <div className={styles.line}>
        <HeaderSpan text="My" />
        <HeaderSpan text="name" />
        <HeaderSpan text="is" />
      </div>
      <div className={styles.line}><HeaderSpan className={styles.boldSpan} text="Quentin" /></div>
    </motion.h1>
  </div>
);

export default Header;
