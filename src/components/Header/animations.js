const animations = {
  title: {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 1,
    },
  },
  span: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  },
};

export default animations;
