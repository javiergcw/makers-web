"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '../utils/color';

const ComplexitySection: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        background: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          width: '100%',
          minHeight: { xs: 'auto', lg: '600px' },
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          maxWidth: '1280px',
          margin: '0 auto',
          mx: 'auto',
        }}
      >
        {/* Sección izquierda - Texto y botón */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: { xs: 'center', lg: 'flex-start' },
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 3, sm: 4, md: 6 },
            textAlign: { xs: 'center', lg: 'left' },
            order: { xs: 2, lg: 1 },
          }}
        >
          {/* Título principal */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 300,
              color: '#000000',
              mb: { xs: 2, sm: 3 },
              lineHeight: { xs: 1.1, sm: 1.2, md: 1 },
              maxWidth: '600px',
              px: { xs: 1, sm: 0 },
            }}
          >
            Complexity made simple
          </Typography>

          {/* Párrafo descriptivo */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem' },
              color: '#666666',
              mb: { xs: 3, sm: 4 },
              maxWidth: '500px',
              lineHeight: { xs: 1.5, sm: 1.6 },
              px: { xs: 1, sm: 0 },
            }}
          >
            Our AI solutions learn from your machine's normal behaviour and historical data, 
            identifying underperformance and detecting machine failures ahead of time.
          </Typography>

          {/* Botón "Learn more" */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.primary.orange,
              color: colors.neutral.white,
              borderRadius: '8px',
              px: { xs: 3, sm: 4 },
              py: { xs: 1.25, sm: 1.5 },
              fontSize: { xs: '0.95rem', sm: '1rem' },
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: 'none',
              minHeight: { xs: '48px', sm: 'auto' },
              '&:hover': {
                backgroundColor: '#FFC700',
                boxShadow: 'none',
              },
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              width: { xs: 'auto', sm: 'fit-content' },
            }}
          >
            Learn more
            <ArrowForwardIcon sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem' } }} />
          </Button>
        </Box>

        {/* Sección derecha - Video de YouTube */}
        <Box
          sx={{
            flex: 1,
            background: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            minHeight: { xs: '250px', sm: '300px', md: '400px', lg: '600px' },
            order: { xs: 1, lg: 2 },
          }}
        >
          {/* Video de YouTube embebido */}
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 2, sm: 3 },
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: { xs: '200px', sm: '250px', md: '300px', lg: '70%' },
                maxWidth: '800px',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                aspectRatio: { xs: '16/9', lg: 'auto' },
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/3lnp6mdIf_o"
                title="Jungle AI Solutions"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '8px',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ComplexitySection; 