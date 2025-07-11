import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const leaders = [
  {
    name: 'Arnoud Kamerbeek',
    role: 'CEO',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    linkedin: '#',
  },
  {
    name: 'Pim Breukelman',
    role: 'CCO',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    linkedin: '#',
  },
  {
    name: 'Alexander Helmer',
    role: 'CTO & co-founder',
    img: 'https://randomuser.me/api/portraits/men/34.jpg',
    linkedin: '#',
  },
  {
    name: 'Silvio Rodrigues',
    role: 'CIO & co-founder',
    img: 'https://randomuser.me/api/portraits/men/35.jpg',
    linkedin: '#',
  },
];

const LeadershipTeamSection: React.FC = () => {
  return (
    <Box sx={{ width: '100%', background: '#F6F6F8', py: { xs: 6, md: 8 } }}>
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 1, md: 3 },
          py: { xs: 3, md: 6 },
          background: 'white',
          borderRadius: 5,
          minHeight: 600,
          clipPath: 'polygon(0 0, 100% 4vw, 100% 100%, 0% 100%)',
          WebkitClipPath: 'polygon(0 0, 100% 4vw, 100% 100%, 0% 100%)',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          '::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: 48,
            height: 48,
            background: 'white',
            borderTopRightRadius: 24,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 24,
            borderBottomLeftRadius: 0,
            zIndex: 2,
          },
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: '#181A1B',
            fontWeight: 400,
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            mb: 4,
          }}
        >
          Our leadership team
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 2, md: 3 },
            justifyContent: 'center',
          }}
        >
          {leaders.map((leader, idx) => (
            <Paper
              key={leader.name}
              elevation={0}
              sx={{
                borderRadius: 4,
                p: 0,
                width: { xs: '100%', sm: 280, md: 280 },
                minWidth: 240,
                background: '#F6F6F8',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Box sx={{ position: 'relative', width: '100%', height: 280, background: '#eaeaea' }}>
                <img
                  src={leader.img}
                  alt={leader.name}
                  style={{
                    width: '100%',
                    height: 280,
                    objectFit: 'cover',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                />
                <IconButton
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    background: 'white',
                    color: '#181A1B',
                    boxShadow: 1,
                    '&:hover': { background: '#eaeaea' },
                  }}
                  size="small"
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Box>
              <Box sx={{ p: 2.5, pt: 2, width: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#181A1B', fontSize: 20, mb: 0.5 }}>
                  {leader.name}
                </Typography>
                <Typography sx={{ color: '#44474A', fontSize: 16 }}>
                  {leader.role}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LeadershipTeamSection; 