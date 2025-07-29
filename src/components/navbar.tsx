'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from './utils/color';

const menuItems = [
  { label: 'Solutions', hasMenu: true },
  { label: 'Industries', hasMenu: true },
  { label: 'Resources', hasMenu: true },
  { label: 'Who we are', hasMenu: false },
  { label: 'Careers', hasMenu: false },
];

// Reemplazo LogoSVG para usar la imagen
const LogoSVG = ({ onClick }: { onClick?: () => void }) => (
  <img 
    src="/logos/LOGOTIPO%20MAKERS.png" 
    alt="Logo Makers" 
    style={{ height: 36, cursor: onClick ? 'pointer' : 'default' }}
    onClick={onClick}
  />
);

const Navbar: React.FC = () => {
  const [anchorEls, setAnchorEls] = React.useState<(null | HTMLElement)[]>([null, null, null]);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 280, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <LogoSVG onClick={handleLogoClick} />
        <IconButton onClick={handleDrawerToggle} sx={{ color: colors.neutral.white }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 2, borderColor: 'rgba(255,255,255,0.2)' }} />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.label} sx={{ 
            py: 1.5,
            '&:hover': { 
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 1
            }
          }}>
            <ListItemText 
              primary={item.label} 
              sx={{ 
                color: colors.neutral.white,
                '& .MuiListItemText-primary': {
                  fontSize: 16,
                  fontWeight: 500
                }
              }}
            />
            {item.hasMenu && <KeyboardArrowDownIcon sx={{ color: colors.neutral.white }} />}
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 3 }}>
        <Button
          variant="text"
          fullWidth
          sx={{
            color: colors.neutral.white,
            fontWeight: 600,
            borderRadius: 3,
            py: 1.5,
            fontSize: 14,
            textTransform: 'none',
            transition: 'all 0.2s ease',
            '&:hover': { 
              background: colors.neutral.white, 
              color: 'black',
              boxShadow: 'none' 
            },
          }}
        >
          Book A Demo
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ background: colors.primary.orange, boxShadow: 'none', minHeight: 80, p: 1.5 }}>
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 80, maxWidth: 1280, mx: 'auto', width: '100%' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 120 }}>
            <LogoSVG onClick={handleLogoClick} />
          </Box>
          
          {/* Menú central - Solo visible en desktop */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            flex: 1, 
            justifyContent: 'center', 
            gap: 2,
            alignItems: 'center'
          }}>
            {menuItems.map((item, idx) =>
              item.hasMenu ? (
                <Box key={item.label}>
                  <Button
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{ 
                      color: colors.neutral.white, 
                      fontWeight: 400, 
                      fontSize: 15, 
                      textTransform: 'none',
                      transition: 'color 0.2s ease',
                      '&:hover': { 
                        color: colors.accent.yellow,
                        '& .MuiSvgIcon-root': {
                          color: colors.accent.yellow
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
                    sx={{
                      '& .MuiPaper-root': {
                        mt: 1,
                        minWidth: 200,
                        borderRadius: 2,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    <MenuItem onClick={() => handleMenuClose(idx)}>
                      Opción 1
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClose(idx)}>
                      Opción 2
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClose(idx)}>
                      Opción 3
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={item.label}
                  sx={{
                    color: colors.neutral.white,
                    fontSize: 15,
                    fontWeight: 400,
                    textTransform: 'none',
                    transition: 'color 0.2s ease',
                    cursor: 'pointer',
                    '&:hover': { color: colors.accent.yellow }
                  }}
                >
                  {item.label}
                </Button>
              )
            )}
          </Box>
          
          {/* Botón derecho - Solo visible en desktop */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button
              variant="text"
              sx={{
                color: colors.neutral.white,
                fontWeight: 600,
                borderRadius: 3,
                px: 2,
                py: 1,
                fontSize: 13,
                textTransform: 'none',
                transition: 'all 0.2s ease',
                '&:hover': { 
                  background: colors.neutral.white, 
                  color: 'black',
                  boxShadow: 'none' 
                },
              }}
            >
              Book A Demo
            </Button>
          </Box>

          {/* Botón hamburguesa - Solo visible en móvil */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { xs: 'block', md: 'none' },
              color: colors.neutral.white
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer móvil */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Mejor rendimiento en móvil
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: colors.primary.blue,
            zIndex: 1300
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 