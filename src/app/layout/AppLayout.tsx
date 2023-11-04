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
    }, 2500);

    return () => {
      clearTimeout(timer); // Clean up the timer if the component unmounts
    };
  }, []);

  return (
    <div
      style={{
        background: "#000",
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
      <div style={{ display: isLoading ? "none" : "inherit" }}>
        <Navbar>
          <></>
        </Navbar>
      </div>
    </div>
  );
};
