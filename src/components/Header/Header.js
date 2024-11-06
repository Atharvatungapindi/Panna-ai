import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoImg from "../../assets/Images/Logo.png";
import FrameImg from "../../assets/Images/Frame.svg";
import React from "react";

const Logo = ({ xs, md }) => {
  return (
    <Stack
      direction="row"
      className="logo"
      sx={{
        display: {
          xs: xs,
          md: md,
          flexGrow: 1,
          letterSpacing: "0.083px",
        },
      }}
    >
      <Box component="img" src={LogoImg} />
    </Stack>
  );
};

const Header = () => {
  const btnStyle = {
    textTransform: "none",
    font: "normal 500 14px/normal 'Inter'",
    color: "19467E",
    letterSpacing: "0.168px",
    borderRadius: "30px",
    border: "1px solid #19467E",
    height: { md: "40px", lg: "56px" },
    width: { md: "90px", lg: "124px" },
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const headerItems = [
    "Home",
    "Product",
    "AI Solutions",
    "About Us",
    "News & Insights",
  ];
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#F6F8F9", padding: "0 50px" }}
      elevation={0}
    >
      <Toolbar disableGutters>
        <Logo xs="none" md="flex" />
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="#595959"
            sx={{ padding: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {headerItems.map((item) => (
              <MenuItem key={item} onClick={() => handleCloseNavMenu(item)}>
                <Typography className="item_text" sx={{ textAlign: "center" }}>
                  {item}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Logo xs="flex" md="none" />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            gap: { md: "0.5rem", lg: "1rem", xl: "1rem" },
          }}
        >
          {headerItems.map((item) => (
            <Button
              key={item}
              onClick={() => handleCloseNavMenu(item)}
              sx={{
                my: 2,
                display: "block",
                color: "#595959 ",
                font: {
                  md: 'normal 400 18px / normal "OpenSans"',
                  lg: 'normal 400 18px / normal "OpenSans"',
                  xl: 'normal 400 23px / normal "OpenSans"',
                },
                textTransform: "none",
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
        <Stack direction="row" sx={{ gap: "1rem" }}>
          <Box component="img" src={FrameImg} />
          <Button
            sx={{ ...btnStyle, background: "#054BB4" }}
            variant="contained"
          >
            Sign up
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
