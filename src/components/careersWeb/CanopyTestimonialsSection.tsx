import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { colors } from '../utils/color';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Jerónimo Mendes',
    title: 'Software Developer',
    quote: 'My journey at Jungle, from my initial role as an intern to my current position as a Software Developer, has been a profound experience of growth.',
    image: '/image/testimonial1.jpg' // Placeholder - you'll need to add actual images
  },
  {
    name: 'Mafalda Rodrigues',
    title: 'Operations Manager',
    quote: 'Working alongside this great team has been hands down the best part of being at Jungle.',
    image: '/image/testimonial2.jpg' // Placeholder - you'll need to add actual images
  },
  {
    name: 'Nelson Rodrigues',
    title: 'Software Engineer',
    quote: 'To this day, I continue growing with Jungle and will keep doing so as I bel in our vision to help improve machinery performance and optimise the use resources on a global scale.',
    image: '/image/testimonial3.jpg' // Placeholder - you'll need to add actual images
  }
];

const CanopyTestimonialsSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: colors.secondary.peach, // Light gray background
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 }
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto'
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: '#333',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: { xs: 4, md: 6 },
            lineHeight: 1.2
          }}
        >
          Lo que dice nuestro equipo
        </Typography>
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 4 },
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 33.333%' },
              maxWidth: { xs: '100%', md: '350px' },
              minWidth: { xs: '100%', md: '300px' }
            }}
          >
            <Paper
              elevation={2}
              sx={{
                borderRadius: 3,
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{
                  width: 80,
                  height: 80,
                  mb: 3,
                  border: '3px solid #f0f0f0'
                }}
              />
              
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  color: '#333',
                  mb: 1,
                  lineHeight: 1.2
                }}
              >
                {testimonial.name}
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontSize: '0.9rem',
                  mb: 3,
                  fontWeight: 400
                }}
              >
                {testimonial.title}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: '#444',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                "{testimonial.quote}"
              </Typography>
            </Paper>
          </Box>
        ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CanopyTestimonialsSection;
