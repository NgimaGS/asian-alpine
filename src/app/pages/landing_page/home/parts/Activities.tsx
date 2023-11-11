import { Button, Container, Grid, Paper, Typography } from "@mui/material";

const Activities = () => {
  return (
    <Container sx={{ pb: "128px" }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography
            fontSize="26px"
            fontWeight={700}
            sx={{ borderBottom: "5px solid orange", width: "250px" }}
          >
            OTHER ACTIVITIES
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container sx={{ cursor: "pointer" }}>
            <Grid
              item
              xs={12}
              md={2.4}
              sx={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/activities/ultra-light-flight.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "64px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#fff" }}>ULTRA LIGHT FLIGHT</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={2.4}
              sx={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/activities/biking.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "64px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#fff" }}>MOUNTAIN BIKING</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={2.4}
              sx={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/activities/mountain-flight.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "64px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#fff" }}>MOUNTAIN FLIGHT</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={2.4}
              sx={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/activities/paragliding.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "64px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#fff" }}>PARAGLIDING</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={2.4}
              sx={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/activities/jungle-safari.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "64px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#fff" }}>JUNGLE SAFARI</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Grid container>
                <Grid item xs={12}>
                  <img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "250px",
                    }}
                    src="/assets/landing_page/activities/trekking.jpg"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Paper sx={{ padding: "32px" }}>
                    <Typography textAlign={"center"}>Trekking</Typography>
                    <Typography>
                      WELCOME TO TREKS IN NEPAL Welcome to Asian Alpine treks&
                      expedition! Formally we are recogniz...
                    </Typography>
                    <Button fullWidth sx={{ mt: "16px" }}>
                      Read More
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container>
                <Grid item xs={12}>
                  <Paper sx={{ padding: "32px" }}>
                    <Typography textAlign={"center"}>
                      Peak & Expedition
                    </Typography>
                    <Typography>
                      Peak Climbing in Nepal is great view of Himalayas and most
                      various geological regions in asia. Climb...
                    </Typography>
                    <Button fullWidth sx={{ mt: "16px" }}>
                      Read More
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "250px",
                    }}
                    src="/assets/landing_page/activities/peak-and-expedition.jpg"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container>
                <Grid item xs={12}>
                  <img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "250px",
                    }}
                    src="/assets/landing_page/activities/tour.jpg"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Paper sx={{ padding: "32px" }}>
                    <Typography textAlign={"center"}>Tour</Typography>
                    <Typography>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring whi...
                    </Typography>
                    <Button fullWidth sx={{ mt: "16px" }}>
                      Read More
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Activities;
