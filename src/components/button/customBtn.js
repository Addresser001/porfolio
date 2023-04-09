import './styles.scss';
import { motion } from 'framer-motion';

const Button = ({
  className,
  text,
  initial,
  duration,
  type,
  stiffness,
  animate,
  delay,
  onClick,
  btnType = 'button',
}) => {
  const containerVariants = {
    hidden: { x: initial },
    visible: {
      x: animate,
      transition: {
        duration: duration,
        delay: delay,
        type: type,
        stiffness: stiffness,
      },
    },

    hover: {
      scale: 1.1,

      transition: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  };
  return (
    <motion.button
      className={`btn ${className}`}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      whileHover='hover'
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
