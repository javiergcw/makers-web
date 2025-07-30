"use client";

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { colors } from '../utils/color';

interface Testimonial {
  id: number;
  text: string;
}

const TestimonialsCarousel: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "I can approach my manager / mentor whenever need to"
    },
    {
      id: 2,
      text: "I feel valued and appreciated in my role"
    },
    {
      id: 3,
      text: "I have opportunities to grow and develop my skills"
    },
    {
      id: 4,
      text: "The company culture aligns with my personal values"
    },
    {
      id: 5,
      text: "I feel supported by my team and colleagues"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextVisible(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsTextVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Box
      sx={{
        backgroundColor: colors.neutral.white,
        py: { xs: 8, md: 15 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
                     {/* Título principal */}
           <Typography
             variant="h1"
             sx={{
               fontSize: { xs: '2.5rem', md: '3rem' },
               fontWeight: 300,
               color: '#000000',
               mb: 4,
               lineHeight: 1.2
             }}
           >
             Words that makes us blush
           </Typography>

           {/* Descripción */}
           <Typography
             variant="body1"
             sx={{
               fontSize: { xs: '1rem', md: '1.2rem' },
               color: '#000000',
               mb: 6,
               lineHeight: 1.6,
               maxWidth: '600px',
               opacity: 0.8
             }}
           >
             We deploy internal surveys, listen to our team, and continuously work on our culture based on this feedback. These are some of the statements that Junglers agree with*.
           </Typography>

                     {/* Bloque amarillo con testimonio */}
           <Paper
             elevation={0}
             sx={{
               backgroundColor: colors.secondary.peach,
               borderRadius: '16px',
               p: { xs: 4, md: 6 },
               mb: 4,
               maxWidth: '600px',
               width: '100%',
            
             }}
           >
                           <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 300,
                  color: '#000000',
                  lineHeight: 1.4,
                  textAlign: 'center',
                  opacity: isTextVisible ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              >
               "{testimonials[currentTestimonial].text}"
             </Typography>
           </Paper>

                     {/* Disclaimer */}
           <Typography
             variant="caption"
             sx={{
               fontSize: '0.875rem',
               color: '#000000',
               opacity: 0.6,
               textAlign: 'center',
               maxWidth: '500px'
             }}
           >
             *based on all Employee Engagement Surveys implemented at Jungle so far.
           </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsCarousel; 