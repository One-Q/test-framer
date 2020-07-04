const animations = {
  menu: {
    show: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: { when: 'afterChildren', staggerChildren: 0.1, staggerDirection: -1 },
    },
  },
  menuItem: {
    show: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  },
  menuItemSpan: {
    show: {
      width: 0,
    },
    hidden: {
      width: 0,
    },
    hover: {
      width: '100%',
    },
  },
};

export default animations;
