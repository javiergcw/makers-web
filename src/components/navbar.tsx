'use client'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const menuItems = [
  { label: 'Solutions', hasMenu: true },
  { label: 'Industries', hasMenu: true },
  { label: 'Resources', hasMenu: true },
  { label: 'Who we are', hasMenu: true},
  { elabel: 'Careers', hasMenu: false },
];

// Reemplazo LogoSVG para usar la imagen
const LogoSVG = () => (
  <img src="/logos/LOGOTIPO%20MAKERS.png" alt="Logo Makers" style={{ height: 36 }} />
);

const Navbar: React.FC = () => {
  const [anchorEls, setAnchorEls] = React.useState<(null | HTMLElement)[]>([null, null, null]);

  const handleMenuOpen = (index: number, event: React.MouseEvent<HTMLElement>) => {
    const newAnchors = [...anchorEls];
    newAnchors[index] = event.currentTarget;
    setAnchorEls(newAnchors);
  };

  const handleMenuClose = (index: number) => {
    const newAnchors = [...anchorEls];
    newAnchors[index] = null;
    setAnchorEls(newAnchors);
  };

  return (
    <AppBar position="static" sx={{ background: '#090909', boxShadow: 'none', minHeight: 80, p: 1.5 }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 80 }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 120 }}>
          <LogoSVG />
        </Box>
        {/* Menú central */}
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', gap: 2 }}>
          {menuItems.map((item, idx) =>
            item.hasMenu ? (
              <Box key={item.label}>
                <Button
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{ 
                    color: 'white', 
                    fontWeight: 400, 
                    fontSize: 15, 
                    textTransform: 'none', 
                    mt: 1,
                    transition: 'color 0.2s ease',
                    '&:hover': { 
                      color: '#EDEA4D',
                      '& .MuiSvgIcon-root': {
                        color: '#EDEA4D'
                      }
                    }
                  }}
                  onClick={e => handleMenuOpen(idx, e)}
                >
                  {item.label}
                </Button>
                <Menu
                  anchorEl={anchorEls[idx]}
                  open={Boolean(anchorEls[idx])}
                  onClose={() => handleMenuClose(idx)}
                  MenuListProps={{ 'aria-labelledby': `${item.label}-button` }}
                >
                  {/* Vacío, para que agregues los ítems que desees */}
                </Menu>
              </Box>
            ) : (
              <Typography
                key={item.label}
                sx={{
                  color: 'white',
                  fontSize: 18,
                  mx: 2,
                  alignSelf: 'center',
                  transition: 'color 0.2s ease',
                  cursor: 'pointer',
                  '&:hover': { color: '#EDEA4D' }
                }}
              >
                {item.label}
              </Typography>
            )
          )}
        </Box>
        {/* Botón derecho */}
        <Button
          variant="contained"
          sx={{
            background: '#FFD12A',
            color: 'black',
            fontWeight: 600,
            borderRadius: 3,
            px: 2,
            py: 1,
            boxShadow: 'none',
            '&:hover': { background: '#FFC300', boxShadow: 'none' },
            fontSize: 13,
            textTransform: 'none',
          }}
        >
          Book A Demo
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 