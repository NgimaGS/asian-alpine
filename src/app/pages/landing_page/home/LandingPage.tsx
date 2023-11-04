import { Typography, Box, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import ThemeModeContext from "../../../contexts/theme/ThemeModeContext";

const imageUrls = [
  "/assets/landing_page/img1.jpg",
  "/assets/landing_page/img2.jpg",
  "/assets/landing_page/img3.jpg",
  "/assets/landing_page/img4.jpg",
  "/assets/landing_page/img5.jpg",
  // Add more image URLs here
];

const LandingPage = () => {
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
    <div>
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
      <Box
        sx={{
          minHeight: "100vh",
          maxWidth: "100vw",
          overflowX: "hidden",
          background: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            color: "#fff",
            textAlign: "justify",
          }}
        >
          <div>
            <Typography>WELCOME TO ASIAN ALPINE TREKS</Typography>
            <Typography>Namaste and very warm welcome to our guest!</Typography>
            <Typography>
              After giving worthy time of experiences in Nepal’s field of
              trekking, we commenced to operate the trekking agency titling
              Asian AlpineTreks & Expedition P. Ltd. Formally we are recognized
              as a leading specialists for Trekking, Climbing, Expedition, Tour,
              white water rafting, Jungle safari and other adventurous
              activities operator Himalayan land of Tibet, Bhutan, India and of
              course Nepal where we are primarily based. Our head office is
              situated in Boudha, in the heart of Kathmandu in Nepal. The
              company was founded by Mr.Dawa Sherpa and Mr. Sonam Gyaljen Sherpa
              both of these individuals have more than two decades of experience
              when it comes to travel and tour related activities. Our team is
              highly skilled manpower aims to provide the best services with the
              help of high-quality modern equipment, highly trained
              Sherpa/guides/ staff and hospitable behavior.
            </Typography>
            <Typography>
              We are legally registered with the Ministry of Culture, Tourism
              and Civil Aviation under the auspices of the Government of Nepal.
              We hold membership of Trekking Agencies’ Association of Nepal
              (TAAN), Kathmandu Environment Educational Program (KEEP), Nepal
              Tourism Board (NTB) and Nepal Mountaineering Association (NMA).
            </Typography>
            <Typography>
              We believe in standard and quality service to our each and every
              guest. We have the vision and we have the passion for making your
              holiday into an experience never to be forgotten. Come join hands
              with us, explore naturally exotic locations, trek to the depths of
              Himalayas, tour luxuriously around cities We are very modestly
              expected that you would not hesitate to write us for more
              information and further details for your trip to Nepal.
            </Typography>
            <Typography>
              We are confident that new bonds of friendship will soon be
              established.
            </Typography>
            <Typography>With best regards</Typography>
            <Typography>Mr. Dawa Sherpa & Mr. Sonam Gyaljen Sherpa</Typography>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default LandingPage;
