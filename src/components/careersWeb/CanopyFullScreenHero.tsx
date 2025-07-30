"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { colors } from '../utils/color';

const CanopyFullScreenHero: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: 'url(/image/imagen11.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        },
      }}
    >
      {/* Overlay adicional para mejorar la legibilidad */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
          zIndex: 2,
        }}
      />

      {/* Contenido principal */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          color: '#ffffff',
          px: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            maxWidth: '950px',
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            mb: 10,
          }}
        >
          {/* Título principal */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem',  md:'3rem',},
              fontWeight: 300,
              lineHeight: 1.2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Ayudamos a las personas detrás de las máquinas a llevar a cabo sus misiones que cambian el mundo
          </Typography>

          {/* Subtítulo */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              fontWeight: 400,
              maxWidth: '600px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              opacity: 0.9,
              lineHeight: 1.5,
            }}
          >
            En Canopy, personas de todo el mundo están uniendo sus mentes para mejorar el rendimiento de las máquinas en industrias impactantes, contribuyendo a algunos de los desafíos más importantes de esta generación.
          </Typography>

          {/* Segundo párrafo */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              fontWeight: 400,
              mb: 3,
              maxWidth: '600px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              opacity: 0.9,
              lineHeight: 1.5,
            }}
          >
            Únete a nosotros desde cualquier parte del mundo y ayúdanos a reducir las ineficiencias de la industria y acelerar la transición mundial hacia las energías renovables.
          </Typography>

          {/* Botones de acción */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                background: colors.primary.orange,
                color: '#ffffff',
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                px: 3,
                py: 1.2,
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                '&:hover': {
                  background: colors.accent.yellow,
                  boxShadow: '0 12px 35px rgba(0,0,0,0.4)',
                  transform: 'translateY(-2px)',
                  color: '#000000',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Ver roles abiertos →
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CanopyFullScreenHero; 