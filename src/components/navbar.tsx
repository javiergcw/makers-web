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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const menuItems = [
  { label: 'Solutions', hasMenu: true },
  { label: 'Industries', hasMenu: true },
  { label: 'Resources', hasMenu: true },
  { label: 'Who we are', hasMenu: false, bold: true },
  { label: 'Careers', hasMenu: false },
];

const LogoSVG = () => (
  <svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="30" fontFamily="'Pacifico', cursive" fontSize="32" fill="white">jungle</text>
  </svg>
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
    <AppBar position="static" sx={{ background: '#090909', boxShadow: 'none', minHeight: 80 }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 80 }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 120 }}>
          <LogoSVG />
        </Box>
        {/* Menú central */}
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', gap: 4 }}>
          {menuItems.map((item, idx) =>
            item.hasMenu ? (
              <Box key={item.label}>
                <Button
                  endIcon={<ArrowDropDownIcon />}
                  sx={{ color: 'white', fontWeight: 400, fontSize: 18, textTransform: 'none' }}
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
                  fontWeight: item.bold ? 700 : 400,
                  fontSize: 18,
                  mx: 2,
                  alignSelf: 'center',
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
            fontWeight: 700,
            borderRadius: 2,
            px: 4,
            py: 1.5,
            boxShadow: 'none',
            '&:hover': { background: '#FFC300', boxShadow: 'none' },
            fontSize: 18,
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