import Loader from "../components/loader/Loader";
import Navbar from "../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const AppLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer); // Clean up the timer if the component unmounts
    };
  }, []);

  return (
    <div
      style={{
        background: "#000",
        overflow: isLoading ? "hidden" : "auto",
        width: "100vw",
        height: "100vh",
      }}
    >
      <motion.div
        className="loader-container"
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        style={{ display: isLoading ? "block" : "none" }}
      >
        <Loader />
      </motion.div>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
      >
        <Navbar>
          <></>
        </Navbar>
      </motion.div>
    </div>
  );
};
