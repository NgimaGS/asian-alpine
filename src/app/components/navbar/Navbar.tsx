import { Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
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
    threshold: 700,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 700 : 0,
  });
}

const drawerWidth = 240;
const navItems = [
  { label: "Home", value: "/" },
  { label: "About Us", value: "/about-us" },
  { label: "Destination", value: "/destination" },
  { label: "Activity", value: "/activity" },
  { label: "Contact Us", value: "/contact-us" },
];

const Navbar = (props: Props) => {
  const { window } = props;
  const navigate = useNavigate();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 700,
  });

  const backgroundColor = trigger ? "#000" : "transparent";
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src="/assets/logo/logo.png" alt="logo" style={{ width: "120px" }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(item.value)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <ElevationScroll {...props}>
        <AppBar sx={{ background: backgroundColor, pb: 1 }}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ pr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src="/assets/logo/logo.png"
              alt="logo"
              style={{ width: "120px" }}
            />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                maxWidth: "700px",
                width: "100%",
              }}
            >
              <List
                sx={{
                  display: { xs: "none", md: "flex" },
                  width: "100%",
                }}
              >
                {navItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton
                      sx={{ textAlign: "center" }}
                      onClick={() => navigate(item.value)}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default Navbar;
