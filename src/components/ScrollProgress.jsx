const ScrollProgress = ({ progress }) => {
  return (
    <motion.div
      id="scroll-progress"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollProgress;