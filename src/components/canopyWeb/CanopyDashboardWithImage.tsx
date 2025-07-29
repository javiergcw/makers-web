"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { colors } from '../utils/color';

const CanopyDashboardWithImage: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: { xs: 'auto', lg: '600px' },
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        overflow: 'hidden',
      }}
    >
      {/* Sección de imagen */}
      <Box
        sx={{
          flex: { xs: 'none', lg: 1 },
          position: 'relative',
          height: { xs: '250px', sm: '300px', md: '350px', lg: '600px' },
          width: { xs: '100%', lg: '50%' },
          borderRadius: { 
            xs: '0', 
            sm: '0 0 20px 20px', 
            lg: '0 50px 50px 0' 
          },
          overflow: 'hidden',
          order: { xs: 1, lg: 1 },
        }}
      >
        <Image
          src="/image/imagen2.png"
          alt="Dashboard de datos Canopy"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
        />
      </Box>

      {/* Sección de contenido */}
      <Box
        sx={{
          flex: { xs: 'none', lg: 1 },
          backgroundColor: '#FFFFFF',
          padding: { 
            xs: '2rem 1.5rem', 
            sm: '3rem 2rem', 
            md: '4rem 3rem', 
            lg: '6rem' 
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: { xs: 'auto', lg: '600px' },
          width: { xs: '100%', lg: '50%' },
          order: { xs: 2, lg: 2 },
        }}
      >
        <Box sx={{ 
          maxWidth: { xs: '100%', lg: '500px' },
          width: '100%',
        }}>
          {/* Título principal */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { 
                xs: '1.75rem', 
                sm: '2rem', 
                md: '2.5rem', 
                lg: '3rem', 
                xl: '3.5rem' 
              },
              fontWeight: 700,
              color: '#333333',
              mb: { xs: 2, sm: 3, lg: 4 },
              lineHeight: { xs: 1.1, sm: 1.2 },
              textAlign: { xs: 'center', lg: 'left' },
            }}
          >
            A powerful AI trained{' '}
            <Box
              component="span"
              sx={{
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: { xs: '2px', sm: '3px', lg: '5px' },
                  left: '0',
                  width: '100%',
                  height: { xs: '3px', sm: '3px', lg: '4px' },
                  backgroundColor: '#FFD700',
                  zIndex: -1,
                },
              }}
            >
              on your data
            </Box>
          </Typography>

          {/* Párrafo descriptivo */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { 
                xs: '0.875rem', 
                sm: '1rem', 
                md: '1.125rem' 
              },
              color: '#666666',
              lineHeight: { xs: 1.5, sm: 1.6 },
              mb: { xs: 3, sm: 4, lg: 6 },
              textAlign: { xs: 'center', lg: 'left' },
            }}
          >
            Canopy, Jungle's AI solution, leverages massive streams of historical data from existing sensors to understand the normal behaviour of your machines. By comparing the normality projections with actual behaviour, you get a clear picture of your machine's current performance and future health.
          </Typography>

          {/* Botón call-to-action */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: { xs: 'center', lg: 'flex-start' },
            width: '100%',
          }}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: colors.primary.orange,
                color: colors.neutral.white,
                padding: { 
                  xs: '10px 24px', 
                  sm: '12px 28px', 
                  lg: '12px 32px' 
                },
                borderRadius: '8px',
                fontSize: { xs: '0.875rem', sm: '1rem' },
                fontWeight: 500,
                textTransform: 'none',
                minWidth: { xs: '140px', sm: '160px' },
                '&:hover': {
                  backgroundColor: colors.accent.yellow,
                  color: 'black',
                },
                boxShadow: 'none',
                width: { xs: 'auto', sm: 'auto' },
              }}
            >
              Get started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CanopyDashboardWithImage;