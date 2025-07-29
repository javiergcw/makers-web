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
import { colors } from '../utils/color';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: theme.spacing(3), // 24px por defecto
  height: '100%',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  border: 'none',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4), // 32px en desktop
  },
  
  '&:hover': {
    backgroundColor: colors.primary.orange,
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(254, 83, 55, 0.3)',
    
    '& .card-title, & .card-description': {
      color: 'white',
    },
    
    '& .icon-container': {
      backgroundColor: 'white',
      borderColor: 'white',
      
      '& .MuiSvgIcon-root': {
        color: colors.primary.orange,
      },
    },
    
    '& .small-icon': {
      backgroundColor: 'white',
      
      '& .MuiSvgIcon-root': {
        color: colors.primary.orange,
      },
    },
  },
  
  // Mejorar experiencia táctil en móvil
  [theme.breakpoints.down('md')]: {
    '&:active': {
      transform: 'scale(0.98)',
      backgroundColor: colors.primary.orange,
      
      '& .card-title, & .card-description': {
        color: 'white',
      },
      
      '& .icon-container': {
        backgroundColor: 'white',
        borderColor: 'white',
        
        '& .MuiSvgIcon-root': {
          color: colors.primary.orange,
        },
      },
      
      '& .small-icon': {
        backgroundColor: 'white',
        
        '& .MuiSvgIcon-root': {
          color: colors.primary.orange,
        },
      },
    },
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: 'white',
  border: '2px solid #e0e0e0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2), // 16px por defecto
  position: 'relative',
  transition: 'all 0.3s ease-in-out',
  
  [theme.breakpoints.up('md')]: {
    width: '60px',
    height: '60px',
    marginBottom: theme.spacing(3), // 24px en desktop
  },
  
  '& .MuiSvgIcon-root': {
    fontSize: '24px',
    color: '#666',
    transition: 'all 0.3s ease-in-out',
    
    [theme.breakpoints.up('md')]: {
      fontSize: '28px',
    },
  },
}));

const SmallIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-4px',
  right: '-4px',
  width: '18px',
  height: '18px',
  borderRadius: '50%',
  backgroundColor: '#666',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  [theme.breakpoints.up('md')]: {
    width: '20px',
    height: '20px',
  },
  
  '& .MuiSvgIcon-root': {
    fontSize: '10px',
    color: 'white',
    
    [theme.breakpoints.up('md')]: {
      fontSize: '12px',
    },
  },
}));

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
        backgroundColor: colors.secondary.peach,
        py: { xs: 4, md: 8 }, // Reducir padding vertical en móvil
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1280px', mx: 'auto', px: { xs: 2, md: 3 } }}>
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 300,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3.5rem' },
              mb: { xs: 2, md: 3 },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: '80px', md: '120px' },
                height: '4px',
                backgroundColor: colors.primary.orange,
                borderRadius: '2px',
              }
            }}
          >
            Why choose Canopy
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              color: '#666',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              px: { xs: 1, md: 0 }, // Agregar padding horizontal en móvil
            }}
          >
            Canopy helps you prioritise the issues that prevent your operations from running optimally. 
            If your machines are speaking to you through their thousands of sensors, we can help you hear them.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          gap: { xs: 2, md: 3 }, 
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ 
              flex: 1, 
              minWidth: { xs: '100%', md: 'auto' },
              mb: { xs: 2, md: 0 } // Agregar margin bottom en móvil
            }}>
              <StyledCard>
                <StyledCardContent>
                  <IconContainer className="icon-container">
                    {feature.icon}
                    <SmallIcon className="small-icon">
                      {feature.smallIcon}
                    </SmallIcon>
                  </IconContainer>
                  <Typography
                    variant="h5"
                    component="h3"
                    className="card-title"
                    sx={{
                      fontWeight: 700,
                      mb: { xs: 1.5, md: 2 },
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                      lineHeight: 1.3,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="card-description"
                    sx={{
                      color: ' #666',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
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