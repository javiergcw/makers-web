"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
          minHeight: '600px',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          maxWidth: '1410px',
          margin: '0 auto',
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
            px: { xs: 3, md: 6, lg: 8 },
            py: { xs: 4, md: 6 },
            textAlign: { xs: 'center', lg: 'left' },
          }}
        >
          {/* Título principal */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 700,
              color: '#000000',
              mb: 3,
              lineHeight: 1.1,
              maxWidth: '600px',
            }}
          >
            Complexity made simple
          </Typography>

          {/* Párrafo descriptivo */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              color: '#666666',
              mb: 4,
              maxWidth: '500px',
              lineHeight: 1.6,
            }}
          >
            Our AI solutions learn from your machine's normal behaviour and historical data, 
            identifying underperformance and detecting machine failures ahead of time.
          </Typography>

          {/* Botón "Learn more" */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFD700',
              color: '#000000',
              borderRadius: '8px',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#FFC700',
                boxShadow: 'none',
              },
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            Learn more
            <ArrowForwardIcon sx={{ fontSize: '1.2rem' }} />
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
            minHeight: { xs: '400px', lg: '600px' },
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
              p: 2,
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '70%',
                maxWidth: '800px',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
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