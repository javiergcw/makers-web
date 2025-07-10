'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorder';

const values = [
  {
    icon: <SpaOutlinedIcon sx={{ fontSize: 36, color: '#A0A3AA' }} />,
    title: 'Actual positive impact in the world',
    desc: `Giving people the understanding over their machines means accelerating the positive impact that key industries have. We optimise renewable energy production, help manufacturers go greener and ease out the transition towards sustainability.`,
  },
  {
    icon: <SettingsOutlinedIcon sx={{ fontSize: 36, color: '#A0A3AA' }} />,
    title: 'Crafting through machine learning',
    desc: `Exploring data (science), perfecting our technological craft and putting our heart and brain into ML research - this is how the Jungle team delves into innovation.`,
  },
  {
    icon: <HandshakeOutlinedIcon sx={{ fontSize: 36, color: '#A0A3AA' }} />,
    title: 'Empowering people',
    desc: `Our solutions aren’t meant to replace human labour and perspective. Quite the contrary: positive change is achieved by putting empowering tools in the hands of people, a philosophy that Jungle applies to both customers and employees.`,
  },
  {
    icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 36, color: '#A0A3AA' }} />,
    title: 'A nice place to work',
    desc: `We don’t need big adjectives: we aim to simply be a nice work place to all Jungle’s inhabitants. Being part of the team means being comfortable with one’s self and in true balance with the Jungle ecosystem.`,
  },
];

const CoreValuesSection: React.FC = () => {
  return (
    <Box sx={{ width: '100%', background: '#F6F6F8', py: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: '#181A1B',
            fontWeight: 400,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 6,
          }}
        >
          Our core values
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 3, md: 4 },
            justifyContent: 'center',
          }}
        >
          {values.map((val, idx) => (
            <Box
              key={val.title}
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 48%' },
                minWidth: { xs: '100%', md: '48%' },
                maxWidth: { xs: '100%', md: '48%' },
                display: 'flex',
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 5,
                  p: { xs: 4, md: 6 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)',
                  height: '100%',
                  background: 'white',
                  width: '100%',
                  minHeight: { xs: 260, md: 320 },
                  transition: 'background 0.2s, color 0.2s',
                  cursor: 'pointer',
                  '&:hover': {
                    background: '#FFD12A',
                    '& .core-value-title, & .core-value-desc': {
                      color: '#181A1B',
                    },
                  },
                }}
              >
                <Avatar sx={{ bgcolor: '#F6F6F8', width: 64, height: 64, mb: 2 }}>
                  {val.icon}
                </Avatar>
                <Typography variant="h6" className="core-value-title" sx={{ fontWeight: 600, mb: 1.5, color: '#181A1B', fontSize: 24, transition: 'color 0.2s' }}>
                  {val.title}
                </Typography>
                <Typography className="core-value-desc" sx={{ color: '#44474A', fontSize: 20, transition: 'color 0.2s' }}>
                  {val.desc}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CoreValuesSection; 