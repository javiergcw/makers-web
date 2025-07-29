"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { colors } from '../utils/color';

const CanopyValueSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        background: colors.secondary.peach,
        py: 15
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          px: 3,
        }}
      >
        {/* Título principal */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 300,
              color: '#333333',
              mb: 3,
              lineHeight: 1.1,
              position: 'relative',
              display: 'inline-block',
            }}
          >
            Canopy brings <br /> 
            <Box component="span" sx={{ position: 'relative' }}>
              value
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  backgroundColor: colors.primary.orange,
                  borderRadius: '2px',
                }}
              />
            </Box> to your organisation
          </Typography>

          {/* Párrafo descriptivo */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              color: '#888888',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Our state-of-the-art deep learning models reveal the full potential of your assets under any condition. 
            As you fine-tune performance, identify anomalies, and prioritise actions that drive revenue, 
            Canopy emerges as the guiding light in your data jungle.
          </Typography>
        </Box>

        {/* Tres tarjetas de contenido */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            mt: 6,
          }}
        >
          {/* Tarjeta 1 - Predictive insights */}
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: 4,
              textAlign: 'left',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <SearchIcon
              sx={{
                fontSize: '3rem',
                color: '#666666',
                mb: 4,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 500,
                color: '#444444',
                mb: 3,
              }}
            >
              Predictive insights for uninterrupted production
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                color: '#888888',
                lineHeight: 1.6,
              }}
            >
              Bid farewell to unexpected downtime and costly breakdowns. Canopy learns your machines' heartbeat, 
              detecting issues before they impact operations. Monitor your entire asset portfolio with precision, 
              ensuring uninterrupted production.
            </Typography>
          </Box>

          {/* Tarjeta 2 - Maintenance */}
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: 4,
              textAlign: 'left',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <ScheduleIcon
              sx={{
                fontSize: '3rem',
                color: '#666666',
                mb: 4,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 500,
                color: '#444444',
                mb: 3,
              }}
            >
              Maintenance at exactly the right time
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                color: '#888888',
                lineHeight: 1.6,
              }}
            >
              Let go of standardised maintenance interventions. Canopy tells you when a component needs replacement, 
              and equally important, when it's safe to continue operations. Make your complex operations simpler 
              with insights that drive action and results.
            </Typography>
          </Box>

          {/* Tarjeta 3 - Supercharge operations */}
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: 4,
              textAlign: 'left',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <TrendingUpIcon
              sx={{
                fontSize: '3rem',
                color: '#666666',
                mb: 4,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 500,
                color: '#444444',
                mb: 3,
              }}
            >
              Supercharge your operations
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                color: '#888888',
                lineHeight: 1.6,
              }}
            >
              Unleash the full potential of your machines and boost profitability with Canopy. Our advanced models 
              scrutinise every aspect of performance, allocating losses into clear categories that help prioritise 
              revenue-driving actions. Nothing goes unnoticed when Canopy has your back.
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default CanopyValueSection;