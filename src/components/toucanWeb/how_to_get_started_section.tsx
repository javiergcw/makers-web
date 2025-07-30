'use client';

import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { colors } from '../utils/color';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: '#F8F9FA',
        borderRadius: 3,
        padding: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '3rem',
          fontWeight: 400,
          color: '#000000',
          marginBottom: 2,
          lineHeight: 1,
        }}
      >
        {number}
      </Typography>
      
      <Typography
        variant="h5"
        sx={{
          fontWeight: 400,
          color: '#000000',
          marginBottom: 2,
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          color: '#666666',
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
};

const HowToGetStartedSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: "Your farm's details and data",
      description: "Start by providing us with your asset's details (name, size and location) and SCADA data, and define the forecasting requirements."
    },
    {
      number: '02',
      title: "AI models and API setup",
      description: "Behind the scenes, we run our tailored AI models and set up your API. After that, you receive an API key with the proper access credentials and parameters."
    },
    {
      number: '03',
      title: "Accurate forecasts in a heartbeat",
      description: "All you have to do now is query the forecasting window and resolution, and get your power forecasts in a matter of seconds."
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: colors.secondary.peach,
        paddingY: 15,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 300,
              color: '#000000',
              marginBottom: 1,
              lineHeight: { xs: 1.1, sm: 1.2, md: 1 },
            }}
          >
            How to get started
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4 
        }}>
          {steps.map((step, index) => (
            <Box key={index}>
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HowToGetStartedSection; 