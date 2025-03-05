"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// Styled components
const BannerContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#5E35B1', // Deep purple background color
  padding: theme.spacing(5, 2),
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden',
  position: 'relative',
  marginBottom: "3.5rem"
}));
const MarqueeContainer = styled(Box)({
  display: 'flex',
  whiteSpace: 'nowrap',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
});
const MarqueeContent = styled(Box)(({ animate, speed }) => ({
  display: 'flex',
  animation: animate ? `marquee ${speed}s linear infinite` : 'none',
  '@keyframes marquee': {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-50%)' }
  }
}));
const MarqueeItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 4),
}));
const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #8E63E6 0%, #4BDBC3 33%, #F8BA85 66%, #E57BBE 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozBackgroundClip: 'text',
  MozTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  fontWeight: 700,
  fontSize: '4rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));
const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
}));
const CallToAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
const TryFreeButton = styled(Button)(({ theme }) => ({
  color: 'white',
  fontSize: '2.5rem',
  fontWeight: 700,
  textTransform: 'none',
  padding: theme.spacing(0, 1),
  '&:hover': {
    backgroundColor: 'transparent',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
}));
const Arrow = styled(ArrowForwardIcon)(({ theme }) => ({
  fontSize: '2rem',
  marginLeft: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
}));
const Sparkles = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  marginLeft: theme.spacing(2),
}));
const Sparkle = styled(Box)(({ theme, top, left, size, rotation }) => ({
  position: 'absolute',
  top: top || 0,
  left: left || 0,
  width: size || 20,
  height: size || 20,
  transform: `rotate(${rotation || 0}deg)`,
  color: '#4BDBC3',
}));
// Sparkle SVG component
const SparkleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2L14.5,9.5L22,12L14.5,14.5L12,22L9.5,14.5L2,12L9.5,9.5L12,2Z" />
  </svg>
);
const Banner = () => {
  const [animate, setAnimate] = useState(false);
  const contentRef = useRef(null);
  
  // Array of promotional texts - keep this reasonable in length
  // The animation will duplicate these to create a continuous loop
  const promoTexts = [
    { prefix: "Don't use", highlight: "DemandHives", suffix: "yet?" },
    { prefix: "Grow with", highlight: "DemandHives", suffix: "today!" },
    { prefix: "Ready for", highlight: "Better", suffix: "insights?" },
    { prefix: "Improve your", highlight: "Strategy", suffix: "now!" },
    { prefix: "Unlock", highlight: "Potential", suffix: "with us" }
  ];
  useEffect(() => {
    // Start animation after component is mounted
    setAnimate(true);
    
    return () => {
      setAnimate(false);
    };
  }, []);
  return (
    <BannerContainer>
      <Container maxWidth="xl" sx={{ padding: 0 }}>
        <MarqueeContainer>
          <MarqueeContent animate={animate} speed={70} ref={contentRef}>
            {/* Create a continuous loop with multiple copies */}
            {[...promoTexts, ...promoTexts, ...promoTexts, ...promoTexts].map((text, index) => (
              <MarqueeItem key={index}>
                <TextContainer>
                  <Typography variant="h2" component="div" color="white" fontWeight={700} mr={2}>
                    {text.prefix}
                  </Typography>
                  <GradientText variant="h2" component="span">
                    {text.highlight}
                  </GradientText>
                  <Typography variant="h2" component="div" color="#E57BBE" fontWeight={700} ml={2}>
                    {text.suffix}
                  </Typography>
                </TextContainer>
                
                <CallToAction>
                  <TryFreeButton disableRipple>
                    Try free
                    <Arrow />
                  </TryFreeButton>
                  
                  <Sparkles>
                    <Sparkle top="-15px" left="5px" size={24} rotation={15}>
                      <SparkleIcon size={24} />
                    </Sparkle>
                    <Sparkle top="0px" left="25px" size={32}>
                      <SparkleIcon size={32} />
                    </Sparkle>
                    <Sparkle top="15px" left="0px" size={20} rotation={45}>
                      <SparkleIcon size={20} />
                    </Sparkle>
                  </Sparkles>
                </CallToAction>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </MarqueeContainer>
      </Container>
    </BannerContainer>
  );
};
export default Banner;