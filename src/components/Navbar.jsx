import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Switch,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MdMenu } from "react-icons/md";


const navigation = {
  pages:[
    { name: "HOME", href: "/Loan-calculator" },
    { name: "EXCHANGE RATE (API)", href: "/Loan-calculator/Exchange_Rate_Live" },
    { name: "ABOUT", href: "/Loan-calculator/about" },
    { name: "ERROR PAGE", href: "/Loan-calculator/Error_Page" },
  ],
}


function Navbar({ darkMode, setDarkMode }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   document.body.style.backgroundColor = !darkMode ? "#121212" : "#fff";
  //   document.body.style.color = !darkMode ? "#fff" : "#000";
  // };
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

  return (
    <AppBar position="static" sx={{
      backgroundColor: darkMode ? "#272727" : "#1976d2",
      color: "#ffffff"
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for large screens */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Arial",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Loan Calculator
          </Typography>

          {/* Mobile menu icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MdMenu />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navigation.pages.map((page) => (
                <MenuItem key={page.name} href={page.href} component="a" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 0,
              fontFamily: "Arial",
              fontSize:"1.3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Loan Calculator
          </Typography>

          {/* Main navigation links */}
          <Box sx={{ gap:3, display: { xs: "none", md: "flex" }, alignItems: "center", ml: "auto" }}>
            {navigation.pages.map((page) => (
              
              <Button
                key={page.name}
                href={page.href}
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Dark mode toggle button */}
          <FormControlLabel
            onClick={toggleDarkMode}
            color="inherit"
            control={<Switch />}
            sx={{ml:2}}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;


