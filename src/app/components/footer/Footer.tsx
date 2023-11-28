import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <Container sx={{ pt: "16px", pb: "16px" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img
                  src="/assets/logo/logo.png"
                  alt="logo"
                  style={{ width: "180px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">Contact Us</Typography>
              </Grid>
              <Grid item xs={12}>
                Boudha, Kathmandu
              </Grid>
              <Grid item xs={12}>
                Phone: +977-014915745, +977-9851063728
              </Grid>
              <Grid item xs={12}>
                Email: asianalpinetrekking@gmail.com
              </Grid>
              <Grid item xs={12}>
                Follow us on
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h5">Quick Link</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Home</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Nepal</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Blog</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Review</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Contact Us</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h5">Activities</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Bungee Jumping</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Jungle Safari</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Paragliding</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Rafting</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Rock Climbing Us</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>We Accept</Typography>
              </Grid>
              <Grid item xs={12}>
                <img
                  src="/assets/logo/logo.png"
                  alt="logo"
                  style={{ width: "60px" }}
                />
                <img
                  src="/assets/logo/logo.png"
                  alt="logo"
                  style={{ width: "60px" }}
                />
                <img
                  src="/assets/logo/logo.png"
                  alt="logo"
                  style={{ width: "60px" }}
                />
                <img
                  src="/assets/logo/logo.png"
                  alt="logo"
                  style={{ width: "60px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>Affilation</Typography>
              </Grid>
              <Grid item xs={12}>
                <img
                  src="/assets/logo/logo.png"
                  alt="logo"
                  style={{ width: "60px" }}
                />
                <img
                  src="/assets/logo/logo.png"
                  alt="logo"
                  style={{ width: "60px" }}
                />
                <img
                  src="/assets/logo/logo.png"
                  alt="logo"
                  style={{ width: "60px" }}
                />
                <img
                  src="/assets/logo/logo.png"
                  alt="logo"
                  style={{ width: "60px" }}
                />
                <img
                  src="/assets/logo/logo.png"
                  alt="logo"
                  style={{ width: "60px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
