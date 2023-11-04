import { Outlet } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src="/assets/logo/logo.png"
            alt="logo"
            style={{ width: "70px" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              maxWidth: "500px",
              width: "100%",
            }}
          >
            <Typography component="div">Home</Typography>
            <Typography component="div">About Us</Typography>
            <Typography component="div">Destination</Typography>
            <Typography component="div">Activity</Typography>
            {/* <Typography component="div">Day Tour</Typography>
            <Typography component="div">Nepal Travel Info</Typography> */}
            {/* <Typography component="div">Gallery</Typography>
            <Typography component="div">Blog</Typography>
            <Typography component="div">Review</Typography> */}
            <Typography component="div">Contact Us</Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default Navbar;
