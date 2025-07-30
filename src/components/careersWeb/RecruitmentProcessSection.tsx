'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '../utils/color';

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
  marginBottom: theme.spacing(2),
  fontWeight: 300,
  fontSize: '2.5rem',
  color: colors.neutral.white,
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  fontSize: '1.1rem',
  color: colors.neutral.white,
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: 1.6,
}));

const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(4),
  maxWidth: '1000px',
  margin: '0 auto',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  width: '450px',
  minHeight: '200px',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'left',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}));

const StepBadge = styled(Box)(({ theme }) => ({
  backgroundColor: colors.secondary.peach,
  color: '#000000',
  padding: theme.spacing(0.5, 1.5),
  borderRadius: '8px',
  fontSize: '0.9rem',
  fontWeight: 300,
  display: 'inline-block',
  marginBottom: theme.spacing(2),
  width: 'fit-content',
}));

const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  fontSize: '1rem',
  color: '#000000',
  marginBottom: theme.spacing(2),
}));

const StyledCardDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  color: '#666666',
  lineHeight: 1.6,
}));

// Data for recruitment process steps
const recruitmentSteps = [
  {
    step: 'Step 1',
    title: 'HR screen call',
    description: 'Your CV caught our eye, now what? We\'ll plan a short video call with HR to talk about your experience and your motivation to apply, and to answer any questions you may have about Jungle and the team.',
  },
  {
    step: 'Step 2',
    title: 'Technical interview',
    description: 'In this round, you will meet a member of the team you\'re applying to, and get to showcase your technical knowledge and skills.',
  },
  {
    step: 'Step 3',
    title: 'Take-home assignment or live case',
    description: 'Depending on the position you\'re applying to, we might ask you to complete an assignment, after which we\'ll book an interview with the team to go over the results, or do a live case.',
  },
  {
    step: 'Step 4',
    title: 'Culture fit',
    description: 'Finally! You\'ll have the opportunity to chat with a member of the leadership team to make sure this is a good fit for everyone. No need to prepare anything, just come ready for a friendly conversation.',
  },
];

const RecruitmentProcessSection: React.FC = () => {
  return (
    <StyledSection>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <StyledTitle>
            Our recruitment process
          </StyledTitle>
          <StyledDescription>
            We understand how frustrating it is to be left in the dark. That's why we want to keep you informed every step of the way. Although each hiring pipeline is unique, this is more or less what you can expect.
          </StyledDescription>
        </Box>

        <CardsContainer>
          {recruitmentSteps.map((step, index) => (
            <StyledCard key={index}>
              <StyledCardContent>
                <StepBadge>{step.step}</StepBadge>
                <StyledCardTitle>{step.title}</StyledCardTitle>
                <StyledCardDescription>{step.description}</StyledCardDescription>
              </StyledCardContent>
            </StyledCard>
          ))}
        </CardsContainer>
      </Container>
    </StyledSection>
  );
};

export default RecruitmentProcessSection; 