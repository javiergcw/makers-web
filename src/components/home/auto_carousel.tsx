"use client";

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { colors } from '../utils/color';

interface AutoCarouselProps {
  speed?: number; // Velocidad de movimiento en píxeles por segundo
  pauseOnHover?: boolean; // Pausar al hacer hover
}

const AutoCarousel: React.FC<AutoCarouselProps> = ({
  speed = 30,
  pauseOnHover = true,
}) => {
  const [position, setPosition] = useState(0);

  // Número de imágenes a mostrar (reutilizando la misma imagen)
  const imageCount = 12;
  const imageWidth = 180; // Ancho de cada imagen
  const gap = 60; // Espacio entre imágenes

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - (speed / 60); // 60 FPS
        const totalWidth = imageCount * (imageWidth + gap);
        
        // Resetear posición cuando se complete un ciclo para crear efecto infinito
        if (newPosition <= -totalWidth) {
          return 0;
        }
        
        return newPosition;
      });
    }, 16); // ~60 FPS

    return () => clearInterval(interval);
  }, [speed, imageCount, imageWidth, gap]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      // Pausar la animación
      setPosition((prevPosition) => prevPosition);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      // Reanudar la animación
      setPosition((prevPosition) => prevPosition);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: colors.secondary.peach,
        pt: 10,
        px: 0,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Título centrado */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#666666',
            fontWeight: 500,
            fontSize: '1rem',
            letterSpacing: '0.5px',
          }}
        >
          Trusted by teams around the globe
        </Typography>
      </Box>

      {/* Contenedor del carrusel infinito */}
      <Box
        sx={{
          display: 'flex',
          gap: `${gap}px`,
          transform: `translateX(${position}px)`,
          width: 'max-content',
        }}
      >
        {/* Primera serie de imágenes */}
        {Array.from({ length: imageCount }, (_, index) => (
          <Box
            key={`first-${index}`}
            sx={{
              flexShrink: 0,
              width: imageWidth,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'grayscale(100%)',
              opacity: 0.7,
              transition: 'all 0.3s ease',
              '&:hover': {
                filter: 'grayscale(0%)',
                opacity: 1,
                transform: 'scale(1.05)',
              },
            }}
          >
            <Image
              src="/image/imagen1.png"
              alt={`Logo ${index + 1}`}
              width={140}
              height={60}
              style={{
                objectFit: 'contain',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          </Box>
        ))}
        
        {/* Segunda serie de imágenes para efecto infinito */}
        {Array.from({ length: imageCount }, (_, index) => (
          <Box
            key={`second-${index}`}
            sx={{
              flexShrink: 0,
              width: imageWidth,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'grayscale(100%)',
              opacity: 0.7,
              transition: 'all 0.3s ease',
              '&:hover': {
                filter: 'grayscale(0%)',
                opacity: 1,
                transform: 'scale(1.05)',
              },
            }}
          >
            <Image
              src="/image/imagen1.png"
              alt={`Logo ${index + 1}`}
              width={140}
              height={60}
              style={{
                objectFit: 'contain',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AutoCarousel; 