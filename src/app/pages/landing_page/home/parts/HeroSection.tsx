import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import ThemeModeContext from "../../../../contexts/theme/ThemeModeContext";

const HeroSection = () => {
  const imageUrls = [
    "/assets/landing_page/img1.jpg",
    "/assets/landing_page/img2.jpg",
    "/assets/landing_page/img3.jpg",
    "/assets/landing_page/img4.jpg",
    "/assets/landing_page/img5.jpg",
    // Add more image URLs here
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isLoading } = useContext(ThemeModeContext);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextImage();
    }, 6000);

    return () => {
      clearTimeout(timer); // Clean up the timer if the component unmounts
    };
  }, [currentImageIndex]);
  return (
    <Box
      sx={{
        height: "100vh",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.97), rgba(0, 0, 0, 0.27)), url(${imageUrls[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ overflow: "hidden", maxWidth: "100vw", maxHeight: "100vh" }}
      >
        <Box
          sx={{
            borderBottom: "3px solid white",
            padding: "32px",
            borderRadius: "25px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <motion.div
            initial={{ y: "90vh" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.5,
              delay: isLoading ? 2 : 0,
              ease: "easeInOut",
            }}
          >
            <Typography
              sx={{ fontWeight: 700, fontSize: "18px", color: "#fff" }}
            >
              EXPERIENCE meet's
            </Typography>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "42px",
                color: "#f98621",
              }}
            >
              ENJOYMENT
            </Typography>
          </motion.div>
          <motion.div
            initial={{ x: "90vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 1.8,
              delay: isLoading ? 2 : 1,
              ease: "easeInOut",
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "32px",
                color: "#fff",
              }}
            >
              ASIAN ALPINE
            </Typography>
          </motion.div>
          <Button
            variant="contained"
            sx={{
              fontSize: "24px",
              mt: 2,
              color: "#fff",
              fontWeight: 800,
              textTransform: "none",
              width: "300px",
              backgroundColor: "primary.light",
            }}
          >
            Book a Tour
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default HeroSection;
