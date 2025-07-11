"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const animatedWords = ['INNOVACIÓN', 'CREATIVIDAD'];

const HighlightedWord = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
        padding: '0 6px 2px 6px',
      }}
    >
      {show && (
        <span
          style={{
            position: 'absolute',
            left: 0,
            bottom: 2,
            width: '100%',
            height: '85%',
            background: 'rgba(254,83,55,0.32)',
            borderRadius: 8,
            zIndex: 0,
            pointerEvents: 'none',
            animation: `highlightMarker 1.1s cubic-bezier(0.4,0,0.2,1) 0s 1`,
            transformOrigin: 'left',
          } as React.CSSProperties}
        />
      )}
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
      <style>{`
        @keyframes highlightMarker {
          from { transform: scaleX(0); opacity: 0.7; }
          to { transform: scaleX(1); opacity: 1; }
        }
      `}</style>
    </span>
  );
};

const WhoWeAreSection: React.FC = () => {
  const [wordIndex, setWordIndex] = React.useState(0);
  const [animate, setAnimate] = React.useState(true);

  React.useEffect(() => {
    if (!animate) return;
    const timeout = setTimeout(() => {
      setAnimate(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % animatedWords.length);
        setAnimate(true);
      }, 400); // Breve pausa antes de cambiar
    }, 2200); // Duración de la animación
    return () => clearTimeout(timeout);
  }, [wordIndex, animate]);

  return (
    <Box sx={{
      width: '100%',
      background: '#090909',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pt: 8, // más espacio arriba
      pb: { xs: 18, md: 20 }, // más espacio abajo
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Banner superior animado */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          background: '#FE5337',
          borderRadius: '999px',
          px: 0.7,
          paddingRight: 2,
          py: 0.5,
          mb: 10, // más espacio debajo del banner
          maxWidth: 700,
          minHeight: 48,
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            background: '#fff',
            color: '#FE5337',
            borderRadius: '999px',
            px: 3,
            py: 1,
            fontWeight: 500,
            fontSize: 15,
            display: 'flex',
            alignItems: 'center',
            minWidth: 70,
            justifyContent: 'center',
            mr: 3, // más espacio entre la etiqueta y el texto
            overflow: 'hidden',
            position: 'relative',
            width: 120,
            height: 36,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              position: 'absolute',
              left: animate ? 0 : '100%',
              transition: 'left 2s cubic-bezier(0.4,0,0.2,1)',
              whiteSpace: 'nowrap',
              width: '100%',
              textAlign: 'center',
            }}
          >
            {animatedWords[wordIndex]}
          </span>
        </Box>
        <Typography
          sx={{
            color: 'white',
            fontSize: 18,
            fontWeight: 400,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Makers innova, crea y lidera.
          <span style={{ fontSize: 22, marginLeft: 8, display: 'inline-block', verticalAlign: 'middle' }}>→</span>
        </Typography>
      </Box>
      {/* Fin banner superior animado */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: 'white',
          fontWeight: 200,
          fontSize: { xs: '2.4rem', md: '2.3rem' },
          lineHeight: 1.15,
          mb: 3,
          maxWidth: 720,
        }}
      >
        Creamos el futuro digital: <HighlightedWord delay={0}>tecnología</HighlightedWord>, <HighlightedWord delay={0.5}>talento</HighlightedWord> y <HighlightedWord delay={1}>pasión</HighlightedWord> en cada proyecto
      </Typography>
      <Typography
        align="center"
        sx={{
          color: '#B0B3B8',
          fontSize: { xs: 12, md: 16 },
          maxWidth: 570,
          mb: 5,
        }}
      >
        En Makers, desarrollamos soluciones digitales que impulsan la transformación de empresas y mejoran la vida de las personas. Nuestro equipo combina innovación, experiencia y creatividad para llevar cada idea al siguiente nivel y construir juntos un mundo más conectado.
      </Typography>
      <Box
        sx={{
          width: { xs: '95%', sm: '90%', md: '80%' },
          maxWidth: 1000,
          mb: { xs: -10, md: -14 },
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: 6,
          background: 'white',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <img
          src="/home/homemakers.png"
          alt="Who we are"
          style={{ width: '100%', display: 'block'}}
        />
      </Box>
    </Box>
  );
};

export default WhoWeAreSection; 