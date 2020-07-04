/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Menu.module.css';
import animations from './animations';

const Path = (props) => (
  <motion.path
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const MenuItem = ({ link, text }) => (
  <motion.li variants={animations.menuItem} className={styles.menuItem} whileHover="hover">
    <a href={link}>{text}</a>
    <motion.span variants={animations.menuItemSpan} className={styles.underline} />
  </motion.li>
);

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <button onClick={toggleIsOpen} type="button" aria-label="Menu open/close" className={styles.toggleButton}>
        <motion.svg height="18px" viewBox="0 0 23 18" width="23px" initial={false} animate={isOpen ? 'open' : 'closed'}>
          <Path variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <Path variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul initial="hidden" animate="show" exit="hidden" variants={animations.menu} className={styles.menuList}>
            <MenuItem link="https://www.google.com" text="Google" />
            <MenuItem link="https://www.google.com" text="Twitter" />
            <MenuItem link="https://www.google.com" text="Facebook" />
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
