"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Avatar, Box, Fade } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
export default function TestimonialCarousel() {
  // Array of testimonial data
  const testimonials = [
    {
      quote: "Finding reliable suppliers was a challenge until we partnered with Global Supply Connect. <strong>They streamlined our entire procurement process</strong> and saved us valuable time.",
      author: "Chris Kresser",
      role: "Founder of Adapt Naturals",
      avatar: "/boy.jpg"
    },
    {
      quote: "Their sourcing network is unmatched. <strong>We've reduced procurement costs by 35%</strong> while improving product quality.",
      author: "Sarah Johnson",
      role: "Operations Director at EcoStyle",
      avatar: "/girl.jpg"
    },
    {
      quote: "Global shipping and logistics used to be a nightmare. <strong>Now, every order arrives on time and hassle-free</strong> thanks to their expertise.",
      author: "Michael Chen",
      role: "CEO of Urban Essentials",
      avatar: "/boy2.jpg"
    },
    {
      quote: "The best procurement decision we’ve made. <strong>They handle everything from sourcing to last-mile delivery</strong>, making our operations seamless.",
      author: "Jessica Williams",
      role: "Retail Operations at Caraway",
      avatar: "/boy3.jpg"
    },
    {
      quote: "Their end-to-end support is top-notch. <strong>We’ve optimized our supply chain and boosted efficiency</strong> since working with them.",
      author: "David Rodriguez",
      role: "Founder of NatureBlend",
      avatar: "/boy4.jpg"
    }
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    // Timer for changing testimonials
    const interval = setInterval(() => {
      // Start fade out
      setVisible(false);

      // After fade out is complete, change the testimonial and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setVisible(true);
      }, 500); // This should match the fade duration

    }, 6000); // Total time each testimonial is shown (including fade in/out)

    return () => clearInterval(interval);
  }, [testimonials.length]);
  // Current testimonial
  const testimonial = testimonials[currentIndex];
  // Render star rating
  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <StarIcon key={index} sx={{ color: "#6B3CD1",  }} />
    ));
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
        backgroundColor: "#fff",
        px: 2,
        minHeight: '300px', // Set a minimum height to prevent layout shifts
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 1300,
          mx: "auto",
          p: {
            xs: 3,
            sm: 5,
            md: 8
          },
          pl: {
            xs: 3,
            sm: 5,
            md: "15rem"
          },
          pr: {
            xs: 3,
            sm: 5,
            md: "15rem"
          },
          borderRadius: 3,
          backgroundColor: "#F6F1FF",
          boxShadow: "none",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Fade in={visible} timeout={500}>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "left", mb: 2, }}>
              {renderStars()}
            </Box>

            <Typography
              variant="h6"
              sx={{
                textAlign: "left", // Align text to the left
                color: "#6B3CD1",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem"},
                fontWeight: 500,
                minHeight: { xs: '80px', sm: '100px' }, // Maintain consistent height
              }}
              dangerouslySetInnerHTML={{ __html: `"${testimonial.quote}"` }}
            />

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
              <Avatar
                src={testimonial.avatar}
                alt={testimonial.author}
                sx={{ width: 48, height: 48, mr: 2 }}
              />
              <Box>
                <Typography sx={{ fontWeight: "bold", color: "#3D2371" }}>
                  {testimonial.author}
                </Typography>
                <Typography sx={{ color: "#9B8DBD" }}>{testimonial.role}</Typography>
              </Box>
            </Box>
          </Box>
        </Fade>

        {/* Optional: Dots indicator for current testimonial */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? '#6B3CD1' : '#D9D0F0',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onClick={() => {
                setVisible(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setVisible(true);
                }, 100);
              }}
            />
          ))}
        </Box>
      </Card>
    </Box>
  );
}