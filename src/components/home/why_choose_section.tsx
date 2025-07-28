'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AddIcon from '@mui/icons-material/Add';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LockIcon from '@mui/icons-material/Lock';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '32px',
  height: '100%',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  border: 'none',
  boxShadow: 'none',
  
  '&:hover': {
    backgroundColor: '#FFD700',
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(255, 215, 0, 0.3)',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: 'white',
  border: '2px solid #e0e0e0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '24px',
  position: 'relative',
  transition: 'all 0.3s ease-in-out',
  
  '& .MuiSvgIcon-root': {
    fontSize: '28px',
    color: '#666',
    transition: 'all 0.3s ease-in-out',
  },
}));

const SmallIcon = styled(Box)({
  position: 'absolute',
  top: '-4px',
  right: '-4px',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#666',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '& .MuiSvgIcon-root': {
    fontSize: '12px',
    color: 'white',
  },
});

const StyledCardContent = styled(CardContent)({
  padding: '0 !important',
  '&:last-child': {
    paddingBottom: '0 !important',
  },
});

const WhyChooseSection = () => {
  const features = [
    {
      icon: <LocationOnIcon />,
      smallIcon: <AddIcon />,
      title: "Remote deployment, no hardware required",
      description: "Say goodbye to complex and lengthy setups. We leverage your existing data sources. No need for any site visits or installation of new sensors, we are typically up and running within 2-3 weeks."
    },
    {
      icon: <SecurityIcon />,
      smallIcon: <BookmarkIcon />,
      title: "Thoroughly battle-tested",
      description: "Experience the simplicity of unsupervised learning. No special datasets or manual labelling are required. Canopy has been battle-tested on the world's most challenging datasets and effortlessly learns unique behaviours from available data, adapting to any environment without added complexities."
    },
    {
      icon: <NotificationsActiveIcon />,
      smallIcon: <LockIcon />,
      title: "Reliable alarms within dynamic context",
      description: "Too many false positives? Shift from traditional threshold-based alarms and focus on relevant signals only. Canopy's context-sensitive alarms consider actual operating conditions in real-time and allow you to prioritise critical issues, directly impacting your bottom-line revenue."
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1410px', mx: 'auto' }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 3,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '4px',
                backgroundColor: '#FFD700',
                borderRadius: '2px',
              }
            }}
          >
            Why choose Canopy
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Canopy helps you prioritise the issues that prevent your operations from running optimally. 
            If your machines are speaking to you through their thousands of sensors, we can help you hear them.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 3, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ flex: 1, minWidth: { xs: '100%', md: 'auto' } }}>
              <StyledCard>
                <StyledCardContent>
                  <IconContainer>
                    {feature.icon}
                    <SmallIcon>
                      {feature.smallIcon}
                    </SmallIcon>
                  </IconContainer>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      fontSize: '1.3rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666',
                      lineHeight: 1.6,
                      fontSize: '1rem',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </StyledCardContent>
              </StyledCard>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseSection; 