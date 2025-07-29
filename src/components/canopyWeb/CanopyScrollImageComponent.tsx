'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { colors } from '../utils/color';

interface SectionData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const sections: SectionData[] = [
  {
    id: 1,
    title: "Detect and avoid",
    description: "Detect anything that impacts your machines' health or performance with Canopy's cutting-edge AI models. Battle-tested on the world's most challenging datasets, Canopy integrates domain expertise and the latest industry insights into machine-specific rules, providing early warnings about developing issues, either common or machine-specific.",
     image: "/image/imagen2.png"
  },
  {
    id: 2,
    title: "Context-sensitive alarms",
    description: "Stop relying on setpoint alarms. Canopy's alarms are dynamic and contextual, only informing you when the condition of your machines deviates from what is expected under specific operational and ambient conditions.",
   image: "/image/imagen1.png"
  },
  {
    id: 3,
    title: "Classify and quantify underperformance",
    description: "Efficiently monitor a variety of assets and assess the factors influencing their performance. Canopy pinpoints root causes of underperformance, minimising losses and increasing your gross margin. Identify your best and worst performing machines and intervene to ensure optimal performance.",
    image: "/image/imagen3.png"
  },
  {
    id: 4,
    title: "Investigations to the sensor level",
    description: "Harness the power of timeseries and seamlessly identify patterns, trends, and anomalies in your data. Plot multiple sensors from different assets, or different sensors from a single machine, and compare them with Canopy's models and detections, to make informed decisions and ensure the optimal performance of your equipment.",
    image: "/image/imagen4.png"
  }
];

const CanopyScrollImageComponent: React.FC = () => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState<number>(1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            const sectionId = index + 1;
            console.log('Scroll detectado - Sección:', sectionId);
            setActiveSection(sectionId);
          }
        }
      });
    };

    // Ejecutar una vez al inicio
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ backgroundColor: colors.primary.orange, minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Título centrado */}
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'white',
              fontWeight: 300, // Más delgado
              fontSize: { xs: '2rem', md: '3rem' }, // Más grande
              letterSpacing: '2px', // Letras más separadas
              lineHeight: 1.2,
              '& .highlight': {
                textDecoration: 'underline',
                textDecorationColor: '#FFD700',
                textUnderlineOffset: '4px'
              }
            }}
          >
            <span className="highlight"> Remove </span> uncertainty out <br/> of your operations
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
          {/* Sección izquierda - Contenido */}
          <Box sx={{ flex: 1, pr: 4 }}>
            {sections.map((section, index) => (
              <Box
                key={section.id}
                ref={(el: HTMLDivElement | null) => {
                  sectionRefs.current[index] = el;
                }}
                data-section-id={section.id}
                sx={{
                  mb: 40, // Aumentado de 12 a 20 para mucho más espacio
                  opacity: activeSection === section.id ? 1 : 0.6,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    mb: 2,
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    backgroundColor: 'white',
                    color: '#D43A1F',
                    fontSize: '0.875rem',
                    fontWeight: 'medium'
                  }}
                >
                  #{section.id.toString().padStart(2, '0')}
                </Box>
                
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 2, 
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  {section.title}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'white',
                    lineHeight: 1.6
                  }}
                >
                  {section.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Sección derecha - Imagen sin contenedor */}
          <Box sx={{ flex: 1, position: 'sticky', top: 0, height: 400 }}>
            {sections.map((section) => (
              <Box
                key={section.id}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: activeSection === section.id ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  width={400}
                  height={400}
                  style={{
                    objectFit: 'contain',
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CanopyScrollImageComponent;