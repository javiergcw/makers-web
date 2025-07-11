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
            background: 'rgba(38,33,249,0.22)', // azul translúcido
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
      mt: 8, // más espacio arriba
      pb: { xs: 18, md: 20 }, // más espacio abajo
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Banner superior animado */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(90deg, #2621F9 0%, #FE5337 100%)',
          borderRadius: '999px',
          px: 1.2,
          py: 1,
          mb: 8,
          maxWidth: 600,
          minHeight: 44,
          boxShadow: '0 6px 24px 0 rgba(38,33,249,0.12), 0 1.5px 8px 0 rgba(0,0,0,0.09)',
          transition: 'box-shadow 0.3s, background 0.3s',
          position: 'relative',
          overflow: 'visible',
          '&:hover': {
            boxShadow: '0 10px 32px 0 rgba(38,33,249,0.16), 0 2px 12px 0 rgba(0,0,0,0.10)',
            background: 'linear-gradient(90deg, #2621F9 0%, #FE5337 80%)',
          },
        }}
      >
        <Box
          sx={{
            background: 'rgba(255,255,255,0.95)',
            color: '#2621F9',
            borderRadius: '999px',
            px: 2.5,
            py: 0.8,
            fontWeight: 600,
            fontSize: 15,
            display: 'flex',
            alignItems: 'center',
            minWidth: 70,
            justifyContent: 'center',
            mr: 2.5,
            overflow: 'hidden',
            position: 'relative',
            width: 110,
            height: 32,
            border: '1.5px solid #2621F9',
            boxShadow: '0 2px 8px 0 rgba(38,33,249,0.10)',
            letterSpacing: 0.7,
            textTransform: 'uppercase',
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
              fontWeight: 700,
              fontSize: 14  ,
            }}
          >
            {animatedWords[wordIndex]}
          </span>
        </Box>
        <Typography
          sx={{
            color: '#fff',
            fontSize: 17,
            fontWeight: 500,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            letterSpacing: 0.3,
            textShadow: '0 1px 6px rgba(38,33,249,0.10)',
          }}
        >
          Makers innova, crea y lidera.
          <span
            style={{
              fontSize: 22,
              marginLeft: 10,
              display: 'inline-block',
              verticalAlign: 'middle',
              transition: 'transform 0.3s, color 0.3s',
            }}
            className="premium-arrow"
          >
            →
          </span>
        </Typography>
        <style>{`
          .premium-arrow:hover {
            color: #FFD12A;
            transform: translateX(5px) scale(1.1);
          }
        `}</style>
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
        Creamos el futuro digital: <HighlightedWord delay={0}>tecnología</HighlightedWord>, <HighlightedWord delay={0.5}>IA</HighlightedWord>, <HighlightedWord delay={1}>talento</HighlightedWord> y <HighlightedWord delay={1.5}>pasión</HighlightedWord> en cada proyecto
      </Typography>
      <Typography
        align="center"
        sx={{
          color: '#B0B3B8',
          fontSize: { xs: 14, md: 16 },
          maxWidth: 600,
          mb: 5,
        }}
      >
        En Makers, potenciamos empresas y personas con soluciones digitales y de inteligencia artificial. Aplicamos IA para automatizar procesos, descubrir oportunidades y crear productos inteligentes que marcan la diferencia. Nuestro equipo une innovación, experiencia y creatividad para transformar ideas en realidades que impactan el mundo.
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