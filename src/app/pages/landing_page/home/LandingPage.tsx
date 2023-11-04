import { Typography, Box, Container } from "@mui/material";

const LandingPage = () => {
  return (
    <div>
      <Box
        sx={{
          height: { xs: "100vh", md: "100vh" },
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.97), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/img2.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Typography sx={{ fontWeight: 700, fontSize: "18px", color: "#fff" }}>
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
        </div>
      </Box>
      <Box
        sx={{
          height: "100vh",
          maxWidth: "100vw",
          overflowX: "hidden",
          background: "#000",
          paddingTop: "64px",
        }}
      >
        <Container sx={{ color: "#fff", textAlign: "justify" }}>
          <Typography>WELCOME TO ASIAN ALPINE TREKS</Typography>
          <Typography>Namaste and very warm welcome to our guest!</Typography>
          <Typography>
            After giving worthy time of experiences in Nepal’s field of
            trekking, we commenced to operate the trekking agency titling Asian
            AlpineTreks & Expedition P. Ltd. Formally we are recognized as a
            leading specialists for Trekking, Climbing, Expedition, Tour, white
            water rafting, Jungle safari and other adventurous activities
            operator Himalayan land of Tibet, Bhutan, India and of course Nepal
            where we are primarily based. Our head office is situated in Boudha,
            in the heart of Kathmandu in Nepal. The company was founded by
            Mr.Dawa Sherpa and Mr. Sonam Gyaljen Sherpa both of these
            individuals have more than two decades of experience when it comes
            to travel and tour related activities. Our team is highly skilled
            manpower aims to provide the best services with the help of
            high-quality modern equipment, highly trained Sherpa/guides/ staff
            and hospitable behavior.
          </Typography>
          <Typography>
            We are legally registered with the Ministry of Culture, Tourism and
            Civil Aviation under the auspices of the Government of Nepal. We
            hold membership of Trekking Agencies’ Association of Nepal (TAAN),
            Kathmandu Environment Educational Program (KEEP), Nepal Tourism
            Board (NTB) and Nepal Mountaineering Association (NMA).
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
        </Container>
      </Box>
    </div>
  );
};

export default LandingPage;
