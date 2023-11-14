import { Button, Container, Grid, Paper, Typography, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Featured = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box sx={{ backgroundColor: "#000", pt: "68px" }}>
      <Container sx={{ mb: "64px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", mt: "32px" }}
          >
            <Typography
              fontSize="32px"
              fontWeight={700}
              sx={{
                borderBottom: "5px solid orange",
                width: "370px",
                color: "#fff",
              }}
            >
              FEATURED PACKAGES
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: "64px", mb: "64px" }}>
            <Carousel
              ssr
              partialVisbile
              deviceType={"desktop"}
              itemClass="image-item"
              responsive={responsive}
            >
              <Paper
                elevation={600}
                sx={{ m: "8px", p: "16px", height: "300px" }}
              >
                <Typography color="#fff" textAlign="center">
                  Mountain Biking
                </Typography>
                <Button fullWidth> Read More</Button>
              </Paper>
              <Paper
                elevation={600}
                sx={{ m: "8px", p: "16px", height: "300px" }}
              >
                <Typography color="#fff" textAlign="center">
                  Langtang Gosaikunda Trek
                </Typography>
                <Button fullWidth> Read More</Button>
              </Paper>
              <Paper
                elevation={600}
                sx={{ m: "8px", p: "16px", height: "300px" }}
              >
                <Typography color="#fff" textAlign="center">
                  Langtang Ganja - La Pass
                </Typography>
                <Button fullWidth> Read More</Button>
              </Paper>
              <Paper
                elevation={600}
                sx={{ m: "8px", p: "16px", height: "300px" }}
              >
                <Typography color="#fff" textAlign="center">
                  Kathmandu-Nagarkot-Dhulikhel-Pokhara-Chitwan
                </Typography>
                <Button fullWidth> Read More</Button>
              </Paper>
              <Paper
                elevation={600}
                sx={{ m: "8px", p: "16px", height: "300px" }}
              >
                <Typography color="#fff" textAlign="center">
                  Jiri Everest Base Camp Trek
                </Typography>
                <Button fullWidth> Read More</Button>
              </Paper>
              <Paper
                elevation={600}
                sx={{ m: "8px", p: "16px", height: "300px" }}
              >
                <Typography color="#fff" textAlign="center">
                  Gorkha Heritage Trek
                </Typography>
                <Button fullWidth> Read More</Button>
              </Paper>
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Featured;
