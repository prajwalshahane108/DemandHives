"use client"
import { Box, Typography, Button, Container, Grid, Paper, Chip } from "@mui/material"
import { styled } from "@mui/material/styles"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"

// Custom styled components
const MainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f8f6ff",
  padding: theme.spacing(8, 0),
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
}))

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
  fontFamily: "syne",
  // fontFamily: "Space Grotesk"
  color: "#473077",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))

const HighlightText = styled("span")({
  color: "#7a4dff",
  fontFamily: "syne",
})

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#7a4dff",
  color: "white",
  padding: "12px 32px",
  borderRadius: "30px",
  fontFamily: "syne",
  fontSize: "1.2rem",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#7442ff",
  },
}))

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "16px",
  border: "2px solid #8a56ff",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  position: "absolute",
  top: "-60px",
  left: "20px",
  zIndex: 2,
  backgroundColor: "white",
  width: "220px",
}))

const MonthChip = styled(Chip)(({ theme, month }) => {
  // Color mapping for months
  const colors = {
    DEC: "#00c2a8",
    JAN: "#00c2a8",
    FEB: "#00c2a8",
    MAR: "#8de8d6",
    APR: "#8de8d6",
    MAY: "#8de8d6",
    JUN: "#c5f1e7",
    JUL: "#ffd5d5",
    AUG: "#ffd5d5",
    SEP: "#ffb5b5",
    OCT: "#ff9a9a",
    NOV: "#ff9a9a",
  }

  return {
    backgroundColor: colors[month] || "#00c2a8",
    color: "white",
    fontWeight: "bold",
    margin: "4px",
    height: "40px",
    width: "40px",
  }
})

const GraphContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "300px",
  marginTop: "80px",
  marginBottom: "20px",
}))

// Custom bar chart component
const BarChart = () => {
  // Sample data for the bar chart
  const barHeights = [60, 120, 40, 180, 100, 140, 200, 160, 80, 100, 120]

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        height: "200px",
        position: "relative",
        justifyContent: "space-between",
        width: "100%",
        zIndex: 1,
      }}
    >
      {barHeights.map((height, index) => (
        <Box
          key={index}
          sx={{
            height: `${height}px`,
            width: "20px",
            backgroundColor: "rgba(138, 86, 255, 0.2)",
            borderRadius: "4px",
            mx: 0.5,
          }}
        />
      ))}

      {/* Line chart overlay */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
      >
        <polyline
          points="10,140 40,80 70,160 100,20 130,100 160,60 190,0 220,40 250,120 280,100 310,80"
          style={{
            fill: "none",
            stroke: "#8a56ff",
            strokeWidth: 3,
          }}
        />
        {/* Data points */}
        {[
          [10, 140],
          [40, 80],
          [70, 160],
          [100, 20],
          [130, 100],
          [160, 60],
          [190, 0],
          [220, 40],
          [250, 120],
          [280, 100],
          [310, 80],
        ].map(([x, y], index) => (
          <circle key={index} cx={x} cy={y} r={5} fill="#8a56ff" />
        ))}
      </svg>
    </Box>
  )
}

export default function Home() {
  const months = ["DEC", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV"]

  return (
    <MainContainer sx={{ margin: 3, borderRadius: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src="/revenue.png"
                alt="Bee conservation hexagon images"
                sx={{
                  width: "100%",
                  maxWidth: 900,
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box>
              <MainHeading variant="h1">
                Never Run Out  <br />
                of <HighlightText> Stock </HighlightText> Again
              </MainHeading>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "#5a3b9c",
                  fontSize: "1.1rem",
                  fontFamily: "Space Grotesk",
                  lineHeight: 1.6,
                }}
              >
                Stay ahead of your inventory needs with automated restocking alerts.
                Whenever supplies are running low,
                <br />
                Global Supply Connect ensures timely replenishment so your business never faces shortages.
              </Typography>

              <StyledButton variant="contained" size="large">
                Optimize Your Supply
              </StyledButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </MainContainer>
  )
}

