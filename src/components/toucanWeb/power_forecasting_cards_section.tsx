"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RefreshIcon from '@mui/icons-material/Refresh';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalculateIcon from '@mui/icons-material/Calculate';
import { colors } from '../utils/color';

// Componente individual para cada card
const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '12px',
        p: { xs: 2, sm: 3 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-4px)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        
      }}
    >
      
      {/* Icono */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          mb: 1,
          position: 'relative',
          
        }}
      >
        {icon}
      </Box>

      {/* Título */}
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: '1rem', sm: '1.125rem' },
          fontWeight: 600,
          color: colors.neutral.white,
          mb: 1,
          lineHeight: 1.2,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {title}
      </Typography>

      {/* Descripción */}
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: '0.875rem', sm: '0.95rem' },
          color: colors.neutral.white,
          opacity: 0.8,
          lineHeight: 1.5,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

const PowerForecastingCardsSection: React.FC = () => {
  const featureCards = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: '2rem', color: colors.neutral.white }} />,
      title: "Higher precision at competitive levels",
      description: "Cost-effective, reliable and accurate power forecasting models for individual renewables assets, which reduces the imbalance costs, saves penalties and improves the profitability of your farms."
    },
    {
      icon: <RefreshIcon sx={{ fontSize: '2rem', color: colors.neutral.white }} />,
      title: "Backtesting",
      description: "Using our API to request historical forecasts, you can easily backtest the performance of the model and the tailored behaviour for your farm."
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: '2rem', color: colors.neutral.white }} />,
      title: "Forecasting windows & resolutions",
      description: "Request different forecasting windows and resolutions, which can go from intraday to several days ahead and resolutions that can go down to minutes."
    },
    {
      icon: <CalculateIcon sx={{ fontSize: '2rem', color: colors.neutral.white }} />,
      title: "Probabilistic Predictions",
      description: "Our probabilistic predictions allow you to have deeper insights and greater flexibility when bidding. Query different quantiles to adjust for custom penalisation schemes or curtailment implications."
    }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        background: colors.primary.orange,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          px: { xs: 2, sm: 3, md: 4 },
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { xs: 4, lg: 6 },
          alignItems: 'center',
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
            textAlign: { xs: 'center', lg: 'left' },
            position: 'relative',
            order: { xs: 2, lg: 1 },
          }}
        >
          {/* Título principal */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 700,
              color: colors.neutral.white,
              mb: { xs: 2, sm: 3 },
              lineHeight: 1.1,
              maxWidth: '600px',
            }}
          >
            Power forecasts delivered how, where and when you need them
          </Typography>

          {/* Párrafo descriptivo */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              color: colors.neutral.white,
              mb: { xs: 3, sm: 4 },
              maxWidth: '500px',
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            Fully adaptable modelling strategy, learning and relearning behaviour at any time, for any farm around the world, at your request.
          </Typography>

                                {/* Botón "Get started" */}
           <Button
             variant="contained"
             sx={{
               backgroundColor: colors.neutral.white,
               color: '#000000',
               borderRadius: '8px',
               px: { xs: 3, sm: 4 },
               py: { xs: 1.5, sm: 2 },
               fontSize: { xs: '1rem', sm: '1.125rem' },
               fontWeight: 600,
               textTransform: 'none',
               boxShadow: 'none',
               minHeight: '56px',
               '&:hover': {
                 backgroundColor: colors.accent.yellow,
                 color: '#000000',
                 boxShadow: 'none',
               },
               display: 'flex',
               alignItems: 'center',
               gap: 1,
               width: 'fit-content',
             }}
           >
             Get started
             <ArrowForwardIcon sx={{ fontSize: '1.25rem' }} />
           </Button>
        </Box>

                                                                                                                                                        {/* Sección derecha - Cards de características */}
         <Box
           sx={{
             flex: 1,
             display: 'grid',
             gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
             gap: { xs: 2, sm: 3 },
             order: { xs: 1, lg: 2 },
             maxWidth: { xs: '100%', lg: '600px' },
           }}
         >
           {featureCards.map((card, index) => (
             <FeatureCard
               key={index}
               icon={card.icon}
               title={card.title}
               description={card.description}
               index={index}
             />
           ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PowerForecastingCardsSection; 