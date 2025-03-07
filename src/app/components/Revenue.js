"use client";
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  MenuItem,
  Grid,
  Paper,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// Custom styled components
const GradientBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, #6a11cb, #2575fc)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  minHeight: '600px',
}));
const WhiteCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(2),
  height: '100%',
  position: 'relative',
  overflow: 'visible',
}));
const PurpleButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#7a4dff',
  color: 'white',
  borderRadius: '50px',
  fontFamily: "syne",
  padding: '12px 24px',
  '&:hover': {
    backgroundColor: '#5a0cb2',
  },
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '1.1rem',
}));
const TealButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4cd6c0',
  color: 'white',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#3bc0ac',
  },
}));
const LabelBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '-20px',
  right: '60px',
  transform: 'rotate(-10deg)',
  backgroundColor: '#4cd6c0',
  color: '#6a11cb',
  padding: '10px 20px',
  borderRadius: '10px',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 10,
}));
// Sample data for the chart
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const generateChartData = () => {
  const data = [];

  // Current year data
  for (let i = 0; i < 12; i++) {
    data.push({
      name: months[i],
      year: '22',
      actualRevenue: i < 6 ? Math.floor(Math.random() * 50000) + 20000 : 0,
      predictedRevenue: i >= 6 ? Math.floor(Math.random() * 50000) + 20000 : 0
    });
  }

  // Next year data
  for (let i = 0; i < 12; i++) {
    data.push({
      name: months[i],
      year: '23',
      actualRevenue: 0,
      predictedRevenue: Math.floor(Math.random() * 60000) + 30000
    });
  }

  return data;
};
export default function Dashboard() {
  const [dateRange, setDateRange] = useState('JAN 2023 - DEC 2023');
  const [metric, setMetric] = useState('No Metric');
  const [data, setData] = useState(generateChartData());
  return (
    <Container maxWidth="lg" sx={{ py: 4 }} id="growth">
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Box sx={{ display: "flex", justifyContent: "left", mb: 4 }}>
            <Box
              component="img"
              src="/growth.gif"
              alt="Bee conservation hexagon images"
              sx={{
                width: "100%",
                maxWidth: 700,
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              pl: { md: 4 },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: '#7a4dff',
                fontWeight: 'bold',
                mb: 2,
                fontFamily: "syne",
                fontSize: { xs: '2.5rem', md: '2.9rem' },
              }}
            >
              Maximize Efficiency, Boost Profits
            </Typography>

            <Typography
              variant="h6"
              component="p"
              sx={{
                color: '#6a11cb',
                fontFamily: "Space Grotesk",
                mb: 4,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.5,
              }}
            >
              Ensure optimal stock levels across all locations and eliminate supply chain disruptions—leading to increased sales and up to 40% higher revenue!
            </Typography>

            <PurpleButton variant="contained" size="large">
              Optimize Supply Chain
            </PurpleButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
