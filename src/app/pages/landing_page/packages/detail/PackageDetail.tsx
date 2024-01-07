import { Box, Button, Divider, Grid, Typography } from "@mui/material";

const PackageDetail = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "black" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.27)), url(/assets/landing_page/packages/everest-base-camp.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ color: "white", pt: "100px", pl: "32px" }}
              variant="h2"
            >
              EVEREST BASE CAMP TREK
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ pt: "100px", pl: "16px", pr: "16px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: "white" }}>
                  Duration: 10 Days
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: "white" }}>Grade: Moderate</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: "white" }}>
                  Maximum Elevation: 5,545m / 18.192ft
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: "white" }}>
                  Seasons: All Year
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ color: "white" }}>Overview:</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ color: "white", textAlign: "justify" }}>
                  Everest Base Camp is the most famous trekking destination in
                  the world and journey of a lifetime, for those whose dreams
                  soar higher than even the clouds. Our 16 Days Everest Base
                  Camp Trekking treads the same trail that Hillary and Sherpa
                  walked while conquering the Everest back in 1953. With eight
                  of the world’s ten highest peaks, Nepal is loaded with
                  spectacular mountains vistas. The Nepal Everest Base Camp
                  trekking is justifiably famous, not only for its proximity to
                  the world’s highest mountain but also for its friendly Sherpa
                  people, picturesque villages, great variety of cultures and
                  traditions, Start festivals and monasteries. The Sagarmatha
                  National Park is rich with flora and fauna, but the existence
                  of the yeti remains a mystery. EBC trek is popular for all the
                  physical fitness people. Everest Base Camp trekking is best in
                  the spring and autumn season. Starting from March to May and
                  September to December is most popular time to visit.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ color: "white" }} variant="h4">
                  ITENARY:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" fullWidth>
                  Download Itenary
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" color="white">
                GALLERY
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" color="white">
                RELATED BLOGS
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  p: "32px",
                  m: "8px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6} md={4}></Grid>
                  <Grid item xs={6} md={8}>
                    <Typography color="white">
                      Everest Base Camp Trek – 15 Days
                    </Typography>
                    <Typography color="white" variant="subtitle1">
                      The Everest Base Camp Trek is one of the most famous
                      trekking adventures in...
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  p: "32px",
                  m: "8px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6} md={4}></Grid>
                  <Grid item xs={6} md={8}>
                    <Typography color="white">
                      Everest Base Camp Trek – 15 Days
                    </Typography>
                    <Typography color="white" variant="subtitle1">
                      The Everest Base Camp Trek is one of the most famous
                      trekking adventures in...
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  p: "32px",
                  m: "8px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6} md={4}></Grid>
                  <Grid item xs={6} md={8}>
                    <Typography color="white">
                      Everest Base Camp Trek – 15 Days
                    </Typography>
                    <Typography color="white" variant="subtitle1">
                      The Everest Base Camp Trek is one of the most famous
                      trekking adventures in...
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PackageDetail;
