"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useInView } from 'react-intersection-observer';
import { colors } from '../utils/color';

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
         <Box
       ref={ref}
       sx={{
         backgroundColor: colors.secondary.peach,
         borderRadius: 2,
         p: { xs: 2, md: 3 },
         opacity: inView ? 1 : 0,
         transform: inView ? 'translateY(0)' : 'translateY(30px)',
         transition: `all 0.6s ease-out ${delay}s`,
         mb: 3,
       }}
     >
       <Box
         sx={{
           display: 'flex',
           flexDirection: { xs: 'column', sm: 'row' },
           alignItems: { xs: 'flex-start', sm: 'center' },
           gap: { xs: 2, sm: 3 },
         }}
       >
         <Box
           sx={{
             width: { xs: '100%', sm: 80 },
             height: { xs: 120, sm: 60 },
             borderRadius: 2,
             overflow: 'hidden',
             flexShrink: 0,
           }}
         >
           <img
             src={image}
             alt={title}
             style={{
               width: '100%',
               height: '100%',
               objectFit: 'cover',
             }}
           />
         </Box>
         <Box sx={{ flex: 1, width: '100%' }}>
           <Typography
             variant="h6"
             sx={{
               fontWeight: 700,
               color: '#1f2937',
               mb: 1,
               fontSize: { xs: '1rem', md: '1.125rem' },
               textAlign: { xs: 'center', sm: 'left' },
             }}
           >
             {title}
           </Typography>
           <Typography
             variant="body2"
             sx={{
               color: '#6b7280',
               lineHeight: 1.6,
               fontSize: { xs: '0.875rem', md: '1rem' },
               textAlign: { xs: 'center', sm: 'left' },
             }}
           >
             {description}
           </Typography>
         </Box>
       </Box>
     </Box>
   );
};

const AccuracyAutomationSection: React.FC = () => {
  return (
         <Box
       sx={{
         backgroundColor: colors.secondary.peach,
         py: { xs: 8, md: 15 },
         minHeight: 'auto',
         display: 'flex',
         alignItems: 'center',
         overflow: 'hidden',
       }}
     >
       <Container
         maxWidth={false}
         sx={{
           maxWidth: '1284px',
           mx: 'auto',
           px: { xs: 1, sm: 2, md: 4 },
         }}
       >
                 {/* Header Area */}
         <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
           <Typography
             variant="h1"
             sx={{
               fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
               fontWeight: 700,
               color: '#1f2937',
               mb: { xs: 2, md: 3 },
             }}
           >
             Accuracy meets automation
           </Typography>
           <Typography
             variant="body1"
             sx={{
               fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
               color: '#6b7280',
               maxWidth: '900px',
               mx: 'auto',
               lineHeight: 1.6,
               px: { xs: 1, sm: 0 },
             }}
           >
             Jungle's forecasting model reduces the cost of variability of the power output of your wind and solar farms, 
             producing highly accurate and reliable power forecasts based on asset telemetry and numerical weather forecasts.
           </Typography>
         </Box>

                                   {/* Main Content Box */}
          <Box
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: 3,
              p: { xs: 3, sm: 4, md: 6 },
            }}
          >
                     {/* Sección Accuracy */}
           <Box sx={{ mb: { xs: 4, md: 6 } }}>
             <Typography
               variant="h2"
               sx={{
                 fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                 fontWeight: 700,
                 color: '#1f2937',
                 mb: { xs: 2, md: 3 },
               }}
             >
               Accuracy
             </Typography>

             <Typography
               variant="body1"
               sx={{
                 color: '#6b7280',
                 mb: { xs: 3, md: 4 },
                 lineHeight: 1.6,
                 fontSize: { xs: '0.875rem', md: '1rem' },
               }}
             >
               Our state-of-the-art AI models leverage SCADA data on top of various numerical weather models 
               to deliver accurate probabilistic power forecasts for your renewable energy assets.
             </Typography>

            {/* Tarjetas de características */}
            <FeatureCard
              image="/image/imagen1.png"
              title="SCADA data"
              description="Jungle's tailored models are trained with contextual operational data directly from your farms."
              delay={0.2}
            />
            <FeatureCard
              image="/image/imagen2.png"
              title="Numerical weather forecasts"
              description="Several weather forecasts are ensemble to ensure that the best power forecasts are obtainable."
              delay={0.4}
            />
            <FeatureCard
              image="/image/imagen3.png"
              title="AI models"
              description="We developed next-gen deep learning AI models that can leverage and learn from very large quantities of data."
              delay={0.6}
            />
          </Box>

                     {/* Separador */}
           <Box
             sx={{
               height: '1px',
               backgroundColor: '#e5e7eb',
               mb: { xs: 4, md: 6 },
             }}
           />

           {/* Sección Automation */}
           <Box>
             <Typography
               variant="h2"
               sx={{
                 fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                 fontWeight: 700,
                 color: '#1f2937',
                 mb: { xs: 2, md: 3 },
               }}
             >
               Automation
             </Typography>

             <Typography
               variant="body1"
               sx={{
                 color: '#6b7280',
                 lineHeight: 1.6,
                 fontSize: { xs: '0.875rem', md: '1rem' },
               }}
             >
               Automation is required to provide maximum flexibility for our users, whilst offering our services 
               at competitive cost levels. Our personalised models and predictions are made available through 
               a programmatic interface (API), generated by Jungle for each of your wind and solar farms.
             </Typography>
           </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AccuracyAutomationSection; 