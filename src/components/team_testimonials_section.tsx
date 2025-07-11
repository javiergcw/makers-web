import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

const testimonials = [
  {
    area: 'Product',
    text: `"My experience at Jungle has been awesome thanks to the people and Canopy being a very interesting product! I've helped implement and improve our users' experience while learning a lot in the process."`,
    name: 'João Palmeiro',
    role: 'Full-stack Developer',
  },
  {
    area: 'R&D',
    text: `"In the R&D team, we are proud to be driving technological innovation and seeing the direct impact we have on Jungle's solutions."`,
    name: 'João Correia',
    role: 'Machine Learning Engineer',
  },
  {
    area: 'Product',
    text: `"Every day at Jungle is a new adventure in the sense that are always new challenges to take on!"`,
    name: 'Robert Mercieca',
    role: 'Full-stack Developer',
  },
  {
    area: 'Product',
    text: `"Jungle is a place where you can grow professionally and personally, surrounded by a supportive team."`,
    name: 'Ana Silva',
    role: 'Frontend Developer',
  },
  {
    area: 'R&D',
    text: `"Working at Jungle means being at the forefront of AI technology and making a real difference."`,
    name: 'Carlos Mendes',
    role: 'Data Scientist',
  },
  {
    area: 'Product',
    text: `"The collaborative environment at Jungle makes every project exciting and rewarding."`,
    name: 'Maria Costa',
    role: 'Backend Developer',
  },
];

const TeamTestimonialsSection: React.FC = () => {
  return (
    <Box sx={{ width: '100%', background: '#090909', py: { xs: 6, md: 8 } }}>
      <Box sx={{ maxWidth: 1000, mx: 'auto', px: 2 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: 'white',
            fontWeight: 400,
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: 2,
          }}
        >
          The people behind the machines<br />make the world go round
        </Typography>
        <Typography
          align="center"
          sx={{
            color: '#B0B3B8',
            fontSize: { xs: 16, md: 18 },
            maxWidth: 700,
            mb: 6,
            mx: 'auto',
          }}
        >
          At Jungle, we hold pride in our talented team, dedicated to advancing our mission.<br />
          For a glimpse into our work culture and ethos, learn directly from the driven and<br />
          enthusiast individuals who make it all happen.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 2, md: 3 },
            justifyContent: 'center',
          }}
        >
          {testimonials.map((t, idx) => (
            <Box
              key={idx}
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 30%' },
                minWidth: { xs: '100%', md: '30%' },
                maxWidth: { xs: '100%', md: '32%' },
                display: 'flex',
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 4,
                  p: { xs: 3, md: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                  height: '100%',
                  background: '#232323',
                  width: '100%',
                  minHeight: { xs: 220, md: 240 },
                }}
              >
                <Chip
                  label={t.area}
                  sx={{
                    background: '#4B5EFF',
                    color: 'white',
                    fontWeight: 500,
                    fontSize: 16,
                    borderRadius: '12px',
                    mb: 2,
                    px: 2,
                    py: 0.5,
                  }}
                />
                <Typography sx={{ color: '#D1D1D1', fontSize: 16, mb: 2, fontStyle: 'italic' }}>
                  {t.text}
                </Typography>
                <Typography sx={{ color: 'white', fontWeight: 700, fontSize: 15 }}>
                  {t.name},<br />
                  <span style={{ fontWeight: 400 }}>{t.role}</span>
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamTestimonialsSection; 