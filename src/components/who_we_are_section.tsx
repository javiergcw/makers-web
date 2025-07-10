import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const WhoWeAreSection: React.FC = () => {
  return (
    <Box sx={{
      width: '100%',
      background: '#090909',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pt: 8,
      pb: { xs: 10, md: 12 }, // menos padding abajo para acercar la imagen
      position: 'relative',
      zIndex: 1,
    }}>
      <Button
        variant="contained"
        sx={{
          background: '#3B5EFF',
          color: 'white',
          borderRadius: '999px',
          px: 4,
          py: 1.2,
          fontSize: 20,
          fontWeight: 500,
          mb: 4,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': { background: '#2A47C6', boxShadow: 'none' },
        }}
        disableElevation
      >
        Who we are
      </Button>
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: 'white',
          fontWeight: 400,
          fontSize: { xs: '2.5rem', md: '4rem' },
          lineHeight: 1.1,
          mb: 3,
        }}
      >
        A top-notch team meets<br />a purposeful mission
      </Typography>
      <Typography
        align="center"
        sx={{
          color: '#B0B3B8',
          fontSize: { xs: 18, md: 22 },
          maxWidth: 800,
          mb: 6,
        }}
      >
        Jungle develops the world 's most effective tools to resolve machine underperformance. Using state-of-the-art AI technology, we solve society’s most pressing challenges, by conquering operational complexity and giving people full understanding of their machines.
      </Typography>
      <Box
        sx={{
          width: { xs: '95%', sm: '90%', md: '80%' },
          maxWidth: 1200,
          mb: { xs: -14, md: -18 }, // margen negativo para superponer
          borderRadius: 6,
          overflow: 'hidden',
          boxShadow: 6,
          background: 'white',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <img
          src="/home/homemakers.png"
          alt="Who we are"
          style={{ width: '100%', display: 'block', borderRadius: '24px' }}
        />
      </Box>
    </Box>
  );
};

export default WhoWeAreSection; 