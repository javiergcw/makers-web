'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { colors } from '../utils/color';
import {
  Computer as ComputerIcon,
  Group as GroupIcon,
  TrendingUp as TrendingUpIcon,
  RocketLaunch as RocketIcon,
  Favorite as HealthIcon,
  Receipt as StockIcon,
} from '@mui/icons-material';

// Styled components
const StyledSection = styled(Box)(({ theme }) => ({
  backgroundColor: colors.primary.orange,
  padding: theme.spacing(8, 0),
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  fontWeight: 700,
  fontSize: '2.5rem',
  color: colors.neutral.white,
  '& .underlined': {
    textDecoration: 'underline',
    textDecorationColor: colors.neutral.white,
    textDecorationThickness: '3px',
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  height: '280px',
  width: '350px',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'left',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  paddingTop: theme.spacing(4),
}));

const StyledIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem',
    color: '#666666',
    backgroundColor: '#F5F5F5',
    borderRadius: '50%',
    padding: theme.spacing(1),
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.25rem',
  color: '#000000',
  marginBottom: theme.spacing(1),
}));

const StyledCardDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  color: '#000000',
  lineHeight: 1.6,
}));

// Data for benefits
const benefitsData = [
  {
    icon: ComputerIcon,
    title: 'Remote & flexible',
    description: 'Live the life you want. Enjoy flexible working hours and the opportunity to work from where you want.',
  },
  {
    icon: GroupIcon,
    title: 'Annual off-sites',
    description: 'Enjoy the ride. Be a part of regular virtual team activities and join us for our annual company get-togethers.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Tailored mentorship',
    description: 'Don\'t stay still. Be assigned a personal mentor, and grow your skills in the direction that you want.',
  },
  {
    icon: RocketIcon,
    title: 'Outstanding arsenal',
    description: 'Take advantage of a modern work environment, and a great tool stack that enables remote collaboration.',
  },
  {
    icon: HealthIcon,
    title: 'Health insurance',
    description: 'Be well and stay well. We offer private health insurance to all full-time employees.',
  },
  {
    icon: StockIcon,
    title: 'Stock Appreciation Rights',
    description: 'We reward people for their hard work. Enjoy ownership for making the Jungle grow.',
  },
];

const BenefitsPerksSection: React.FC = () => {
  return (
    <StyledSection>
      <Container maxWidth="lg">
        <StyledTitle variant="h2">
          Our <span className="underlined">perks</span> and <span className="underlined">benefits</span>
        </StyledTitle>
        
        <Grid container spacing={4} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {benefitsData.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Grid key={index}>
                <StyledCard>
                  <StyledCardContent>
                    <StyledIcon>
                      <IconComponent />
                    </StyledIcon>
                    <StyledCardTitle variant="h6">
                      {benefit.title}
                    </StyledCardTitle>
                    <StyledCardDescription variant="body2">
                      {benefit.description}
                    </StyledCardDescription>
                  </StyledCardContent>
                </StyledCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default BenefitsPerksSection; 