import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div style={{ display: "flex" }}>
      <motion.svg
        width="500"
        viewBox="0 0 710 346"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M1 312.232L263.5 132.507L318.5 187.12L148.5 345L520 78L709 235.278"
          stroke="white"
          fill=""
          stroke-width="2"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M1.5 312.5L264.5 73.5L339.5 175L531 3L708.5 235.5"
          stroke="white"
          stroke-width="3"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: 1.5,
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Loader;
