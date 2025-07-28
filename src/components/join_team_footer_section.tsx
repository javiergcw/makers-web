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
          width: '100%',
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
        {/* Footer blanco */}
        <Box
          sx={{
            width: '100%',
            maxWidth: 1410,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 3, md: 0 },
            px: { xs: 2, md: 6 },
            pt: { xs: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 3, md: 0 },
            }}
          >
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 16%' }, minWidth: 160, mb: { xs: 3, md: 0 } }}>
              <Typography sx={{ fontWeight: 700, mb: 1.5, color: '#181A1B', fontSize: 16 }}>Solutions</Typography>
              <Typography component="a" href="#" sx={{ color: '#181A1B', fontSize: 16, mb: 1, textDecoration: 'none', display: 'block', '&:hover': { textDecoration: 'underline' } }}>Canopy</Typography>
              <Typography component="a" href="#" sx={{ color: '#181A1B', fontSize: 16, mb: 1, textDecoration: 'none', display: 'block', '&:hover': { textDecoration: 'underline' } }}>Toucan</Typography>
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 16%' }, minWidth: 160, mb: { xs: 3, md: 0 } }}>
              <Typography sx={{ fontWeight: 700, mb: 1.5, color: '#181A1B', fontSize: 16 }}>Industries</Typography>
              <Typography component="a" href="#" sx={{ color: '#181A1B', fontSize: 16, mb: 1, textDecoration: 'none', display: 'block', '&:hover': { textDecoration: 'underline' } }}>Wind</Typography>
              <Typography component="a" href="#" sx={{ color: '#181A1B', fontSize: 16, mb: 1, textDecoration: 'none', display: 'block', '&:hover': { textDecoration: 'underline' } }}>Solar</Typography>
              <Typography component="a" href="#" sx={{ color: '#181A1B', fontSize: 16, mb: 1, textDecoration: 'none', display: 'block', '&:hover': { textDecoration: 'underline' } }}>Maritime</Typography>
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 16%' }, minWidth: 160, mb: { xs: 3, md: 0 } }}>
              <Typography sx={{ fontWeight: 700, mb: 1.5, color: '#181A1B', fontSize: 16 }}>Company</Typography>
              <Typography component="a" href="#" sx={{ color: '#181A1B', fontSize: 16, mb: 1, textDecoration: 'none', display: 'block', '&:hover': { textDecoration: 'underline' } }}>Blog</Typography>
              <Typography component="a" href="#" sx={{ color: '#181A1B', fontSize: 16, mb: 1, textDecoration: 'none', display: 'block', '&:hover': { textDecoration: 'underline' } }}>Case studies</Typography>
              <Typography component="a" href="#" sx={{ color: '#181A1B', fontSize: 16, mb: 1, textDecoration: 'none', display: 'block', '&:hover': { textDecoration: 'underline' } }}>Who we are</Typography>
              <Typography component="a" href="#" sx={{ color: '#181A1B', fontSize: 16, mb: 1, textDecoration: 'none', display: 'block', '&:hover': { textDecoration: 'underline' } }}>Careers</Typography>
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 22%' }, minWidth: 200, mb: { xs: 3, md: 0 } }}>
              <Typography sx={{ fontWeight: 700, mb: 1.5, color: '#181A1B', fontSize: 16 }}>Contact us</Typography>
              <Typography component="a" href="mailto:hello@jungle.ai" sx={{ color: '#181A1B', textDecoration: 'underline', display: 'block', fontSize: 16, mb: 1 }}>hello@jungle.ai</Typography>
              <Typography component="a" href="mailto:sales@jungle.ai" sx={{ color: '#181A1B', textDecoration: 'underline', display: 'block', fontSize: 16, mb: 1 }}>sales@jungle.ai</Typography>
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 22%' }, minWidth: 200 }}>
              <Typography sx={{ fontWeight: 700, mb: 1.5, color: '#181A1B', fontSize: 16 }}>Stay in touch</Typography>
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
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', mt: 4, gap: 2, width: '100%' }}>
            <Typography sx={{ color: '#181A1B', fontSize: 15 }}>© 2025 All rights reserved</Typography>
            <Typography sx={{ color: '#181A1B', fontSize: 15, textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinTeamFooterSection; 