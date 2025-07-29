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
import { colors } from '../utils/color';

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
    <Box sx={{ 
      py: { xs: 4, sm: 6, md: 8 }, 
      backgroundColor: colors.secondary.peach 
    }}>
      <Container maxWidth={false} sx={{ 
        maxWidth: '1280px', 
        mx: 'auto', 
        px: { xs: 2, sm: 3, md: 0 } 
      }}>
        {/* Sección superior: Testimonios + Imagen de lámpara */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: 3, sm: 4, md: 4 }, 
          mb: { xs: 4, sm: 6, md: 8 } 
        }}>
          {/* Sección de Testimonios */}
          <Box sx={{ 
            flex: { xs: '1', md: '1 1 50%' }, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center' 
          }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold',
                color: '#333',
                mb: { xs: 3, sm: 4 },
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }
              }}
            >
              Why our customers love Jungle
            </Typography>
            
            <Box sx={{ position: 'relative', mb: { xs: 3, sm: 4 } }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#333',
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                  fontStyle: 'italic',
                  mb: { xs: 2, sm: 3 }
                }}
              >
                "{currentTestimonial.quote}"
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ 
                  bgcolor: '#e0e0e0', 
                  width: { xs: 35, sm: 40 }, 
                  height: { xs: 35, sm: 40 } 
                }}>
                  <PersonIcon />
                </Avatar>
                <Box>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#333',
                      fontSize: { xs: '0.95rem', sm: '1rem' }
                    }}
                  >
                    {currentTestimonial.author}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#666',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' }
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
          <Box sx={{ 
            flex: { xs: '1', md: '1 1 50%' }, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
            <Box 
              sx={{ 
                position: 'relative',
                width: '100%',
                maxWidth: { xs: 300, sm: 350, md: 400 },
                height: { xs: 200, sm: 250, md: 300 },
                borderRadius: { xs: 1, md: 2 },
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
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: 3, sm: 4, md: 4 } 
        }}>
          {/* Imagen del caso de estudio */}
          <Box sx={{ flex: { xs: '1', md: '1 1 50%' } }}>
            <Box 
              sx={{ 
                position: 'relative',
                width: '100%',
                height: { xs: 200, sm: 250, md: 300 },
                borderRadius: { xs: 1, md: 2 },
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
                  top: { xs: 12, sm: 16 },
                  left: { xs: 12, sm: 16 },
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                  height: { xs: 24, sm: 32 }
                }}
              />
            </Box>
          </Box>

          {/* Contenido del caso de estudio */}
          <Box sx={{ 
            flex: { xs: '1', md: '1 1 50%' }, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center' 
          }}>
            <Typography 
              variant="h4" 
              component="h3" 
              sx={{ 
                fontWeight: 'bold',
                color: '#333',
                mb: { xs: 2, sm: 2 },
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.8rem' },
                lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }
              }}
            >
              {caseStudy.title}
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#666',
                lineHeight: 1.6,
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' }
              }}
            >
              {caseStudy.description}
            </Typography>

            <Link href={caseStudy.buttonLink} style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: colors.primary.orange,
                  color: colors.neutral.white,
                  fontWeight: 'bold',
                  px: { xs: 2, sm: 3 },
                  py: { xs: 1, sm: 1.5 },
                  borderRadius: { xs: 1, md: 2 },
                  textTransform: 'none',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
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