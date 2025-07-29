import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import { colors } from './utils/color';

const socialIcons = [
  { icon: <LinkedInIcon />, url: '#' },
  { icon: <XIcon />, url: '#' },
  { icon: <InstagramIcon />, url: '#' },
  { icon: <YouTubeIcon />, url: '#' },
];

const JoinTeamFooterSection: React.FC = () => {
  return (
    <Box sx={{ width: '100%', background: '#f4f4f6', pb: 0, pt: 0 }}>
      <Box
        sx={{
          width: '100%',
          background: 'white',
          px: 0,
          py: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          mb: { xs: 2, sm: 3, md: 6 },
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
            gap: { xs: 2, sm: 3, md: 0 },
            px: { xs: 3, sm: 4, md: 6 },
            pt: { xs: 6, sm: 5, md: 6 },
            pb: { xs: 4, sm: 5, md: 6 },
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: { xs: 'flex-start', md: 'center' },
              gap: { xs: 0, md: 0 },
            }}
          >
            {/* Solutions */}
            <Box sx={{ 
              flex: { xs: '1 1 50%', sm: '1 1 33%', md: '1 1 16%' }, 
              minWidth: { xs: 'auto', md: 160 }, 
              mb: { xs: 4, sm: 3, md: 0 },
              pr: { xs: 2, sm: 3, md: 0 }
            }}>
              <Typography sx={{ 
                fontWeight: 700, 
                mb: { xs: 2, md: 1.5 }, 
                color: '#181A1B', 
                fontSize: { xs: 15, sm: 16 } 
              }}>
                Solutions
              </Typography>
              <Typography component="a" href="#" sx={{ 
                color: '#181A1B', 
                fontSize: { xs: 14, sm: 16 }, 
                mb: { xs: 1.5, md: 1 }, 
                textDecoration: 'none', 
                display: 'block', 
                '&:hover': { textDecoration: 'underline' } 
              }}>
                Canopy
              </Typography>
              <Typography component="a" href="#" sx={{ 
                color: '#181A1B', 
                fontSize: { xs: 14, sm: 16 }, 
                mb: { xs: 1.5, md: 1 }, 
                textDecoration: 'none', 
                display: 'block', 
                '&:hover': { textDecoration: 'underline' } 
              }}>
                Toucan
              </Typography>
            </Box>

            {/* Industries */}
            <Box sx={{ 
              flex: { xs: '1 1 50%', sm: '1 1 33%', md: '1 1 16%' }, 
              minWidth: { xs: 'auto', md: 160 }, 
              mb: { xs: 4, sm: 3, md: 0 },
              pr: { xs: 2, sm: 3, md: 0 }
            }}>
              <Typography sx={{ 
                fontWeight: 700, 
                mb: { xs: 2, md: 1.5 }, 
                color: '#181A1B', 
                fontSize: { xs: 15, sm: 16 } 
              }}>
                Industries
              </Typography>
              <Typography component="a" href="#" sx={{ 
                color: '#181A1B', 
                fontSize: { xs: 14, sm: 16 }, 
                mb: { xs: 1.5, md: 1 }, 
                textDecoration: 'none', 
                display: 'block', 
                '&:hover': { textDecoration: 'underline' } 
              }}>
                Wind
              </Typography>
              <Typography component="a" href="#" sx={{ 
                color: '#181A1B', 
                fontSize: { xs: 14, sm: 16 }, 
                mb: { xs: 1.5, md: 1 }, 
                textDecoration: 'none', 
                display: 'block', 
                '&:hover': { textDecoration: 'underline' } 
              }}>
                Solar
              </Typography>
              <Typography component="a" href="#" sx={{ 
                color: '#181A1B', 
                fontSize: { xs: 14, sm: 16 }, 
                mb: { xs: 1.5, md: 1 }, 
                textDecoration: 'none', 
                display: 'block', 
                '&:hover': { textDecoration: 'underline' } 
              }}>
                Maritime
              </Typography>
            </Box>

            {/* Company */}
            <Box sx={{ 
              flex: { xs: '1 1 50%', sm: '1 1 33%', md: '1 1 16%' }, 
              minWidth: { xs: 'auto', md: 160 }, 
              mb: { xs: 4, sm: 3, md: 0 },
              pr: { xs: 2, sm: 3, md: 0 }
            }}>
              <Typography sx={{ 
                fontWeight: 700, 
                mb: { xs: 2, md: 1.5 }, 
                color: '#181A1B', 
                fontSize: { xs: 15, sm: 16 } 
              }}>
                Company
              </Typography>
              <Typography component="a" href="#" sx={{ 
                color: '#181A1B', 
                fontSize: { xs: 14, sm: 16 }, 
                mb: { xs: 1.5, md: 1 }, 
                textDecoration: 'none', 
                display: 'block', 
                '&:hover': { textDecoration: 'underline' } 
              }}>
                Blog
              </Typography>
              <Typography component="a" href="#" sx={{ 
                color: '#181A1B', 
                fontSize: { xs: 14, sm: 16 }, 
                mb: { xs: 1.5, md: 1 }, 
                textDecoration: 'none', 
                display: 'block', 
                '&:hover': { textDecoration: 'underline' } 
              }}>
                Case studies
              </Typography>
              <Typography component="a" href="#" sx={{ 
                color: '#181A1B', 
                fontSize: { xs: 14, sm: 16 }, 
                mb: { xs: 1.5, md: 1 }, 
                textDecoration: 'none', 
                display: 'block', 
                '&:hover': { textDecoration: 'underline' } 
              }}>
                Who we are
              </Typography>
              <Typography component="a" href="#" sx={{ 
                color: '#181A1B', 
                fontSize: { xs: 14, sm: 16 }, 
                mb: { xs: 1.5, md: 1 }, 
                textDecoration: 'none', 
                display: 'block', 
                '&:hover': { textDecoration: 'underline' } 
              }}>
                Careers
              </Typography>
            </Box>

            {/* Contact us */}
            <Box sx={{ 
              flex: { xs: '1 1 50%', sm: '1 1 33%', md: '1 1 22%' }, 
              minWidth: { xs: 'auto', md: 200 }, 
              mb: { xs: 4, sm: 3, md: 0 },
              pr: { xs: 2, sm: 3, md: 0 }
            }}>
              <Typography sx={{ 
                fontWeight: 700, 
                mb: { xs: 2, md: 1.5 }, 
                color: '#181A1B', 
                fontSize: { xs: 15, sm: 16 } 
              }}>
                Contact us
              </Typography>
              <Typography component="a" href="mailto:hello@jungle.ai" sx={{ 
                color: '#181A1B', 
                textDecoration: 'underline', 
                display: 'block', 
                fontSize: { xs: 14, sm: 16 }, 
                mb: { xs: 1.5, md: 1 },
                wordBreak: 'break-word'
              }}>
                hello@jungle.ai
              </Typography>
              <Typography component="a" href="mailto:sales@jungle.ai" sx={{ 
                color: '#181A1B', 
                textDecoration: 'underline', 
                display: 'block', 
                fontSize: { xs: 14, sm: 16 }, 
                mb: { xs: 1.5, md: 1 },
                wordBreak: 'break-word'
              }}>
                sales@jungle.ai
              </Typography>
            </Box>

            {/* Stay in touch */}
            <Box sx={{ 
              flex: { xs: '1 1 50%', sm: '1 1 33%', md: '1 1 22%' }, 
              minWidth: { xs: 'auto', md: 200 }
            }}>
              <Typography sx={{ 
                fontWeight: 700, 
                mb: { xs: 2, md: 1.5 }, 
                color: '#181A1B', 
                fontSize: { xs: 15, sm: 16 } 
              }}>
                Stay in touch
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                gap: { xs: 1, sm: 1.5 }, 
                mt: { xs: 1.5, md: 1 },
                flexWrap: 'wrap'
              }}>
                {socialIcons.map((s, i) => (
                  <IconButton
                    key={i}
                    href={s.url}
                    size="small"
                    sx={{ 
                      background: colors.primary.orange, 
                      color: 'white', 
                      '&:hover': { background: '#e6452e' },
                      width: { xs: 36, sm: 40 },
                      height: { xs: 36, sm: 40 }
                    }}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Footer inferior */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: { xs: 'center', sm: 'space-between' }, 
            alignItems: 'center', 
            mt: { xs: 6, sm: 5, md: 4 }, 
            gap: { xs: 2, sm: 2 }, 
            width: '100%',
            pt: { xs: 3, sm: 4, md: 4 },
            borderTop: '1px solid #e0e0e0'
          }}>
            <Typography sx={{ 
              color: '#181A1B', 
              fontSize: { xs: 13, sm: 14, md: 15 },
              textAlign: { xs: 'center', sm: 'left' }
            }}>
              © 2025 All rights reserved
            </Typography>
            <Typography sx={{ 
              color: '#181A1B', 
              fontSize: { xs: 13, sm: 14, md: 15 }, 
              textDecoration: 'underline', 
              cursor: 'pointer',
              textAlign: { xs: 'center', sm: 'right' }
            }}>
              Privacy Policy
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinTeamFooterSection; 