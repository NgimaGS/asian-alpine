import Loader from "../components/loader/Loader";
import Navbar from "../components/navbar/Navbar";
import { useContext } from "react";
import { motion } from "framer-motion";

import ThemeModeContext from "../contexts/theme/ThemeModeContext";
import Footer from "../components/footer/Footer";

export const AppLayout = () => {
  const { isLoading } = useContext(ThemeModeContext);

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
        <Footer />
      </div>
    </div>
  );
};
