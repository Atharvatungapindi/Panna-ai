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
import LogoImg from "../../assets/Images/Logo_img.jpg";
import FrameImg from "../../assets/Images/Frame.svg";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";

const Logo = ({ xs, md }) => {
  return (
    <Stack
      id="header"
      direction="row"
      className="logo"
      sx={{
        display: {
          xs: xs,
          md: md,
          flexGrow: 1,
          letterSpacing: "0.083px",
        },
        width: { xs: "50px", md: "100px" },
        height: { xs: "50px", md: "100px" },
      }}
    >
      <div
        style={{
          width: { xs: "50px", md: "80px" },
          height: { xs: "50px", md: "80px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={LogoImg}
          sx={{
            width: { xs: "45px", md: "90px" },
            height: { xs: "45px", md: "90px" },
            borderRadius: { xs: "35px", md: "50px" },
          }}
        />
      </div>
    </Stack>
  );
};

const Header = () => {
  const { setMainHeight } = useContext(AppContext);
  const headerRef = useRef(null);

  useEffect(() => {
    const updateMainHeight = () => {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const viewportHeight = window.innerHeight;
      setMainHeight(viewportHeight - headerHeight);
    };

    // Calculate height on mount and on window resize
    updateMainHeight();
    window.addEventListener("resize", updateMainHeight);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateMainHeight);
  }, []);

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
      sx={{ bgcolor: "#F6F8F9", padding: { xs: "0 20px", md: "0 50px" } }}
      elevation={0}
      ref={headerRef}
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
        <Stack
          direction="row"
          sx={{ gap: "1rem", display: "flex", alignItems: "center" }}
        >
          <Box
            component="img"
            src={FrameImg}
            sx={{
              height: { xs: "50px", md: "50px" },
              width: { xs: "30px", md: "30px" },
            }}
          />
          <Button
            sx={{
              background: "#203B44",
              borderRadius: { xs: "10px", md: "20px" },
              font: {
                xs: "normal 600 10px/normal OpenSans",
                sm: "normal 600 12px/normal OpenSans",
                md: "normal 600 14px/normal OpenSans",
                lg: "normal 600 14px/normal OpenSans",
              },
              color: "#fff",
              height: { xs: "40px", md: "50px" },
              width: { xs: "100px", md: "188px" },
              overflow: "hidden",
              textTransform: "none",
            }}
          >
            Request a demo
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
