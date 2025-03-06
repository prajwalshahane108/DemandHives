'use client';
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Link,
  AppBar,
  Toolbar,
  IconButton,
  createTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
// Custom theme to match the design
const theme = createTheme({
  palette: {
    primary: {
      main: '#5D4A9C',
    },
    secondary: {
      main: '#8067E0',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1.2rem',
          padding: '10px 30px',
        },
      },
    },
  },
});
// Wave component for the decorative waves
const WavePattern = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '50px',
        position: 'relative',
        mt: 10,
        mb: 5,
        '& svg': {
          position: 'absolute',
          width: '100%',
          height: '100px',
        }
      }}
    >
      <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          d="M0,50 C150,20 300,80 450,50 C600,20 750,80 900,50 C1050,20 1200,80 1350,50 L1350,100 L0,100 Z"
          fill="rgba(128, 103, 224, 0.3)"
        />
      </svg>
    </Box>
  );
};
// Main component
const CogsyClone = () => {
  // Use MediaQuery hook to detect mobile screens
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        id="start"
        sx={{
          bgcolor: '#523694', color: 'white', minHeight: '100vh',
          marginTop: '6.5rem',
        }}>
        {/* Header */}
        <AppBar position="static" elevation={0} color="transparent">
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="white" style={{ marginRight: '8px' }}>
                  <path d="M15,5 L25,10 L25,20 L15,25 L5,20 L5,10 L15,5 Z" />
                </svg>
                DemandHives
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        {/* Hero Section */}
        <Container maxWidth="md" sx={{ textAlign: 'center', pt: 8, pb: 4 }}>
          <Typography
            variant="h6"
            component="h1"
            sx={{
              fontWeight: 500,
              mb: 1,
              fontSize: { xs: '2rem', md: '3.5rem' }
            }}
          >
            Seamless Sourcing,
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 5,
              background: 'linear-gradient(90deg, #8067E0 0%, #A3E4D7 30%, #FF9E80 60%, #8067E0 100%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '3.5rem', md: '6rem' },
              lineHeight: 0.9
            }}
          >
            Reliable Delivery.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#8067E0',
              '&:hover': {
                bgcolor: '#6E57C4',
              },
              color: 'white',
              fontSize: { xs: '1.5rem', md: '2.2rem' },
              fontWeight: 600,
              py: { xs: 1.2, md: 1.9 },
              px: { xs: 5, md: 15 }
            }}
          >
            Get Started
          </Button>
        </Container>
        {/* Wave Pattern */}
        <WavePattern />
        {/* Footer - Responsive version */}
        <Container maxWidth="xl" sx={{ pt: 4, pb: 8 }}>
          {/* Header with Logo and Social Media */}
          <Box sx={{
            mb: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 2 : 0,
            ml: isMobile ? 0 : 10,
            px: isMobile ? 2 : 0
          }}>
            {/* Left Side - Logo & Name */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginRight: "8px" }}>
                <path d="M12,4 L20,8 L20,16 L12,20 L4,16 L4,8 L12,4 Z" />
              </svg>
              <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                DemandHives
              </Typography>
            </Box>
            {/* Right Side - Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton size="small" sx={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
            </Box>
          </Box>
          {/* Main Footer Content */}
          <Grid container spacing={4} sx={{ px: isMobile ? 2 : 0 }}>
            {/* Tagline Section */}
            <Grid item xs={12} md={5.5} sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-start",
              textAlign: isMobile ? "center" : "left",
              mb: isMobile ? 4 : 0
            }}>
              <Typography variant="h6" sx={{
                fontWeight: 600,
                mb: 2,
                ml: isMobile ? 0 : 12,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}>
                Operate with 100% <br /> certainty
              </Typography>
              <Typography variant="body2" sx={{
                color: 'rgba(255,255,255,0.7)',
                ml: isMobile ? 0 : 12,
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}>
                Stay in touch
              </Typography>
            </Grid>
            {/* Links Sections */}
            <Grid item xs={12} md={6.5}>
              <Grid container spacing={isMobile ? 4 : 2}>
                {/* Company and Integrations */}
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, color: "rgba(255,255,255,0.7)", fontSize: '1.2rem' }}>
                    Company
                  </Typography>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    mb: 4
                  }}>
                    <Link href="#" color="#fff" underline="none">About Us</Link>
                    <Link href="#" color="#fff" underline="none">Services</Link>
                    <Link href="#" color="#fff" underline="none">Contact Us</Link>
                    <Link href="#" color="#fff" underline="none">Privacy policy</Link>
                  </Box>
                  {/* <Typography variant="h6" sx={{ mt: 2, mb: 2, color: "rgba(255,255,255,0.7)" }}>
                    Integrations
                  </Typography>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    fontSize: { xs: '1rem', md: '1.2rem' }
                  }}>
                    <Link href="#" color="#ffffff" underline="none">Shopify</Link>
                    <Link href="#" color="#ffffff" underline="none">Amazon</Link>
                    <Link href="#" color="#ffffff" underline="none">ShipBob</Link>
                    <Link href="#" color="#ffffff" underline="none">All integrations</Link>
                  </Box> */}
                </Grid>
                {/* Resources and Ultimate Guides */}
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}>
                  Resources & Support
                  </Typography>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    mb: 4
                  }}>
                    <Link href="#" color="#ffffff" underline="none">Industry Insights</Link>
                    <Link href="#" color="#ffffff" underline="none">Procurement Guide</Link>
                    <Link href="#" color="#ffffff" underline="none">Logistics & Supply Chain</Link>
                    <Link href="#" color="#ffffff" underline="none">Bulk Order </Link>
                  </Box>

                  {/* <Typography variant="h6" sx={{ mt: 2, mb: 2, color: "rgba(255,255,255,0.7)" }}>
                    Ultimate guides
                  </Typography>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    fontSize: { xs: '1rem', md: '1.2rem' }
                  }}>
                    <Link href="#" color="#ffffff" underline="none">Procurement Guides</Link>
                    <Link href="#" color="#ffffff" underline="none">Logistics & Supply Chain Tips</Link>
                    <Link href="#" color="#ffffff" underline="none">Bulk Order Assistance</Link>
                  </Box> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
export default CogsyClone;