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
      y: 85,
    },
    show: {
      y: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  },
};

export default animations;
