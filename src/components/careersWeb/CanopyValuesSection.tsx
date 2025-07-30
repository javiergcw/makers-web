"use client";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { colors } from '../utils/color';

// Iconos personalizados como componentes SVG
const PlantIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M12 8C10 6 8 6 6 8C4 10 4 12 6 14C8 16 12 18 12 18C12 18 16 16 18 14C20 12 20 10 18 8C16 6 14 6 12 8Z" fill="white"/>
    <path d="M12 6C12 8 10 10 8 10C6 10 4 8 4 6C4 4 6 2 8 2C10 2 12 4 12 6Z" fill="white"/>
  </svg>
);

const NetworkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="8" cy="8" r="2" fill="white"/>
    <circle cx="16" cy="8" r="2" fill="white"/>
    <circle cx="8" cy="16" r="2" fill="white"/>
    <circle cx="16" cy="16" r="2" fill="white"/>
    <line x1="8" y1="8" x2="16" y2="8" stroke="white" strokeWidth="1.5"/>
    <line x1="8" y1="16" x2="16" y2="16" stroke="white" strokeWidth="1.5"/>
    <line x1="8" y1="8" x2="8" y2="16" stroke="white" strokeWidth="1.5"/>
    <line x1="16" y1="8" x2="16" y2="16" stroke="white" strokeWidth="1.5"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="3" fill="white"/>
    <path d="M12 5C7 5 3 8 1 12C3 16 7 19 12 19C17 19 21 16 23 12C21 8 17 5 12 5Z" stroke="white" strokeWidth="1.5" fill="none"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M12 8C10.5 6.5 8.5 6.5 7 8C5.5 9.5 5.5 11.5 7 13C8.5 14.5 12 17 12 17C12 17 15.5 14.5 17 13C18.5 11.5 18.5 9.5 17 8C15.5 6.5 13.5 6.5 12 8Z" fill="white"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M6 9L12 15L18 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M6 15L12 9L18 15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CanopyValuesSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const values = [
    {
      icon: <PlantIcon />,
      title: "We make a positive impact in the world",
      content: [
        "Enabling renewable energy production, helping manufacturers go greener and easing out the transitioning process of big lobbies to sustainability: that's the work we actively develop at Jungle.",
        "By applying technology on solutions with positive societal and environmental outcomes, our team strives to keep making meaningful contributions to a more sustainable and eco-conscious reality for all."
      ]
    },
    {
      icon: <NetworkIcon />,
      title: "We have fun with data science",
      content: [
        "Our team enjoys working with data science and machine learning to solve complex problems.",
        "We believe in making data science accessible and enjoyable for everyone."
      ]
    },
    {
      icon: <EyeIcon />,
      title: "We empower people",
      content: [
        "We believe in empowering individuals through technology and innovation.",
        "Our mission is to provide tools and solutions that help people achieve their goals."
      ]
    },
    {
      icon: <HeartIcon />,
      title: "We are a pretty nice crowd",
      content: [
        "We foster a collaborative and supportive environment where everyone feels valued.",
        "Our team culture is built on respect, empathy, and mutual support."
      ]
    }
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.primary.orange,
        display: 'flex',
        flexDirection: 'column',
        py: { xs: 8, sm: 10, md: 15 }
      }}
    >
             <Container maxWidth={false} sx={{ maxWidth: '1284px' }}>
                   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           {/* Título principal - Fijo en la parte superior */}
                       <Box sx={{ textAlign: 'center', mb: 4, flexShrink: 0 }}>
                                                                                <Typography
                 variant="h1"
                 sx={{
                   fontSize: { xs: '2.5rem', md: '4rem' },
                   fontWeight: 400,
                   color: '#ffffff',
                   mb: 2,
                 }}
               >
                 What it means to be a Jungler
               </Typography>
               
                           <Typography
                 variant="body1"
                 sx={{
                   fontSize: { xs: '1.2rem', md: '1.4rem' },
                   color: '#ffffff',
                   maxWidth: '600px',
                   mx: 'auto',
                   lineHeight: 1.6,
                 }}
               >
                 We are a diverse team of talented and driven individuals who are passionate about using innovative technology to improve the world we live in.
               </Typography>
            </Box>

                                   {/* Lista de valores con acordeón - Se expande hacia abajo */}
             <List sx={{ width: '100%', maxWidth: '1000px', flexGrow: 1 }}>
            {values.map((value, index) => (
              <ListItem
                key={index}
                sx={{
                  py: 0,
                  px: 0,
                  mb: 2,
                  flexDirection: 'column',
                  alignItems: 'stretch',
                }}
              >
                                 {/* Elemento completo del acordeón */}
                 <Box
                   sx={{
                     backgroundColor: expandedIndex === index ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                     borderRadius: '12px',
                     overflow: 'hidden',
                     transition: 'all 0.3s ease',
                     '&:hover': {
                       backgroundColor: expandedIndex === index ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                     }
                   }}
                 >
                   {/* Header del acordeón */}
                   <Box
                     onClick={() => handleToggle(index)}
                     sx={{
                       display: 'flex',
                       alignItems: 'center',
                       py: 3,
                       px: 4,
                       cursor: 'pointer',
                       transition: 'all 0.3s ease',
                     }}
                   >
                                           <ListItemIcon sx={{ minWidth: '56px', mr: 3 }}>
                        <Box
                          sx={{
                            width: '58px',
                            height: '58px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {value.icon}
                        </Box>
                      </ListItemIcon>
                     
                     <ListItemText
                       primary={
                         <Typography
                           variant="body1"
                           sx={{
                             color: '#ffffff',
                             fontSize: '2rem',
                             fontWeight: 300,
                             transition: 'color 0.3s ease',
                             '&:hover': {
                               color: '#ffffff',
                             }
                           }}
                         >
                           {value.title}
                         </Typography>
                       }
                     />
                     
                     <IconButton
                       size="small"
                       sx={{
                         color: '#ffffff',
                         '&:hover': {
                           backgroundColor: 'rgba(255, 255, 255, 0.1)',
                         }
                       }}
                     >
                       {expandedIndex === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
                     </IconButton>
                   </Box>

                   {/* Contenido expandido */}
                   <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                     <Box
                       sx={{
                         px: 4,
                         pb: 3,
                         pl: 13, // Alineado con el texto del título
                       }}
                     >
                       {value.content.map((paragraph, pIndex) => (
                         <Typography
                           key={pIndex}
                           variant="body2"
                           sx={{
                             color: '#ffffff',
                             fontSize: '1.1rem',
                             lineHeight: 1.6,
                             mb: pIndex < value.content.length - 1 ? 2 : 0,
                             opacity: 0.9,
                           }}
                         >
                           {paragraph}
                         </Typography>
                       ))}
                     </Box>
                   </Collapse>
                 </Box>
              </ListItem>
                         ))}
                      </List>
          </Box>
        </Container>
     </Box>
  );
};

export default CanopyValuesSection; 