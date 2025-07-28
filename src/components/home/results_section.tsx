"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Image from 'next/image';
import Link from 'next/link';

const ResultsSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f8f9fa',
        py: 8,
        px: { xs: 2, md: 4 },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 6,
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            color: '#1a1a1a',
            mb: 2,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: '#ffd700',
              borderRadius: '2px',
            },
          }}
        >
          Results that speak{' '}
          <Box component="span" sx={{ color: '#1a1a1a' }}>
            volumes
          </Box>
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            color: '#666666',
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          At Jungle, we increase production across our entire customer portfolio. 
          Read about how we help produce more from existing operations and prevent unplanned downtime.
        </Typography>
      </Box>

             {/* Cards Container */}
       <Box
         sx={{
           display: 'grid',
           gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
           gap: 4,
           maxWidth: '900px',
           mx: 'auto',
         }}
       >
        {/* Card 1: Improving wind farm performance */}
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
                     <Box sx={{ position: 'relative' }}>
             <Image
               src="/image/imagen2.png"
               alt="Wind farm performance"
               width={600}
               height={300}
               style={{
                 width: '100%',
                 height: '300px',
                 objectFit: 'cover',
               }}
             />
             
             {/* Overlay Label */}
             <Chip
               label="Increase production"
               sx={{
                 position: 'absolute',
                 top: 16,
                 left: 16,
                 backgroundColor: '#4a4a4a',
                 color: 'white',
                 fontWeight: 600,
                 fontSize: '0.875rem',
               }}
             />
           </Box>

          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#1a1a1a',
                mb: 2,
              }}
            >
              Improving wind farm performance
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Wind farms face grid constraints, which affect power generation. 
              Read this case study to learn how Jungle empowered a customer - Repsol - 
              to identify and quantify potential generation losses incurred from grid curtailment.
            </Typography>

            <Link href="#" style={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  color: '#1a1a1a',
                  fontWeight: 600,
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#ffd700',
                  },
                  transition: 'color 0.3s ease',
                }}
              >
                Read case study →
              </Typography>
            </Link>
          </CardContent>
        </Card>

        {/* Card 2: Avoiding turbine downtime */}
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
            },
          }}
        >
                     <Box sx={{ position: 'relative' }}>
             <Image
               src="/image/imagen2.png"
               alt="Turbine downtime prevention"
               width={600}
               height={300}
               style={{
                 width: '100%',
                 height: '300px',
                 objectFit: 'cover',
               }}
             />
             
             {/* Overlay Label */}
             <Chip
               label="Reduce downtime"
               sx={{
                 position: 'absolute',
                 top: 16,
                 left: 16,
                 backgroundColor: '#0066cc',
                 color: 'white',
                 fontWeight: 600,
                 fontSize: '0.875rem',
               }}
             />
           </Box>

          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#1a1a1a',
                mb: 2,
              }}
            >
              Avoiding turbine downtime
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              In this case study, learn how Jungle's AI solution helped our customer 
              detect and track abnormal overheating in generator bearings, proactively 
              addressing it during a planned maintenance window, ultimately preventing costly downtime.
            </Typography>

            <Link href="#" style={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  color: '#1a1a1a',
                  fontWeight: 600,
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#ffd700',
                  },
                  transition: 'color 0.3s ease',
                }}
              >
                Read case study →
              </Typography>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ResultsSection; 