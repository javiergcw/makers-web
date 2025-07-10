import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

const socialIcons = [
  { icon: <LinkedInIcon />, url: '#' },
  { icon: <XIcon />, url: '#' },
  { icon: <InstagramIcon />, url: '#' },
  { icon: <YouTubeIcon />, url: '#' },
];

const JoinTeamFooterSection: React.FC = () => {
  return (
    <Box sx={{ width: '100%', background: '#F6F6F8', pb: 0, pt: 0 }}>
      <Box
        sx={{
          maxWidth: 1600,
          mx: 'auto',
          background: 'white',
          borderRadius: 7,
          px: 0,
          py: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          mb: { xs: 4, md: 8 },
        }}
      >
        {/* Banner amarillo de borde a borde, solo border-radius abajo */}
        <Box
          sx={{
            width: '100%',
            background: '#FFD12A',
            borderRadius: '0 0 40px 40px',
            minHeight: { xs: 320, md: 340 },
            mb: { xs: 6, md: 8 },
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Contenido centrado absolutamente en desktop, column en mobile */}
          <Box
            sx={{
              position: { xs: 'static', md: 'absolute' },
              top: { md: '50%' },
              left: { md: '50%' },
              transform: { md: 'translate(-50%, -50%)' },
              width: { xs: '100%', md: 'auto' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              px: { xs: 2, md: 0 },
              zIndex: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: '#181A1B',
                fontWeight: 400,
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 4,
                textAlign: 'center',
              }}
            >
              Want to join our growing team?
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: '#181A1B',
                color: 'white',
                fontWeight: 700,
                fontSize: 16,
                borderRadius: 2,
                px: 4,
                py: 0,
                boxShadow: 'none',
                textTransform: 'none',
                '&:hover': { background: '#222' },
                mt: 2,
                mb: { xs: 4, md: 0 },
                display: 'block',
                mx: 'auto',
              }}
              endIcon={<span style={{ fontSize: 24, marginLeft: 8 }}>→</span>}
            >
              See open roles
            </Button>
          </Box>
          {/* Imagen absolutamente a la derecha y centrada verticalmente en desktop */}
          <Box
            sx={{
              position: { xs: 'static', md: 'absolute' },
              right: { md: 40 },
              bottom: { md: 0 },
              flex: 1,
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              alignItems: { xs: 'center', md: 'flex-end' },
              mt: { xs: 4, md: 0 },
              zIndex: 1,
            }}
          >
            <img
              src="/home/ojosfooter.png"
              alt="Ojos footer"
              style={{ maxWidth: 300, width: '100%', height: 'auto', display: 'block', transform: 'scaleX(-1)' }}
            />
          </Box>
        </Box>
        {/* Footer blanco */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 4, md: 0 },
            px: { xs: 2, md: 8 },
          }}
        >
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 16%' }, minWidth: 180, mb: { xs: 4, md: 0 } }}>
            <Typography sx={{ fontWeight: 700, mb: 2, color: '#181A1B' }}>Solutions</Typography>
            <Typography sx={{ color: '#181A1B' }}>Canopy</Typography>
            <Typography sx={{ color: '#181A1B' }}>Toucan</Typography>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 16%' }, minWidth: 180, mb: { xs: 4, md: 0 } }}>
            <Typography sx={{ fontWeight: 700, mb: 2, color: '#181A1B' }}>Industries</Typography>
            <Typography sx={{ color: '#181A1B' }}>Wind</Typography>
            <Typography sx={{ color: '#181A1B' }}>Solar</Typography>
            <Typography sx={{ color: '#181A1B' }}>Maritime</Typography>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 16%' }, minWidth: 180, mb: { xs: 4, md: 0 } }}>
            <Typography sx={{ fontWeight: 700, mb: 2, color: '#181A1B' }}>Company</Typography>
            <Typography sx={{ color: '#181A1B' }}>Blog</Typography>
            <Typography sx={{ color: '#181A1B' }}>Case studies</Typography>
            <Typography sx={{ color: '#181A1B' }}>Who we are</Typography>
            <Typography sx={{ color: '#181A1B' }}>Careers</Typography>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 22%' }, minWidth: 220, mb: { xs: 4, md: 0 } }}>
            <Typography sx={{ fontWeight: 700, mb: 2, color: '#181A1B' }}>Contact us</Typography>
            <Typography component="a" href="mailto:hello@jungle.ai" sx={{ color: '#181A1B', textDecoration: 'underline', display: 'block' }}>hello@jungle.ai</Typography>
            <Typography component="a" href="mailto:sales@jungle.ai" sx={{ color: '#181A1B', textDecoration: 'underline', display: 'block' }}>sales@jungle.ai</Typography>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 22%' }, minWidth: 220 }}>
            <Typography sx={{ fontWeight: 700, mb: 2, color: '#181A1B' }}>Stay in touch</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              {socialIcons.map((s, i) => (
                <IconButton
                  key={i}
                  href={s.url}
                  sx={{ background: '#FFD12A', color: '#181A1B', '&:hover': { background: '#FFC300' } }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', mt: 6, gap: 2, width: '100%', px: { xs: 2, md: 8 } }}>
          <Typography sx={{ color: '#181A1B', fontSize: 15 }}>© 2025 All rights reserved</Typography>
          <Typography sx={{ color: '#181A1B', fontSize: 15, textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinTeamFooterSection; 