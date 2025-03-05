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
  backgroundColor: '#6a11cb',
  color: 'white',
  borderRadius: '50px',
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <GradientBox>
            <WhiteCard>
              <Box sx={{ p: 2 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h6" component="div" fontWeight="bold">
                    Growth Plan
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <TextField
                      select
                      size="small"
                      value={dateRange}
                      onChange={(e) => setDateRange(e.target.value)}
                      sx={{ mr: 2, minWidth: 200 }}
                    >
                      <MenuItem value="JAN 2023 - DEC 2023">JAN 2023 - DEC 2023</MenuItem>
                      <MenuItem value="JAN 2023 - DEC 2024">JAN 2023 - DEC 2024</MenuItem>
                    </TextField>
                    
                    <TextField
                      select
                      size="small"
                      value={metric}
                      onChange={(e) => setMetric(e.target.value)}
                      label="Overlay a metric"
                      sx={{ minWidth: 180 }}
                    >
                      <MenuItem value="No Metric">No Metric</MenuItem>
                      <MenuItem value="Revenue">Revenue</MenuItem>
                      <MenuItem value="Inventory">Inventory</MenuItem>
                    </TextField>
                    
                    <IconButton size="small" sx={{ ml: 1, backgroundColor: '#f0f0f0', borderRadius: '50%' }}>
                      <Typography variant="body2" component="span" color="primary" fontWeight="bold">?</Typography>
                    </IconButton>
                  </Box>
                </Box>
                
                <Box display="flex" alignItems="center" mb={3}>
                  <TealButton
                    variant="contained"
                    startIcon={<EditIcon />}
                    size="small"
                    sx={{ mr: 2 }}
                  >
                    Edit Plan
                  </TealButton>
                  
                  <TealButton
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    size="small"
                    sx={{ color: '#4cd6c0', borderColor: '#4cd6c0' }}
                  >
                    Export to CSV
                  </TealButton>
                </Box>
                
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#4cd6c0', mr: 1 }}></Box>
                    <Typography variant="body2">Actual Revenue</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#8a4fff', mr: 1 }}></Box>
                    <Typography variant="body2">Predicted Revenue</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={data}
                      margin={{
                        top: 10,
                        right: 10,
                        left: 10,
                        bottom: 30,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        tickLine={false}
                        tick={props => {
                          const { x, y, payload } = props;
                          return (
                            <g transform={`translate(${x},${y})`}>
                              <text 
                                x={0} 
                                y={0} 
                                dy={16} 
                                textAnchor="middle" 
                                fill="#666"
                                fontSize={12}
                              >
                                {payload.value}
                              </text>
                              <text 
                                x={0} 
                                y={15} 
                                dy={16} 
                                textAnchor="middle" 
                                fill="#666"
                                fontSize={12}
                              >
                                {data.find(item => item.name === payload.value)?.year}
                              </text>
                            </g>
                          );
                        }}
                      />
                      <YAxis 
                        tickFormatter={(value) => `US${Math.floor(value / 1000)}K`}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value.toLocaleString()}`, 'Revenue']}
                        labelFormatter={(label) => `${label}`}
                      />
                      <Bar 
                        dataKey="actualRevenue" 
                        fill="#4cd6c0" 
                        radius={[2, 2, 0, 0]} 
                        barSize={25}
                        name="Actual Revenue"
                      />
                      <Bar 
                        dataKey="predictedRevenue" 
                        fill="#8a4fff" 
                        radius={[2, 2, 0, 0]} 
                        barSize={25}
                        name="Predicted Revenue"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
              <LabelBox>
                Data-backed decisions
              </LabelBox>
            </WhiteCard>
          </GradientBox>
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
                color: '#5a0cb2',
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3rem' },
              }}
            >
              Unlock new revenue growth
            </Typography>
            
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: '#6a11cb',
                mb: 4,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.5,
              }}
            >
              Always maintain optimal inventory levels at every warehousing location. And rake in up to 40% more revenue as a result!
            </Typography>
            
            <PurpleButton variant="contained" size="large">
              Start for free
            </PurpleButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
