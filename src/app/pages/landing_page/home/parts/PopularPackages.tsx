import { Container, Grid, Paper, Typography } from "@mui/material";
import "./css/popularpackages.css";

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
            <Grid item xs={12} md={4}>
              <Paper
                className="service-card"
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/packages/upper-mustang.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: { xs: "300px", md: "200px" },
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{ position: "absolute", bottom: 10 }}
                >
                  <Grid item xs={12} className="service-title">
                    <Typography color="text.primary" sx={{ fontWeight: 600 }}>
                      Upper Mustang Trek
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className="service-content">
                    <Typography
                      sx={{
                        pr: "8px",
                        fontSize: "14px",
                      }}
                    >
                      Duration: 16 Days
                    </Typography>
                    <Typography
                      sx={{
                        pr: "8px",
                        fontSize: "14px",
                      }}
                    >
                      Trip Grade: Moderate
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                className="service-card"
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/packages/island-peak.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: { xs: "300px", md: "200px" },
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{ position: "absolute", bottom: 10 }}
                >
                  <Grid item xs={12} className="service-title">
                    <Typography color="text.primary" sx={{ fontWeight: 600 }}>
                      Island Peak Trek
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className="service-content">
                    <Typography
                      sx={{
                        pr: "8px",
                        fontSize: "14px",
                      }}
                    >
                      Duration: 16 Days
                    </Typography>
                    <Typography
                      sx={{
                        pr: "8px",
                        fontSize: "14px",
                      }}
                    >
                      Trip Grade: Very Strenuous
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                className="service-card"
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/packages/everest-three-pass.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: { xs: "300px", md: "200px" },
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{ position: "absolute", bottom: 10 }}
                >
                  <Grid item xs={12} className="service-title">
                    <Typography color="text.primary" sx={{ fontWeight: 600 }}>
                      Everest Three Pass Trek
                    </Typography>
                    <Typography color="text.primary" sx={{ fontWeight: 600 }}>
                      / High Pass Everest
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className="service-content">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography
                          sx={{
                            pr: "8px",
                            fontSize: "14px",
                          }}
                        >
                          Duration: 22 Days
                        </Typography>
                        <Typography
                          sx={{
                            pr: "8px",
                            fontSize: "14px",
                          }}
                        >
                          Trip Grade: Moderate
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Max Altitude</Typography>
                        <Typography>5545 Meters</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                className="service-card"
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/packages/annapurna-circuit.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: { xs: "300px", md: "200px" },
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{ position: "absolute", bottom: 10 }}
                >
                  <Grid item xs={12} className="service-title">
                    <Typography color="text.primary" sx={{ fontWeight: 600 }}>
                      Annapurna Circuit Trek
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className="service-content">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography
                          sx={{
                            pr: "8px",
                            fontSize: "14px",
                          }}
                        >
                          Duration: 21 Days
                        </Typography>
                        <Typography
                          sx={{
                            pr: "8px",
                            fontSize: "14px",
                          }}
                        >
                          Trip Grade: Moderate
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Max Altitude</Typography>
                        <Typography>5416 Meters</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                className="service-card"
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/packages/jomsom-muktinath.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: { xs: "300px", md: "200px" },
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{ position: "absolute", bottom: 10 }}
                >
                  <Grid item xs={12} className="service-title">
                    <Typography color="text.primary" sx={{ fontWeight: 600 }}>
                      Jomsom Muktinath Trek
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className="service-content">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography
                          sx={{
                            pr: "8px",
                            fontSize: "14px",
                          }}
                        >
                          Duration: 13 Days
                        </Typography>
                        <Typography
                          sx={{
                            pr: "8px",
                            fontSize: "14px",
                          }}
                        >
                          Trip Grade: Moderate
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                className="service-card"
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/packages/everest-base-camp.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: { xs: "300px", md: "200px" },
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{ position: "absolute", bottom: 10 }}
                >
                  <Grid item xs={12} className="service-title">
                    <Typography color="text.primary" sx={{ fontWeight: 600 }}>
                      Everest Base Camp Trek
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className="service-content">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography
                          sx={{
                            pr: "8px",
                            fontSize: "14px",
                          }}
                        >
                          Duration: 16 Days
                        </Typography>
                        <Typography
                          sx={{
                            pr: "8px",
                            fontSize: "14px",
                          }}
                        >
                          Trip Grade: Moderate
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Max Altitude</Typography>
                        <Typography>5500 Meters</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PopularPackages;
