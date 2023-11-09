import { Container, Grid, Paper, Typography } from "@mui/material";

const PopularPackages = () => {
  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            fontSize="26px"
            fontWeight={700}
            sx={{ borderBottom: "5px solid orange", width: "290px" }}
          >
            POPULAR PACKAGES
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <Paper sx={{ width: "100%" }}>
                <Typography>Upper Mustang Trek</Typography>
                <Typography>Duration: 16 Days</Typography>
                <Typography>Trip Grade: Moderate</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={4}>
              <Paper sx={{ width: "100%" }}>
                <Typography>Island Peak Trek</Typography>
                <Typography>Duration: 16 Days</Typography>
                <Typography>Trip Grade: Very Strenuous</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={4}>
              <Paper sx={{ width: "100%" }}>
                <Typography>
                  Everest Three Pass Trek /<br /> High Pass Everest
                </Typography>
                <Typography>Duration: 22 Days</Typography>
                <Typography>Trip Grade: Moderate</Typography>
                <Typography>Max Altitude</Typography>
                <Typography>5545 Meters</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={4}>
              <Paper sx={{ width: "100%" }}>
                <Typography>Annapurna Circuit Trek</Typography>
                <Typography>Duration: 22 Days</Typography>
                <Typography>Trip Grade: Moderate</Typography>
                <Typography>Max Altitude</Typography>
                <Typography>5545 Meters</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={4}>
              <Paper sx={{ width: "100%" }}>
                <Typography>Jomsom Muktinath Trek</Typography>
                <Typography>Duration: 22 Days</Typography>
                <Typography>Trip Grade: Moderate</Typography>
                <Typography>Max Altitude</Typography>
                <Typography>5545 Meters</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={4}>
              <Paper sx={{ width: "100%" }}>
                <Typography>Everest Base Camp Trek</Typography>
                <Typography>Duration: 22 Days</Typography>
                <Typography>Trip Grade: Moderate</Typography>
                <Typography>Max Altitude</Typography>
                <Typography>5545 Meters</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PopularPackages;
