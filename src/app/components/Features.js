"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Box, Typography, Button, Container, Grid, Card, CardContent, Chip, LinearProgress } from "@mui/material"
import { styled } from "@mui/material/styles"
import Image from "next/image"
import StarIcon from "@mui/icons-material/Star"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ShopIcon from "@mui/icons-material/Shop"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
// Custom styled components
const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 600,
  textAlign: "center",
  color: "#7a4dff",
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))
const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
  fontFamily: "syne",
  color: "#6c41e0",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}))
const HighlightText = styled("span")({
  color: "#7c5ce6",
})
// Marquee container for testimonials
const TestimonialContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '60px', // Adjust based on your content height
  marginBottom: theme.spacing(8),
}))
// Animated content for testimonials
const TestimonialMarquee = styled(Box)(({ animate, speed }) => ({
  display: 'flex',
  position: 'absolute',
  whiteSpace: 'nowrap',
  animation: animate ? `testimonialScroll ${speed}s linear infinite` : 'none',
  '@keyframes testimonialScroll': {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-50%)' }
  }
}))
const TestimonialItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(0, 4),
  whiteSpace: 'nowrap',
 fontFamily: "Space Grotesk"
}))
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#6c41e0",
  color: "white",
  padding: "12px 32px",
  borderRadius: "30px",
  fontFamily: "syne",
  fontSize: "1.2rem",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#5a35c8",
  },
}))
const MainSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#e8f7f7",
  padding: theme.spacing(8, 0),
  borderRadius: "16px",
}))
const MonthChip = styled(Chip)(({ theme, month }) => {
  const colors = {
    DEC: "#00c2a8",
    JAN: "#00c2a8",
    FEB: "#00c2a8",
    MAR: "#00c2a8",
    APR: "#00c2a8",
    MAY: "#00c2a8",
    JUN: "#00c2a8",
    JUL: "#00c2a8",
    AUG: "#00c2a8",
    SEP: "#ff9a9a",
    OCT: "#ff9a9a",
    NOV: "#ff9a9a",
  }
  return {
    backgroundColor: colors[month] || "#00c2a8",
    color: "white",
    fontWeight: "bold",
    margin: "4px",
  }
})
const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}))
export default function Home() {
  const [animate, setAnimate] = useState(false);
  const testimonialRef = useRef(null);

  // Testimonial data
  const testimonials = [
    {
      icon: <StarIcon sx={{ color: "#00c2a8" }} />,
      text: `"Seamless procurement process!" -`,
      brand: <Typography variant="body1" sx={{ color: "#6c41e0", fontWeight: 600, fontStyle: "italic" }}>Global Resorts</Typography>
    },
    {
      icon: <StarIcon sx={{ color: "#00c2a8" }} />,
      text: `"Reliable and cost-effective sourcing." -`,
      image: <Image src="/star.png" alt="worldwide logistics" width={30} height={30} />
    },
    {
      icon: <StarIcon sx={{ color: "#00c2a8" }} />,
      text: `"Fast delivery and exceptional service!" -`,
      brand: <Typography variant="body1" sx={{ color: "#6c41e0", fontWeight: 600, fontStyle: "italic" }}>Elite Retailers</Typography>
    },
    {
      icon: <StarIcon sx={{ color: "#00c2a8" }} />,
      text: `"The best partner for bulk orders!" -`,
      image: <Image src="/star.png" alt="supply chain expert" width={30} height={30} />
    },
    {
      icon: <StarIcon sx={{ color: "#00c2a8" }} />,
      text: `"Transformed our logistics efficiency!" -`,
      brand: <Typography variant="body1" sx={{ color: "#6c41e0", fontWeight: 600, fontStyle: "italic" }}>Prestige Hotels</Typography>
    }
  ];

  const months = ["DEC", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV"]

  useEffect(() => {
    // Start animation after component is mounted
    setAnimate(true);

    return () => {
      setAnimate(false);
    };
  }, []);
  // Render testimonial item based on its data
  const renderTestimonialContent = (item) => (
    <>
      {item.icon}
      <Typography variant="body1" sx={{ color: "#6c41e0", fontWeight: 600 }}>
        {item.text}
      </Typography>
      {item.brand && item.brand}
      {item.image && item.image}
    </>
  );
  return (
    <Container
      maxWidth="xl" sx={{ bgcolor: "#fff" }}>
      <Box>
        <MainHeading sx={{ fontFamily: "Space Grotesk"}} variant="h1">
          Save 20+ hours a week{" "}
          <span style={{ color: "#523694" }}>on
            <br />
            procurement & logistics</span>
        </MainHeading>


        {/* Marquee Testimonial Container */}
        <TestimonialContainer >
          <TestimonialMarquee animate={animate} speed={80} ref={testimonialRef}>
            {/* Create multiple copies for continuous loop */}
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => (
              <TestimonialItem key={index}>
                {renderTestimonialContent(item)}
              </TestimonialItem>
            ))}
          </TestimonialMarquee>
        </TestimonialContainer>

        <MainSection id='inventory'>
          <Container>
            <Grid container spacing={5} >
              <Grid
                item
                xs={12}
                md={5}
                sx={{ mt: 8, }}
              >
                <SubHeading variant="h2">
                  {/* Streamline Your */}
                  Want to sell more or {" "} 
                  {/* <br /> */}
                  <HighlightText>
                    {/* Supply Chain */}
                    find something new?
                    </HighlightText>
                </SubHeading>
                <Typography variant="body1" sx={{ mb: 4, color: "#6c41e0", fontSize: "1.1rem", fontFamily: "Space Grotesk" }}>
                  Monitor stock availability, track shipments in real-time, and manage vendor details—all from a single dashboard.
                </Typography>
                <StyledButton variant="contained" size="large">
                  Start Sourcing Now
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box sx={{ display: "flex", justifyContent: "center", }}>
                  <Box
                    component="img"
                    src="/tik.png"
                    alt="Bee conservation hexagon images"
                    sx={{
                      width: "100%",
                      maxWidth: 600,
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </MainSection>
      </Box>
    </Container>
  )
}