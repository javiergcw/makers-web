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
          maxWidth: 1200,
          mx: 'auto',
          background: 'white',
          borderRadius: 5,
          px: 0,
          py: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          mb: { xs: 3, md: 6 },
        }}
      >
        {/* Banner amarillo de borde a borde, solo border-radius abajo */}
        <Box
          sx={{
            width: '100%',
            background: '#FFD12A',
            borderRadius: '0 0 32px 32px',
            minHeight: { xs: 260, md: 280 },
            mb: { xs: 4, md: 6 },
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
                fontSize: { xs: '1.6rem', md: '2.5rem' },
                mb: 3,
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
                fontSize: 14,
                borderRadius: 2,
                px: 3,
                py: 0,
                boxShadow: 'none',
                textTransform: 'none',
                '&:hover': { background: '#222' },
                mt: 1,
                mb: { xs: 3, md: 0 },
                display: 'block',
                mx: 'auto',
              }}
              endIcon={<span style={{ fontSize: 20, marginLeft: 6 }}>→</span>}
            >
              See open roles
            </Button>
          </Box>
          {/* Imagen absolutamente a la derecha y centrada verticalmente en desktop */}
          <Box
            sx={{
              position: { xs: 'static', md: 'absolute' },
              right: { md: 32 },
              bottom: { md: 0 },
              flex: 1,
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              alignItems: { xs: 'center', md: 'flex-end' },
              mt: { xs: 3, md: 0 },
              zIndex: 1,
            }}
          >
            <img
              src="/home/ojosfooter.png"
              alt="Ojos footer"
              style={{ maxWidth: 240, width: '100%', height: 'auto', display: 'block', transform: 'scaleX(-1)' }}
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
            gap: { xs: 3, md: 0 },
            px: { xs: 2, md: 6 },
          }}
        >
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 16%' }, minWidth: 160, mb: { xs: 3, md: 0 } }}>
            <Typography sx={{ fontWeight: 700, mb: 1.5, color: '#181A1B', fontSize: 14 }}>Solutions</Typography>
            <Typography sx={{ color: '#181A1B', fontSize: 14 }}>Canopy</Typography>
            <Typography sx={{ color: '#181A1B', fontSize: 14 }}>Toucan</Typography>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 16%' }, minWidth: 160, mb: { xs: 3, md: 0 } }}>
            <Typography sx={{ fontWeight: 700, mb: 1.5, color: '#181A1B', fontSize: 14 }}>Industries</Typography>
            <Typography sx={{ color: '#181A1B', fontSize: 14 }}>Wind</Typography>
            <Typography sx={{ color: '#181A1B', fontSize: 14 }}>Solar</Typography>
            <Typography sx={{ color: '#181A1B', fontSize: 14 }}>Maritime</Typography>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 16%' }, minWidth: 160, mb: { xs: 3, md: 0 } }}>
            <Typography sx={{ fontWeight: 700, mb: 1.5, color: '#181A1B', fontSize: 14 }}>Company</Typography>
            <Typography sx={{ color: '#181A1B', fontSize: 14 }}>Blog</Typography>
            <Typography sx={{ color: '#181A1B', fontSize: 14 }}>Case studies</Typography>
            <Typography sx={{ color: '#181A1B', fontSize: 14 }}>Who we are</Typography>
            <Typography sx={{ color: '#181A1B', fontSize: 14 }}>Careers</Typography>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 22%' }, minWidth: 200, mb: { xs: 3, md: 0 } }}>
            <Typography sx={{ fontWeight: 700, mb: 1.5, color: '#181A1B', fontSize: 14 }}>Contact us</Typography>
            <Typography component="a" href="mailto:hello@jungle.ai" sx={{ color: '#181A1B', textDecoration: 'underline', display: 'block', fontSize: 14 }}>hello@jungle.ai</Typography>
            <Typography component="a" href="mailto:sales@jungle.ai" sx={{ color: '#181A1B', textDecoration: 'underline', display: 'block', fontSize: 14 }}>sales@jungle.ai</Typography>
          </Box>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 22%' }, minWidth: 200 }}>
            <Typography sx={{ fontWeight: 700, mb: 1.5, color: '#181A1B', fontSize: 14 }}>Stay in touch</Typography>
            <Box sx={{ display: 'flex', gap: 1.5, mt: 1 }}>
              {socialIcons.map((s, i) => (
                <IconButton
                  key={i}
                  href={s.url}
                  size="small"
                  sx={{ background: '#FFD12A', color: '#181A1B', '&:hover': { background: '#FFC300' } }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', mt: 4, gap: 2, width: '100%', px: { xs: 2, md: 6 } }}>
          <Typography sx={{ color: '#181A1B', fontSize: 13 }}>© 2025 All rights reserved</Typography>
          <Typography sx={{ color: '#181A1B', fontSize: 13, textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinTeamFooterSection; 