"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { colors } from '../utils/color';

const DiversityInclusionSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.neutral.white,
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 }
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            alignItems: 'flex-start'
          }}
        >
          {/* Columna izquierda - Título */}
          <Box
            sx={{
              flex: { md: '0 0 50%' },
              width: '100%'
            }}
          >
                         <Typography
               variant="h1"
               sx={{
                 fontSize: { xs: '2.5rem', md: '3.5rem' },
                 fontWeight: 300,
                 color: '#000000',
                 lineHeight: 1.1,
                 mb: { xs: 3, md: 0 }
               }}
             >
              Making room
              <br />
              for everybody
            </Typography>
          </Box>

          {/* Columna central - Texto descriptivo */}
          <Box
            sx={{
              flex: { md: '0 0 50%' },
              width: '100%',
              pr: { md: 4 }
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#000000',
                lineHeight: 1.7,
                mb: 3,
                fontWeight: 400
              }}
            >
              At Jungle, our commitment to diversity, acceptance, and equal opportunity is rooted in the belief that, just like the ecosystems found in jungles, our strength lies in the diversity of our team.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#000000',
                lineHeight: 1.7,
                mb: 3,
                fontWeight: 400
              }}
            >
              We're aware that candidates from underrepresented backgrounds sometimes hesitate to apply for roles when they feel they don't check every box.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#000000',
                lineHeight: 1.7,
                fontWeight: 400
              }}
            >
              If you're interested in joining our team, we strongly encourage you to apply. We welcome and encourage different perspectives, and are eager to learn how your unique experience can enhance our collective potential.
            </Typography>
          </Box>


        </Box>
      </Container>
    </Box>
  );
};

export default DiversityInclusionSection; 