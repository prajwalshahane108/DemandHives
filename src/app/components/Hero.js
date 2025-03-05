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
    <MainContainer maxWidth="lg">
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={7}>
          <Box sx={{ bgcolor: "#fff", textAlign: isMobile ? "center" : "left" }}>
            <Box sx={{ bgcolor: "#fff", textAlign: isMobile ? "center" : "left", ml: { xs: 0, sm: 7 }}}>
              <Typography
                variant={isMobile ? "h4" : "h2"}
                component="h1"
                sx={{ fontWeight: "bold", color: "#222222", mb: 1 }}
              >
                Sponsor a hive
              </Typography>
              <Typography
                variant={isMobile ? "h4" : "h2"}
                component="h1"
                sx={{ fontWeight: "bold", color: "#222222", mb: 2 }}
              >
                to save the bees
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ mb: 4, maxWidth: isMobile ? "100%" : "80%", mx: "auto" }}
            >
              For several years, the bee population has been in sharp decline. We
              propose you to sponsor hives and receive honey every month in
              exchange.
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
                Sponsor a hive
              </MainButton>
              <MainButton>Buy honey directly</MainButton>
            </Box>

            <Grid container spacing={2} justifyContent={isMobile ? "center" : "flex-start"}>
              <Grid item xs={12} sm={4}>
                <StatBox>
                  <Typography variant="h4" component="div" fontWeight="bold">
                    400+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    sponsored hives
                  </Typography>
                </StatBox>
              </Grid>
              <Grid item xs={12} sm={4}>
                <StatBox>
                  <Typography variant="h4" component="div" fontWeight="bold">
                    20K$
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    of donations
                  </Typography>
                </StatBox>
              </Grid>
              <Grid item xs={12} sm={4}>
                <StatBox>
                  <Typography variant="h4" component="div" fontWeight="bold">
                    12k
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    honey pots delivered
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
              src="/honey.png"
              alt="Bee conservation hexagon images"
              sx={{
                width: "100%",
                maxWidth: 400,
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default BeeConservation;