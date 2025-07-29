'use client';

import React from 'react';
import {
    Box,
    Typography,
    Button,
    Container
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { colors } from '../utils/color';

interface HeroBannerProps {
    bannerText: string;
    buttonText: string;
    buttonRedirect: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
    bannerText,
    buttonText,
    buttonRedirect
}) => {
    const handleButtonClick = () => {
        window.location.href = buttonRedirect;
    };

    return (
        <Box sx={{
            background: `linear-gradient(to bottom, ${colors.secondary.peach} 0%, white 100%)`,
        }}>
            <Box
                sx={{
                    backgroundColor: colors.primary.orange,
                    borderRadius: { xs: '25px', sm: '35px', md: '50px' },
                    py: { xs: 2.5, sm: 4, md: 6, lg: 8 },
                    px: { xs: 2, sm: 3, md: 4 },
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    mx: 0,
                    minHeight: { xs: '200px', sm: '280px', md: 'auto' }
                }}
            >
                {/* Imagen en la parte inferior izquierda */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        zIndex: 1,
                        opacity: 1,
                        ml: { xs: 1, sm: 3, md: 6, lg: 10 },
                        display: { xs: 'none', sm: 'block' }
                    }}
                >
                    <Image
                        src="/image/imagen7.png"
                        alt="Hero decoration"
                        width={200}
                        height={150}
                        style={{
                            objectFit: 'contain',
                            maxWidth: '100%',
                            height: 'auto'
                        }}
                    />
                </Box>

                {/* Imagen decorativa para móvil */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        zIndex: 1,
                        opacity: 0.3,
                        display: { xs: 'block', sm: 'none' }
                    }}
                >
                    <Image
                        src="/image/imagen7.png"
                        alt="Hero decoration mobile"
                        width={100}
                        height={75}
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                </Box>

                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        color: colors.neutral.white,
                        fontWeight: 300,
                        fontSize: { 
                            xs: '1.8rem', 
                            sm: '2.2rem', 
                            md: '3rem', 
                            lg: '3.5rem', 
                            xl: '4rem' 
                        },
                        lineHeight: { xs: 1.1, sm: 1.2 },
                        mb: { xs: 3, sm: 4, md: 4 },
                        mt: { xs: 2, sm: 0 },
                        fontFamily: 'sans-serif',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 2,
                        px: { xs: 1, sm: 0 }
                    }}
                >
                    {bannerText}
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleButtonClick}
                    sx={{
                        backgroundColor: colors.neutral.white,
                        color: "black",
                        borderRadius: { xs: '8px', sm: '10px', md: '12px' },
                        px: { xs: 3, sm: 4, md: 4 },
                        py: { xs: 1, sm: 1.5, md: 1.5 },
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                        fontWeight: '600',
                        textTransform: 'none',
                        position: 'relative',
                        zIndex: 2,
                        minWidth: { xs: '200px', sm: 'auto' },
                        '&:hover': {
                            backgroundColor: '#333333',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                        },
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        '& .MuiButton-endIcon': {
                            fontSize: { xs: '1rem', sm: '1.2rem' }
                        }
                    }}
                >
                    {buttonText}
                </Button>
            </Box>
        </Box>
    );
};

export default HeroBanner; 