'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { colors } from '../utils/color';

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
                flexDirection: { xs: 'column', md: isImageLeft ? 'row' : 'row-reverse' },
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                mb: { xs: 4, md: 2 }
            }}
        >
            {/* Imagen */}
            <Box
                sx={{
                    position: 'relative',
                    width: { xs: '100%', md: 450 },
                    height: { xs: 200, sm: 250, md: 250 },
                    borderRadius: { xs: 1, md: 2 },
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
                className="solution-card"
                sx={{
                    backgroundColor: colors.secondary.peach,
                    borderRadius: { xs: 2, md: 5 },
                    position: 'relative',
                    width: { xs: '95%', sm: '90%', md: '60%' },
                    height: { xs: 'auto', md: 183 },
                    p: { xs: 2, sm: 3, md: 4 },
                    ml: { xs: 0, md: isImageLeft ? -6 : 0 },
                    mr: { xs: 0, md: isImageLeft ? 0 : -6 },
                    mt: { xs: -2, sm: -3, md: 0 },
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease-in-out'
                }}
            >
                {/* Contenido principal */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: { xs: 'flex-start', sm: 'flex-start' }, 
                    mb: { xs: 1, md: 1 },
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 1, sm: 0 }
                }}>
                    <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                            fontWeight: 'bold',
                            color: '#333',
                            fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.5rem' },
                            lineHeight: { xs: 1.2, md: 1.3 }
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
                                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                                '&:hover': {
                                    color: colors.primary.orange
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
                        fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                        mt: { xs: 1, md: 0 }
                    }}
                >
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

const CanopySolutionsSection: React.FC = () => {
    const solutions = [
        {
            title: "Predictive Maintenance",
            description: "Anticipate equipment failures before they happen with our AI-powered predictive maintenance solutions",
            imageSrc: "/image/imagen3.png",
            linkHref: "/canopy/predictive-maintenance",
            imagePosition: 'left' as const
        },
        {
            title: "Performance Optimization",
            description: "Maximize your machine efficiency and output with intelligent performance monitoring and optimization",
            imageSrc: "/image/imagen3.png",
            linkHref: "/canopy/performance-optimization",
            imagePosition: 'right' as const
        },
        {
            title: "Real-time Analytics",
            description: "Get instant insights into your operations with comprehensive real-time data analytics and reporting",
            imageSrc: "/image/imagen3.png",
            linkHref: "/canopy/real-time-analytics",
            imagePosition: 'left' as const
        }
    ];

    return (
        <Box sx={{ 
            py: { xs: 2, sm: 6, md: 8 }, 
            backgroundColor: 'white' 
        }}>
            <Container maxWidth={false} sx={{ 
                maxWidth: '1280px', 
                mx: 'auto', 
                px: { xs: 2, sm: 3, md: 0 }, 
                py: { xs: 4, sm: 12, md: 15 } 
            }}>
                <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 5, md: 6 } }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 300,
                            color: '#333',
                            mb: { xs: 2, sm: 3 },
                            position: 'relative',
                            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem' },
                            lineHeight: { xs: 1.1, sm: 1.2, md: 1 },
                            px: { xs: 1, sm: 0 }
                        }}
                    >
                        Designed to help teams  <br/> across{' '}
                        <Box component="span" sx={{
                            textDecoration: 'underline',
                            textDecorationColor: colors.primary.orange,
                            textDecorationThickness: { xs: 2, md: 3 }
                        }}>
                            industries
                        </Box>
                    </Typography>
                </Box>

                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: { xs: 0, md: 2 }
                }}>
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

export default CanopySolutionsSection;