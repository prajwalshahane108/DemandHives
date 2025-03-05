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
  fontSize: "3.5rem",
  fontWeight: 700,
  textAlign: "center",
  color: "#6c41e0",
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))
const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
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
}))
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#6c41e0",
  color: "white",
  padding: "12px 32px",
  borderRadius: "30px",
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
      text: `"We need it to operate effectively." -`,
      image: <Image src="/placeholder.svg?height=30&width=120" alt="adapt naturals" width={120} height={30} />
    },
    {
      icon: <StarIcon sx={{ color: "#00c2a8" }} />,
      text: `"A total game changer." -`,
      brand: <Typography variant="body1" sx={{ color: "#6c41e0", fontWeight: 600, fontStyle: "italic" }}>Caraway</Typography>
    },
    {
      icon: <StarIcon sx={{ color: "#00c2a8" }} />,
      text: `"Highly recommend!" -"`,
      brand: null
    },
    {
      icon: <StarIcon sx={{ color: "#00c2a8" }} />,
      text: `"Best investment for our inventory." -`,
      brand: <Typography variant="body1" sx={{ color: "#6c41e0", fontWeight: 600, fontStyle: "italic" }}>LuxHome</Typography>
    },
    {
      icon: <StarIcon sx={{ color: "#00c2a8" }} />,
      text: `"Simplified our entire operation." -`,
      image: <Image src="/placeholder.svg?height=30&width=120" alt="eco brand" width={120} height={30} />
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
    <Container maxWidth="xl" sx={{ bgcolor: "#fff" }}>
      <Box>
        <MainHeading variant="h1">
          Save 20+ hours a week on
          <br />
          inventory management
        </MainHeading>
        
        {/* Marquee Testimonial Container */}
        <TestimonialContainer>
          <TestimonialMarquee animate={animate} speed={80} ref={testimonialRef}>
            {/* Create multiple copies for continuous loop */}
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => (
              <TestimonialItem key={index}>
                {renderTestimonialContent(item)}
              </TestimonialItem>
            ))}
          </TestimonialMarquee>
        </TestimonialContainer>
        
        <MainSection>
          <Container>
            <Grid container spacing={6}>
              <Grid item xs={12} md={5}>
                <SubHeading variant="h2">
                  Manage inventory in
                  <br />
                  <HighlightText>real-time</HighlightText>
                </SubHeading>
                <Typography variant="body1" sx={{ mb: 4, color: "#6c41e0", fontSize: "1.1rem" }}>
                  Check your stock levels, track in-transit inventory, and house vendor need-to-knows – all in one tidy
                  place.
                </Typography>
                <StyledButton variant="contained" size="large">
                  Start for free
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box sx={{ position: "relative" }}>
                  {/* Incoming PO Tag */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -20,
                      left: 0,
                      backgroundColor: "#7c5ce6",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "8px",
                      transform: "rotate(-5deg)",
                      zIndex: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      <LocalShippingIcon sx={{ fontSize: 16, mr: 0.5 }} />
                      Incoming PO
                    </Typography>
                  </Box>
                  {/* TikTok Ads Tag */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -10,
                      right: 40,
                      backgroundColor: "#7c5ce6",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "8px",
                      zIndex: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      TikTok Ads
                    </Typography>
                  </Box>
                  {/* Calendar Card */}
                  <Card
                    sx={{
                      mb: 2,
                      borderRadius: "16px",
                      border: "2px solid #7c5ce6",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    <CardContent sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                      {months.map((month) => (
                        <MonthChip key={month} label={month} month={month} />
                      ))}
                    </CardContent>
                  </Card>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      {/* Replenish Now Card */}
                      <Card
                        sx={{
                          borderRadius: "16px",
                          mb: 2,
                          border: "2px solid #7c5ce6",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                      >
                        <CardContent>
                          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <Box
                              sx={{
                                width: 12,
                                height: 12,
                                borderRadius: "50%",
                                backgroundColor: "#ff5c5c",
                                mr: 1,
                              }}
                            />
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                              REPLENISH NOW
                            </Typography>
                          </Box>
                          <Typography
                            variant="h3"
                            sx={{ color: "#7c5ce6", fontWeight: "bold", fontSize: "2.5rem", mb: 1 }}
                          >
                            4
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#7c5ce6", mb: 2 }}>
                            Products
                          </Typography>
                          <Box sx={{ mb: 1 }}>
                            <Typography variant="body2" sx={{ color: "#7c5ce6" }}>
                              Revenue Losses:{" "}
                              <Typography component="span" sx={{ color: "#7c5ce6", fontWeight: "bold" }}>
                                $200k
                              </Typography>
                            </Typography>
                          </Box>
                          <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ color: "#7c5ce6" }}>
                              Working Capital Needed:{" "}
                              <Typography component="span" sx={{ color: "#7c5ce6", fontWeight: "bold" }}>
                                $110k
                              </Typography>
                            </Typography>
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="body2" sx={{ color: "#7c5ce6", fontWeight: "bold" }}>
                              Review
                            </Typography>
                            <ArrowForwardIcon sx={{ color: "#7c5ce6", ml: 1, fontSize: "1rem" }} />
                          </Box>
                        </CardContent>
                      </Card>
                      {/* Shopify & Amazon Card */}
                      <Card
                        sx={{
                          borderRadius: "16px",
                          border: "2px solid #7c5ce6",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                      >
                        <CardContent>
                          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <ShopIcon sx={{ color: "#7c5ce6", mr: 1 }} />
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                              Shopify (US)
                            </Typography>
                          </Box>
                          <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                              <Typography variant="body2">280k/300k</Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={90}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: "#e0e0e0",
                                "& .MuiLinearProgress-bar": {
                                  backgroundColor: "#ff9a9a",
                                },
                              }}
                            />
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <Image src="/placeholder.svg?height=24&width=24" alt="Amazon" width={24} height={24} />
                            <Typography variant="body1" sx={{ fontWeight: "bold", ml: 1 }}>
                              Amazon FBA
                            </Typography>
                          </Box>
                          <Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                              <Typography variant="body2">60k/200k</Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={30}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: "#e0e0e0",
                                "& .MuiLinearProgress-bar": {
                                  backgroundColor: "#ff9a9a",
                                },
                              }}
                            />
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/* Marketing Events Card */}
                      <Card
                        sx={{
                          borderRadius: "16px",
                          height: "100%",
                          border: "2px solid #00c2a8",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                      >
                        <CardContent>
                          <Chip
                            label="MARKETING EVENTS"
                            sx={{
                              backgroundColor: "#e8f7f7",
                              color: "#00c2a8",
                              fontWeight: "bold",
                              mb: 3,
                            }}
                          />
                          <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" sx={{ color: "#6c41e0", fontWeight: "bold", mb: 1 }}>
                              TikTok Ads
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#6c41e0" }}>
                              5x Lift
                            </Typography>
                            <Box
                              sx={{
                                borderBottom: "1px dashed #ccc",
                                my: 2,
                              }}
                            />
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ color: "#6c41e0", fontWeight: "bold", mb: 1 }}>
                              Spring Promo
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#6c41e0" }}>
                              3x Lift
                            </Typography>
                          </Box>
                          {/* Location Pin */}
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 20,
                              right: 20,
                              width: 40,
                              height: 40,
                              backgroundColor: "#00c2a8",
                              borderRadius: "50%",
                            }}
                          ></Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </MainSection>
      </Box>
    </Container>
  )
}