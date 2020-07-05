import React from 'react';
import { motion } from 'framer-motion';

import styles from './Header.module.css';
import animations from './animations';

const HeaderSpan = ({ text }) => (
  <motion.span variants={animations.span}>{text}</motion.span>
);

const Header = () => (
  <div className={styles.header}>
    <motion.h1 className={styles.line} initial="hidden" animate="show" variants={animations.title}>
      <div className={styles.line}><HeaderSpan text="Hello," /></div>
      <div className={styles.line}>
        <HeaderSpan text="My" />
        <HeaderSpan text="name" />
        <HeaderSpan text="is" />
      </div>
      <div className={styles.line}><HeaderSpan text="Quentin" /></div>
    </motion.h1>
  </div>
);

export default Header;
