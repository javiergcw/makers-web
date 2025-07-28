'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

interface SolutionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkHref: string;
}

interface SolutionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkHref: string;
  imagePosition: 'left' | 'right';
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, imageSrc, linkHref, imagePosition }) => {
  const isImageLeft = imagePosition === 'left';
  
  return (
         <Box 
       sx={{ 
         position: 'relative',
         display: 'flex',
         alignItems: 'center',
         gap: 0,
         flexDirection: { xs: 'column', md: isImageLeft ? 'row' : 'row-reverse' }
       }}
     >
      {/* Imagen */}
      <Box 
        sx={{ 
          position: 'relative',
          width: { xs: '100%', md: 450 },
          height: { xs: 250, md: 250 },
          borderRadius: 2,
          overflow: 'hidden'
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>

             {/* Caja gris oscuro superpuesta */}
       <Box 
         sx={{ 
           backgroundColor: '#f5f5f5',
           borderRadius: 5,
           position: 'relative',
           width: { xs: '90%', md: '60%' },
           height: { xs: 'auto', md: 183 },
           p: 4,
           ml: { xs: 0, md: isImageLeft ? -6 : 0 },
           mr: { xs: 0, md: isImageLeft ? 0 : -6 },
           mt: { xs: -4, md: 0 },
           zIndex: 2,
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center'
         }}
       >
                 {/* Contenido principal */}
         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
           <Typography 
             variant="h5" 
             component="h3" 
             sx={{ 
               fontWeight: 'bold',
               color: '#333',
               fontSize: '1.5rem'
             }}
           >
             {title}
           </Typography>
           
           {/* Enlace en la esquina superior derecha */}
           <Link href={linkHref} style={{ textDecoration: 'none' }}>
             <Typography 
               variant="body2" 
               sx={{ 
                 color: '#333',
                 fontWeight: 500,
                 display: 'flex',
                 alignItems: 'center',
                 gap: 1,
                 cursor: 'pointer',
                 fontSize: '0.875rem',
                 '&:hover': {
                   color: '#666'
                 }
               }}
             >
               Learn more →
             </Typography>
           </Link>
         </Box>

         <Typography 
           variant="body1" 
           sx={{ 
             color: '#666',
             lineHeight: 1.6,
             fontSize: '1rem'
           }}
         >
           {description}
         </Typography>
      </Box>
    </Box>
  );
};

const SensorSolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: "Wind",
      description: "Tackle underperformance and avoid downtime to get your production up to the sky",
      imageSrc: "/image/imagen3.png",
      linkHref: "/solutions/wind",
      imagePosition: 'left' as const
    },
    {
      title: "Solar",
      description: "Ensure top-tier performance by addressing underperformance challenges head-on",
      imageSrc: "/image/imagen3.png",
      linkHref: "/solutions/solar",
      imagePosition: 'right' as const
    },
    {
      title: "Maritime",
      description: "Reduce vessel maintenance cost and avoid lost revenue when your ships are out of operation",
      imageSrc: "/image/imagen3.png",
      linkHref: "/solutions/maritime",
      imagePosition: 'left' as const
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold',
              color: '#333',
              mb: 3,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: 3,
                backgroundColor: '#FFD700',
                borderRadius: 2
              }
            }}
          >
            For sensor-equipped machines{' '}
            <Box component="span" sx={{ textDecoration: 'underline', textDecorationColor: '#FFD700', textDecorationThickness: 3 }}>
              everywhere
            </Box>
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Our solutions have been designed to meet the specific needs of your industry, ensuring that you're getting the most out of your machinery.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              imageSrc={solution.imageSrc}
              linkHref={solution.linkHref}
              imagePosition={solution.imagePosition}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SensorSolutionsSection; 