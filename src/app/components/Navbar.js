"use client";
import React from "react";
import {
  AppBar,
  Divider,
  Box,
  Button,
  Container,
  Toolbar,
  Paper,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "../../../public/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import i18n from "./i18n"; 


const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about-us" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Join Waitlist", id: "waitlist" },
  ];

  const [elevated, setElevated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleMenuClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setDrawerOpen(false);
  };

  const handleLoginClick = () => {
    router.push("/pages/Login");
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(243, 243, 243, 0.9)",
          backdropFilter: "blur(25px)",
          transition: "box-shadow 0.3s ease",
          boxShadow: elevated ? "0px 1px 3px rgba(0, 0, 0, 0.1)" : "none",
          padding: isMobile ? "8px 0" : "12px 0",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
            <Box display="flex" alignItems="center">
              <img src={Logo.src} alt="Logo" width="40" height="40" style={{ marginRight: "10px" }} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.4rem", sm: "2rem", md: "2.2rem" },
                  color: "#000000",
                  background: "#0077B3",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.1rem",
                }}
              >
                xBordr
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    sx={{
                      color: "text.secondary",
                      textTransform: "none",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      fontWeight: 500,
                      "&:hover": {
                        color: "text.primary",
                        background: "transparent",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                {/* <Button
                  onClick={handleLoginClick}
                  sx={{
                    color: "white",
                    backgroundColor: "primary.main",
                    textTransform: "none",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    fontWeight: 500,
                    borderRadius: "8px",
                    px: 3,
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Login
                </Button> */}
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton onClick={toggleDrawer(true)} sx={{ color: "black" }}>
                <Menu size={28} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "80%", sm: "60%", md: "40%" },
            padding: 3,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{ position: "absolute", top: 10, right: 10, color: "black" }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ textAlign: "center", py: 2, position: "relative" }}>
          <img src={Logo.src} alt="Logo" style={{ width: "120px", marginBottom: "10px" }} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              maxWidth: 300,
              borderRadius: 3,
              overflow: "hidden",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <List>
              {menuItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleMenuClick(item.id)}
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          transition: "all 0.3s",
                          "&:hover": {
                            backgroundColor: "primary.light",
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: "1.2rem",
                            fontWeight: 600,
                            textAlign: "center",
                            color: "text.primary",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </motion.div>
                  {index < menuItems.length - 1 && <Divider sx={{ my: 0.5 }} />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Box>
        {/* <Button
          onClick={handleLoginClick}
          sx={{
            color: "white",
            backgroundColor: "primary.main",
            textTransform: "none",
            fontSize: { xs: "0.9rem", md: "1rem" },
            fontWeight: 500,
            borderRadius: "8px",
            px: 3,
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          Login
        </Button> */}
      </Drawer>
    </>
  );
};

export default Hero;

