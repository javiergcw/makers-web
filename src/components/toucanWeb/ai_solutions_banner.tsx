"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Container from '@mui/material/Container';
import { colors, getColorWithOpacity } from '../utils/color';

const PowerForecastingBanner: React.FC = () => {
  return (
    <Box sx={{
      backgroundColor: colors.secondary.peach,
    }}>
             <Container maxWidth={false} sx={{
         pb: 12,
         pt: 12,
         overflow: 'hidden',
         minHeight: 'auto',
         position: 'relative',
         background: `linear-gradient(180deg, 
         ${colors.primary.orange} 0%, 
         #e63946 30%, 
         #dc2f3d 60%, 
         #d12432 100%)`,
         borderRadius: '0 0 50px 50px',
       }}>

        <Box
          sx={{
            maxWidth: '1280px',
            mx: 'auto',
            width: '100%',
            minHeight: '400px',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 6 },
            zIndex: 2,
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* Contenido de texto - Lado izquierdo */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: '100%', md: '50%' },
            }}
          >
            {/* Título principal */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                color: '#ffffff',
                textAlign: { xs: 'center', md: 'left' },
                mb: 2,
                lineHeight: 1.1,
                maxWidth: { xs: '90%', md: '100%' },
                mx: { xs: 'auto', md: 0 },
              }}
            >
              <Box component="span" sx={{ color: '#ffffff' }}>
                Accurate{' '}
              </Box>
                             <Box component="span" sx={{ color: colors.accent.yellow }}>
                 power
               </Box>
               <br />
               <Box component="span" sx={{ color: colors.accent.yellow }}>
                 forecasting{' '}
              </Box>
              <Box component="span" sx={{ color: '#ffffff' }}>
                at
              </Box>
              <br />
              <Box component="span" sx={{ color: '#ffffff' }}>
                scale
              </Box>
            </Typography>

            {/* Párrafo descriptivo */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                color: '#f3f4f6',
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: '800px',
                mb: 4,
                lineHeight: 1.6,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: { xs: '50%', md: '0' },
                  transform: { xs: 'translateX(-50%)', md: 'none' },
                  width: '80px',
                  height: '2px',
                                     background: `linear-gradient(90deg, transparent, ${getColorWithOpacity(colors.accent.yellow, 0.5)}, transparent)`,
                },
              }}
            >
              Accuracy meets automation. Get the best of both worlds and optimise the profitability of your renewable assets.
            </Typography>

            {/* Botón de call-to-action */}
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                color: '#1f2937',
                borderRadius: '8px',
                px: 4,
                py: 1.5,
                fontSize: '1.125rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                alignSelf: { xs: 'center', md: 'flex-start' },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  transition: 'left 0.5s',
                },
                '&:hover': {
                  background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                  '&::before': {
                    left: '100%',
                  },
                },
              }}
            >
              Get started →
            </Button>
          </Box>

          {/* Imagen - Lado derecho */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              alignItems: 'center',
              maxWidth: { xs: '100%', md: '50%' },
            }}
          >
            <Image
              src="/image/home_imagen.png"
              alt="AI Solutions Banner Image"
              width={1000}
              height={700}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '600px',
                maxHeight: '500px',
                borderRadius: '10px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PowerForecastingBanner; 