import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false); // Close mobile drawer after clicking a menu item
  };

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  const navItems = [
    { label: "Home", id: "Home" },
    { label: "Inventory", id: "inventory" },
    { label: "Purchase", id: "Purchase" },
    { label: "Growth Plan", id: "growth" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isScrolled ? "#7a4dff" : "#473077",
        boxShadow: "none",
        padding: isScrolled ? "10px 30px" : "30px 30px",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}
        >
          <img
            src="/logo.png"
            alt="DemandHives"
            style={{ height: "30px", marginRight: "10px" }}
          />
          DemandHives
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={toggleDrawer(false)}
              sx={{ "& .MuiDrawer-paper": { width: "250px" } }}
            >
              <List>
                {navItems.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton onClick={() => handleScroll(item.id)}>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <ListItem>
                  <Button
                    variant="outlined"
                    onClick={() => handleScroll("start")}
                    sx={{
                      border: "2px solid white",
                      color: "white",
                      borderRadius: "25px",
                      padding: "8px 20px",
                      fontSize: "12px",
                      fontWeight: "500",
                      width: "100%",
                      "&:hover": {
                        borderColor: "#ddd",
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Start Free Button */}
            <Button
              variant="outlined"
              onClick={() => handleScroll("start")}
              sx={{
                border: "2px solid white",
                color: "white",
                borderRadius: "25px",
                padding: "8px 20px",
                fontSize: "12px",
                fontWeight: "500",
                "&:hover": {
                  borderColor: "#ddd",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
