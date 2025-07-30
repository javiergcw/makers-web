"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { colors } from '../utils/color';

const TestimonialSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: colors.secondary.peach, // Fondo melocotón
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: '1284px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Contenedor del testimonio */}
        <Box
          sx={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto',
            p: { xs: 4, md: 6 },
          }}
        >
          {/* Comillas decorativas */}
          <Typography
            variant="h1"
            sx={{
              fontSize: '4rem',
              color: colors.primary.orange,
              opacity: 0.1,
              position: 'absolute',
              top: '10px',
              left: '20px',
              fontFamily: 'serif',
              lineHeight: 1,
            }}
          >
            "
          </Typography>

          {/* Texto del testimonio */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: '#000000',
              textAlign: 'center',
              lineHeight: 1.6,
              mb: 4,
              fontStyle: 'italic',
              position: 'relative',
              zIndex: 1,
              px: { xs: 1, md: 2 },
            }}
          >
            Working with Jungle allowed us to validate and obtain a more robust power forecasting estimation for a challenging wind project in the Indian Ocean that EDF Renouvelables is working on.
          </Typography>

          {/* Información del autor */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 2,
              mt: 3,
            }}
          >
            {/* Avatar */}
            <Avatar
              sx={{
                width: 48,
                height: 48,
                backgroundColor: colors.primary.orange,
                color: '#ffffff',
              }}
            >
              <PersonIcon />
            </Avatar>

            {/* Información del autor */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#000000',
                  fontSize: '1.1rem',
                  mb: 0.5,
                }}
              >
                Noé Le Guerrannic
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#000000',
                  fontSize: '0.95rem',
                  opacity: 0.8,
                }}
              >
                Chef de projet ingénierie, EDF Renouvelables
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialSection; 