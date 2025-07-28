'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container 
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroBanner: React.FC = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#FFD700', 
        borderRadius: '24px',
        py: { xs: 6, md: 8 },
        px: { xs: 3, md: 4 },
        mx: { xs: 2, md: 4 },
        my: 4,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
        <Typography 
          variant="h1" 
          component="h1" 
          sx={{ 
            color: '#000000',
            fontWeight: 300,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
            lineHeight: 1.2,
            mb: 4,
            fontFamily: 'sans-serif',
            textAlign: 'center'
          }}
        >
          Bringing your machines back to their
          <br />
          star performance
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            borderRadius: '12px',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: '600',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#333333',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}
        >
          Start today
        </Button>
    </Box>
  );
};

export default HeroBanner; 