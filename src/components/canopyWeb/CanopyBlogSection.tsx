'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
    Box,
    Typography,
    Container,
    Card,
    CardContent,
    CardMedia,
    Button,
    Avatar
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '@/components/utils/color';

interface BlogCard {
    id: string;
    slug: string;
    image: string;
    date: string;
    title: string;
    description: string;
}

const blogData: BlogCard[] = [
    {
        id: '1',
        slug: 'unlocking-prescriptive-maintenance-ai-detections',
        image: '/image/IMAGEN6.png',
        date: 'April 11, 2024',
        title: 'Unlocking prescriptive maintenance with AI-based Detections',
        description: 'Prescriptive maintenance solutions are essencial for optimising renewable energy assets, but building such robust features comes with its challenges.'
    },
    {
        id: '2',
        slug: 'solving-predictive-maintenance-time-machine-ai',
        image: '/image/IMAGEN6.png',
        date: 'March 25, 2022',
        title: 'Solving predictive maintenance challenges with Time-Machine AI models',
        description: 'Today we will go on a journey to discover some of the key advantages our Time-Machine AI models bring to predictive maintenance pipelines.'
    },
    {
        id: '3',
        slug: 'unlocking-scalable-predictive-analytics-next-gen-ai',
        image: '/image/IMAGEN6.png',
        date: 'March 8, 2022',
        title: 'Unlocking scalable predictive analytics with next-gen AI models',
        description: 'The need for AI-based predictive solutions for electromechanical assets is on the rise. However, building large scale AI-dependent online systems is by no means an easy feat.'
    }
];

interface CanopyBlogSectionProps {
    onBlogClick?: (slug: string) => void;
}

const CanopyBlogSection: React.FC<CanopyBlogSectionProps> = ({ onBlogClick }) => {
    const router = useRouter();
    const pathname = usePathname();

    // Detectar automáticamente la ruta base del pathname actual
    const getBaseRoute = () => {
        const pathSegments = pathname.split('/').filter(Boolean);
        if (pathSegments.length > 0) {
            return `/${pathSegments[0]}`;
        }
        return '/canopy'; // Fallback
    };

    const currentBaseRoute = getBaseRoute();

    const handleBlogClick = (slug: string) => {
        if (onBlogClick) {
            onBlogClick(slug);
        } else {
            // Default behavior - navigate to blog detail page
            router.push(`${currentBaseRoute}/${slug}`);
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: colors.secondary.peach,
                py: 8,
                px: 2
            }}
        >
            <Container maxWidth="lg">
                {/* Título de la sección */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 'bold',
                            color: '#333',
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontFamily: 'sans-serif',
                            mb: 2
                        }}
                    >
                        Blog
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#666',
                            fontSize: '1.1rem',
                            maxWidth: '600px',
                            mx: 'auto',
                            fontFamily: 'sans-serif'
                        }}
                    >
                        Descubre las últimas innovaciones en mantenimiento predictivo y análisis de datos industriales
                    </Typography>
                </Box>

                {/* Grid de tarjetas de blog */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 4
                    }}
                >
                    {blogData.map((blog) => (
                        <Box key={blog.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: 5,
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&:hover': {
                                        transform: 'translateY(-8px)'
                                    }
                                }}
                            >
                                {/* Imagen del blog */}
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={blog.image}
                                        alt={blog.title}
                                        sx={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            borderRadius: 5
                                        }}
                                    />
                                    {/* Badge de fecha */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 12,
                                            left: 12,
                                            backgroundColor: 'rgba(255,255,255,0.9)',
                                            borderRadius: 3,
                                            px: 2,
                                            py: 0.5
                                        }}
                                    >
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: '#666',
                                                fontSize: '0.75rem',
                                                fontWeight: 500,
                                                fontFamily: 'sans-serif',
                                                
                                            }}
                                        >
                                            {blog.date}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Contenido de la tarjeta */}
                                <CardContent
                                    sx={{
                                        p: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flex: 1,
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Título */}
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 600,
                                            color: '#333',
                                            fontSize: '1.1rem',
                                            fontFamily: 'sans-serif',
                                            mb: 3,
                                            lineHeight: 1.4,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical'
                                        }}
                                    >
                                        {blog.title}
                                    </Typography>

                                    {/* Descripción */}
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#666',
                                            lineHeight: 1.6,
                                            fontSize: '0.9rem',
                                            fontFamily: 'sans-serif',
                                            mb: 3,
                                            flex: 1,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical'
                                        }}
                                    >
                                        {blog.description}
                                    </Typography>

                                    {/* Información del autor y tiempo de lectura */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                            <Avatar
                                                src="/image/IMAGEN6.png"
                                                alt="Silvio Rodrigues"
                                                sx={{ width: 32, height: 32 }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        color: '#333',
                                                        fontSize: '0.8rem',
                                                        fontWeight: 500,
                                                        fontFamily: 'sans-serif',
                                                        display: 'block'
                                                    }}
                                                >
                                                    Silvio Rodrigues
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        color: '#666',
                                                        fontSize: '0.7rem',
                                                        fontFamily: 'sans-serif'
                                                    }}
                                                >
                                                    8 min read
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>

                                    {/* Botón "Read blog" */}
                                    <Button
                                        variant="text"
                                        onClick={() => handleBlogClick(blog.slug)}
                                        sx={{
                                            alignSelf: 'flex-start',
                                            color: '#000000',
                                            textTransform: 'none',
                                            fontWeight: 500,
                                            fontSize: '0.9rem',
                                            fontFamily: 'sans-serif',
                                            p: 0,
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                color: colors.primary.orange
                                            }
                                        }}
                                        endIcon={
                                            <ArrowForwardIcon 
                                                sx={{ 
                                                    fontSize: '1rem',
                                                    transition: 'transform 0.2s ease'
                                                }} 
                                            />
                                        }
                                    >
                                        Read blog
                                    </Button>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default CanopyBlogSection;