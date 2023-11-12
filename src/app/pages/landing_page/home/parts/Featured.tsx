import { Button, Container, Grid, Paper, Typography, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Featured = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
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
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
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
          <Grid item xs={12}>
            <Carousel responsive={responsive}>
              <Paper sx={{ m: "8px", p: "16px", height: "300px" }}>
                <Typography color="#fff">Mountain Biking</Typography>
                <Button fullWidth> Read More</Button>
              </Paper>
              <Paper sx={{ m: "8px", p: "16px", height: "300px" }}>
                <Typography color="#fff">Langtang Gosaikunda Trek</Typography>
                <Button fullWidth> Read More</Button>
              </Paper>
              <Paper sx={{ m: "8px", p: "16px", height: "300px" }}>
                <Typography color="#fff">Langtang Ganja - La Pass</Typography>
                <Button fullWidth> Read More</Button>
              </Paper>
              <Paper sx={{ m: "8px", p: "16px", height: "300px" }}>
                <Typography color="#fff">
                  Kathmandu-Nagarkot-Dhulikhel-Pokhara-Chitwan
                </Typography>
                <Button fullWidth> Read More</Button>
              </Paper>
              <Paper sx={{ m: "8px", p: "16px", height: "300px" }}>
                <Typography color="#fff">
                  Jiri Everest Base Camp Trek
                </Typography>
                <Button fullWidth> Read More</Button>
              </Paper>
              <Paper sx={{ m: "8px", p: "16px", height: "300px" }}>
                <Typography color="#fff">Gorkha Heritage Trek</Typography>
              </Paper>
              <Button fullWidth> Read More</Button>
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Featured;
