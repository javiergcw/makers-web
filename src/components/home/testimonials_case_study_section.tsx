'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Container, 
  IconButton,
  Avatar,
  Button,
  Chip
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

interface CaseStudy {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
}

const TestimonialsCaseStudySection: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "Jungle has been a perfect partner, understanding and helping us improve the way we manage our assets right from the start. This ongoing collaboration reflects Jungle's commitment to understanding and addressing the complex challenges in our industry, consistently delivering innovative solutions that align with our operational goals.",
      author: "João Miranda",
      position: "Wind Department Manager",
      company: "Generg"
    }
  ];

  const caseStudy: CaseStudy = {
    title: "Case: Canopy detection prevents gearbox failure",
    description: "The gearbox is a complex component that is hard to monitor using conventional methods. Learn how Canopy enabled a wind customer to identify a failing component in time and promptly replace it, preventing production loss.",
    date: "October 17, 2023",
    imageSrc: "/home/homemakers.png",
    buttonText: "Read case study →",
    buttonLink: "/case-studies/canopy-detection"
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        {/* Sección superior: Testimonios + Imagen de lámpara */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 8 }}>
          {/* Sección de Testimonios */}
          <Box sx={{ flex: { xs: '1', md: '1 1 50%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold',
                color: '#333',
                mb: 4,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Why our customers love Jungle
            </Typography>
            
            <Box sx={{ position: 'relative', mb: 4 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#333',
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  mb: 3
                }}
              >
                "{currentTestimonial.quote}"
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: '#e0e0e0', width: 40, height: 40 }}>
                  <PersonIcon />
                </Avatar>
                <Box>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#333'
                    }}
                  >
                    {currentTestimonial.author}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#666',
                      fontSize: '0.9rem'
                    }}
                  >
                    {currentTestimonial.position}, {currentTestimonial.company}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Controles de navegación */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                onClick={handlePrevTestimonial}
                sx={{ 
                  color: '#333',
                  '&:hover': { backgroundColor: '#f0f0f0' }
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <IconButton 
                onClick={handleNextTestimonial}
                sx={{ 
                  color: '#333',
                  '&:hover': { backgroundColor: '#f0f0f0' }
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Imagen de la lámpara */}
          <Box sx={{ flex: { xs: '1', md: '1 1 50%' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box 
              sx={{ 
                position: 'relative',
                width: '100%',
                maxWidth: 400,
                height: 300,
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <Image
                src="/image/imagen4.png"
                alt="Lámpara decorativa"
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Box>
        </Box>

        {/* Sección inferior: Caso de Estudio */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Imagen del caso de estudio */}
          <Box sx={{ flex: { xs: '1', md: '1 1 50%' } }}>
            <Box 
              sx={{ 
                position: 'relative',
                width: '100%',
                height: 300,
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <Image
                src={caseStudy.imageSrc}
                alt="Wind turbine gearbox"
                fill
                style={{ objectFit: 'cover' }}
              />
              <Chip
                label={caseStudy.date}
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  fontSize: '0.8rem'
                }}
              />
            </Box>
          </Box>

          {/* Contenido del caso de estudio */}
          <Box sx={{ flex: { xs: '1', md: '1 1 50%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography 
              variant="h4" 
              component="h3" 
              sx={{ 
                fontWeight: 'bold',
                color: '#333',
                mb: 2,
                fontSize: { xs: '1.5rem', md: '1.8rem' }
              }}
            >
              {caseStudy.title}
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#666',
                lineHeight: 1.6,
                mb: 3,
                fontSize: '1rem'
              }}
            >
              {caseStudy.description}
            </Typography>

            <Link href={caseStudy.buttonLink} style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FFD700',
                  color: '#333',
                  fontWeight: 'bold',
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#FFC700'
                  }
                }}
              >
                {caseStudy.buttonText}
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsCaseStudySection; 