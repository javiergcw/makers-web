"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@mui/material/Container';
import { colors } from '../utils/color';

const ResultsSection: React.FC = () => {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: colors.secondary.peach }}>
    <Box
      sx={{
        maxWidth: '1280px',
        mx: 'auto',
        py: { xs: 8, md: 15 },
        px: { xs: 1.5, sm: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: 'center',
          mb: { xs: 4, md: 6 },
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            lineHeight: { xs: 1.1, md: 1 },
            fontWeight: 300,
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3.5rem' },
            color: ' #1a1a1a',
            mb: { xs: 1.5, md: 2 },
            position: 'relative',
            
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: { xs: '-6px', md: '-8px' },
              left: '50%',
              transform: 'translateX(-50%)',
              width: { xs: '60px', md: '80px' },
              height: { xs: '3px', md: '4px' },
              backgroundColor: colors.primary.orange,
              borderRadius: '2px',
            },
          }}
        >
          Results that speak volumes
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
            color: '#666666',
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto',
            px: { xs: 1, md: 0 },
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
           gap: { xs: 3, md: 4 },
           maxWidth: '900px',
           mx: 'auto',
         }}
       >
        {/* Card 1: Improving wind farm performance */}
        <Card
          sx={{
            borderRadius: { xs: 2, md: 3 },
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: { xs: 'translateY(-4px)', md: 'translateY(-8px)' },
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 215, 0, 0.1)',
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
                 height: '250px',
                 objectFit: 'cover',
               }}
             />
             
             {/* Overlay Label */}
             <Chip
               label="Increase production"
               sx={{
                 position: 'absolute',
                 top: { xs: 12, md: 16 },
                 left: { xs: 12, md: 16 },
                 backgroundColor: colors.primary.orange,
                 color: 'white',
                 fontWeight: 600,
                 fontSize: { xs: '0.75rem', md: '0.875rem' },
                 height: { xs: '24px', md: '32px' },
               }}
             />
           </Box>

          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#1a1a1a',
                mb: { xs: 1.5, md: 2 },
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                lineHeight: { xs: 1.3, md: 1.2 },
              }}
            >
              Improving wind farm performance
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                lineHeight: 1.6,
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '0.9rem', md: '1rem' },
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
                  fontSize: { xs: '0.9rem', md: '1rem' },
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
            borderRadius: { xs: 2, md: 3 },
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: { xs: 'translateY(-4px)', md: 'translateY(-8px)' },
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 215, 0, 0.1)',
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
                 height: '250px',
                 objectFit: 'cover',
               }}
             />
             
             {/* Overlay Label */}
             <Chip
               label="Reduce downtime"
               sx={{
                 position: 'absolute',
                 top: { xs: 12, md: 16 },
                 left: { xs: 12, md: 16 },
                 backgroundColor: colors.primary.orange,
                 color: 'white',
                 fontWeight: 600,
                 fontSize: { xs: '0.75rem', md: '0.875rem' },
                 height: { xs: '24px', md: '32px' },
               }}
             />
           </Box>

          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#1a1a1a',
                mb: { xs: 1.5, md: 2 },
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                lineHeight: { xs: 1.3, md: 1.2 },
              }}
            >
              Avoiding turbine downtime
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                lineHeight: 1.6,
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '0.9rem', md: '1rem' },
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
                  fontSize: { xs: '0.9rem', md: '1rem' },
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
    </Container>
  );
};

export default ResultsSection; 