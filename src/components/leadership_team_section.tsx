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
    <Box sx={{ width: '100%', background: '#F6F6F8', py: { xs: 8, md: 12 } }}>
      <Box
        sx={{
          maxWidth: 1500,
          mx: 'auto',
          px: { xs: 1, md: 4 },
          py: { xs: 4, md: 8 },
          background: 'white',
          borderRadius: 7,
          minHeight: 800,
          clipPath: 'polygon(0 0, 100% 6vw, 100% 100%, 0% 100%)',
          WebkitClipPath: 'polygon(0 0, 100% 6vw, 100% 100%, 0% 100%)',
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
            width: 56,
            height: 56,
            background: 'white',
            borderTopRightRadius: 28,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 28,
            borderBottomLeftRadius: 0,
            zIndex: 2,
            // Ajusta el tamaño y radio según el borderRadius real
          },
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: '#181A1B',
            fontWeight: 400,
            fontSize: { xs: '2.2rem', md: '3rem' },
            mb: 6,
          }}
        >
          Our leadership team
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 3, md: 4 },
            justifyContent: 'center',
          }}
        >
          {leaders.map((leader, idx) => (
            <Paper
              key={leader.name}
              elevation={0}
              sx={{
                borderRadius: 5,
                p: 0,
                width: { xs: '100%', sm: 320, md: 320 },
                minWidth: 260,
                background: '#F6F6F8',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Box sx={{ position: 'relative', width: '100%', height: 320, background: '#eaeaea' }}>
                <img
                  src={leader.img}
                  alt={leader.name}
                  style={{
                    width: '100%',
                    height: 320,
                    objectFit: 'cover',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <IconButton
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    background: 'white',
                    color: '#181A1B',
                    boxShadow: 1,
                    '&:hover': { background: '#eaeaea' },
                  }}
                  size="small"
                >
                  <LinkedInIcon fontSize="medium" />
                </IconButton>
              </Box>
              <Box sx={{ p: 3, pt: 2, width: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#181A1B', fontSize: 24, mb: 1 }}>
                  {leader.name}
                </Typography>
                <Typography sx={{ color: '#44474A', fontSize: 18 }}>
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