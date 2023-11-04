import { Outlet } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import * as React from "react";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 100 : 0,
  });
}

const Navbar = (props: Props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const backgroundColor = trigger ? "#000" : "transparent";

  return (
    <div>
      <ElevationScroll {...props}>
        <AppBar sx={{ background: backgroundColor }}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src="/assets/logo/logo.png"
              alt="logo"
              style={{ width: "120px" }}
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
              <Typography component="div">Contact Us</Typography>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default Navbar;
