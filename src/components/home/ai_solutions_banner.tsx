"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

const AiSolutionsBanner: React.FC = () => {
  return (
         <Box
       sx={{
         width: '100%',
         background: '#FFFFFF', // Fondo blanco
         minHeight: '400px',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         position: 'relative',
         px: { xs: 2, md: 4 },
         py: { xs: 4, md: 6 },
       }}
     >
      {/* Banner superior con "NEW" */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          background: '#000000',
          borderRadius: '999px',
          px: 2,
          py: 0.5,
          mb: 3,
          maxWidth: 400,
          minHeight: 36,
        }}
      >
        <Box
          sx={{
            background: '#0066FF',
            borderRadius: '999px',
            px: 1,
            py: 0.25,
            mr: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.75rem',
              textTransform: 'uppercase',
            }}
          >
            NEW
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: '#FFFFFF',
            fontWeight: 500,
            fontSize: '0.875rem',
          }}
        >
          Jungle optimises North Star vessels! →
        </Typography>
      </Box>

             {/* Título principal */}
       <Typography
         variant="h1"
         sx={{
           fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
           fontWeight: 700,
           color: '#000000',
           textAlign: 'center',
           mb: 2,
           lineHeight: 1.1,
           maxWidth: { xs: '90%', md: '800px', lg: '900px' },
           mx: 'auto',
         }}
       >
         The AI solutions taking machine{' '}
        
           solutions
      
         performance to the next level
       </Typography>

      {/* Párrafo descriptivo */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '1rem', md: '1.125rem' },
          color: '#000000',
          textAlign: 'center',
          maxWidth: '800px',
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Gain unparalleled insights into your assets' real-time performance.
        <br />
        Increase your production, prevent downtime and losses, and enjoy
        <br />
        peace of mind through operational simplicity with Jungle's solutions.
      </Typography>

             {/* Botón de call-to-action */}
       <Button
         variant="contained"
         sx={{
           background: '#000000',
           color: '#FFFFFF',
           borderRadius: '8px',
           px: 4,
           py: 1.5,
           fontSize: '1.125rem',
           fontWeight: 600,
           textTransform: 'none',
           boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
           '&:hover': {
             background: '#333333',
             boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
           },
         }}
       >
         Get started →
       </Button>

      {/* Iconos decorativos en las esquinas */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            background: '#FFFFFF',
            border: '3px solid #000000',
            borderRadius: '4px',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '8px',
              left: '8px',
              width: '4px',
              height: '4px',
              background: '#000000',
              borderRadius: '50%',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '8px',
              right: '8px',
              width: '4px',
              height: '4px',
              background: '#000000',
              borderRadius: '50%',
            },
          }}
        >
          {/* Alas */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '-15px',
              transform: 'translateY(-50%)',
              width: '20px',
              height: '8px',
              background: '#000000',
              borderRadius: '4px',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '2px',
                width: '4px',
                height: '4px',
                background: '#000000',
                borderRadius: '50%',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: '-15px',
              transform: 'translateY(-50%)',
              width: '20px',
              height: '8px',
              background: '#000000',
              borderRadius: '4px',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-2px',
                right: '2px',
                width: '4px',
                height: '4px',
                background: '#000000',
                borderRadius: '50%',
              },
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            background: '#FFFFFF',
            border: '3px solid #000000',
            borderRadius: '4px',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '8px',
              left: '8px',
              width: '4px',
              height: '4px',
              background: '#000000',
              borderRadius: '50%',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '8px',
              right: '8px',
              width: '4px',
              height: '4px',
              background: '#000000',
              borderRadius: '50%',
            },
          }}
        >
          {/* Alas */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '-15px',
              transform: 'translateY(-50%)',
              width: '20px',
              height: '8px',
              background: '#000000',
              borderRadius: '4px',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '2px',
                width: '4px',
                height: '4px',
                background: '#000000',
                borderRadius: '50%',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: '-15px',
              transform: 'translateY(-50%)',
              width: '20px',
              height: '8px',
              background: '#000000',
              borderRadius: '4px',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-2px',
                right: '2px',
                width: '4px',
                height: '4px',
                background: '#000000',
                borderRadius: '50%',
              },
            }}
          />
        </Box>
      </Box>

      {/* Imagen especificada */}
      <Box
        sx={{
          mt: 4,
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/image/home_imagen.png"
          alt="AI Solutions Banner Image"
          width={600}
          height={300}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '600px',
          }}
        />
      </Box>
    </Box>
  );
};

export default AiSolutionsBanner; 