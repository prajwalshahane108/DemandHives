"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components
const MainContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  backgroundColor: "white",
}));

const MainButton = styled(Button)(({ theme, primary }) => ({
  borderRadius: "50px",
  padding: theme.spacing(1, 3),
  fontWeight: "bold",
  textTransform: "none",
  border: primary ? "2px solid #FFC107" : "none",
  color: primary ? "black" : "#664500",
  backgroundColor: primary ? "transparent" : "transparent",
  "&:hover": {
    backgroundColor: primary ? "rgba(255, 193, 7, 0.1)" : "rgba(0, 0, 0, 0.05)",
    border: primary ? "2px solid #FFC107" : "none",
  },
}));

const StatBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  boxShadow: "none",
  border: "1px solid #f0f0f0",
}));

const BeeConservation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MainContainer maxWidth="lg" id="Home">
      <Grid container spacing={4} sx={{ mt: 0.5 }} alignItems="center" justifyContent="center" >
        <Grid item xs={12} md={7} >
          <Box sx={{ bgcolor: "#fff", textAlign: isMobile ? "center" : "left" }}>
            <Box sx={{ bgcolor: "#fff", textAlign: isMobile ? "center" : "left", ml: { xs: 0, sm: 7 } }}>
              <Typography
                variant={isMobile ? "h4" : "h2"}
                component="h1"
                sx={{ fontWeight: "bold", color: "#222222", mb: 1 }}
              >
                Seamless Global Sourcing & Logistics
              </Typography>
              <Typography
                variant={isMobile ? "h4" : "h2"}
                component="h1"
                sx={{ fontWeight: "bold", color: "#222222", mb: 2 }}
              >

              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ mb: 4, maxWidth: isMobile ? "100%" : "80%", mx: "auto" }}
            >
              {/* From eco-friendly cleaning products in Paris to office furniture in Singapore—DemandHives ensures your bulk procurement needs are met efficiently and reliably. */}
              DemandHives is a global sourcing and logistics platform that seamlessly connects buyers with trusted suppliers worldwide. Whether you need 500 eco-friendly cleaning products for a boutique hotel in Paris, bulk office furniture for a new coworking space in Singapore, or specialized construction materials for a project in Brazil, we ensure that your demand finds the right supplier—efficiently and reliably.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                gap: 2,
                mb: 4,
                ml: { xs: 0, sm: 7 },
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <MainButton variant="outlined" sx={{ border: "2px solid #FFC107" }}>
                Learn More
              </MainButton>
              <MainButton>Explore Sourcing</MainButton>
            </Box>

            <Grid container spacing={2} justifyContent={isMobile ? "center" : "flex-start"}>
              <Grid item xs={12} sm={4}>
                <StatBox>
                  <Typography variant="h4" component="div" fontWeight="bold">
                    400+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Successful Bulk Orders Fulfilled
                  </Typography>
                </StatBox>
              </Grid>
              <Grid item xs={12} sm={4}>
                <StatBox>
                  <Typography variant="h4" component="div" fontWeight="bold">
                    20K $
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Countries Served
                  </Typography>
                </StatBox>
              </Grid>
              <Grid item xs={12} sm={4}>
                <StatBox>
                  <Typography variant="h4" component="div" fontWeight="bold">
                    10M $
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Worth of Goods Procured
                  </Typography>
                </StatBox>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src="/bee.png"
              alt="Bee conservation hexagon images"
              sx={{
                width: "100%",
                maxWidth: 380,
                height: "auto",
                objectFit: "contain",
                borderRadius: "20px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default BeeConservation;