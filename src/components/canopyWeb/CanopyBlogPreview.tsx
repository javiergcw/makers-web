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
    Chip,
    Avatar
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getAllBlogPosts } from '@/data/blogData';
import { colors } from '@/components/utils/color';

// Componente separado para las tarjetas de blog
interface BlogCardProps {
    blog: {
        id: string;
        title: string;
        description: string;
        image: string;
        date: string;
        slug: string;
    };
    onBlogClick: (slug: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, onBlogClick }) => {
    return (
        <Box>
            <Card
                sx={{
                    height: '100%',
                    borderRadius: { xs: 3, md: 5 },
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                    }
                }}
            >
                {/* Imagen del blog */}
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image={blog.image}
                        alt={blog.title}
                        sx={{
                            objectFit: 'cover',
                            width: '100%',
                            borderRadius: { xs: 3, md: 5 },
                            height: { xs: '180px', sm: '200px', md: '220px' }
                        }}
                    />
                    {/* Badge de fecha */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: { xs: 8, md: 12 },
                            left: { xs: 8, md: 12 },
                            backgroundColor: colors.neutral.white,
                            borderRadius: 2,
                            px: { xs: 1.5, md: 2 },
                            py: 0.5
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                color: '#666',
                                fontSize: { xs: '0.7rem', md: '0.75rem' },
                                fontWeight: 500,
                                fontFamily: 'sans-serif'
                            }}
                        >
                            {blog.date}
                        </Typography>
                    </Box>
                </Box>

                {/* Contenido de la tarjeta */}
                <CardContent
                    sx={{
                        p: { xs: 2, md: 3 },
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1
                    }}
                >
                    {/* Título */}
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                            fontWeight: 600,
                            color: '#333',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            fontFamily: 'sans-serif',
                            mb: 2,
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
                            fontSize: { xs: '0.85rem', md: '0.9rem' },
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

                    {/* Botón "Leer artículo" */}
                    <Button
                        variant="text"
                        onClick={() => onBlogClick(blog.slug)}
                        sx={{
                            alignSelf: 'flex-start',
                            color: '#333',
                            textTransform: 'none',
                            fontWeight: 500,
                            fontSize: { xs: '0.85rem', md: '0.9rem' },
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
                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                    transition: 'transform 0.2s ease'
                                }} 
                            />
                        }
                    >
                        Leer artículo
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

interface CanopyBlogPreviewProps {
    title?: string;
    subtitle?: string;
    baseRoute?: string;
}

const CanopyBlogPreview: React.FC<CanopyBlogPreviewProps> = ({ 
    title = "Últimos artículos",
    subtitle = "Descubre las últimas innovaciones en mantenimiento predictivo y análisis de datos industriales",
    baseRoute
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const blogPosts = getAllBlogPosts();

    // Detectar automáticamente la ruta base si no se proporciona
    const getBaseRoute = () => {
        if (baseRoute) {
            return baseRoute;
        }
        
        // Extraer la ruta base del pathname actual
        const pathSegments = pathname.split('/').filter(Boolean);
        if (pathSegments.length > 0) {
            return `/${pathSegments[0]}`;
        }
        
        // Fallback a /canopy si no se puede detectar
        return '/canopy';
    };

    const currentBaseRoute = getBaseRoute();

    const handleBlogClick = (slug: string) => {
        router.push(`${currentBaseRoute}/${slug}`);
    };

    const handleViewAllBlogs = () => {
        router.push(`${currentBaseRoute}/blogs`);
    };

    return (
        <Box
            sx={{
                backgroundColor: colors.secondary.peach, // Color melocotón del archivo de colores
                py: { xs: 4, md: 20 },
                px: { xs: 1, md: 2 }
            }}
        >
            <Container maxWidth="lg">
                {/* Título de la sección */}
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 'bold',
                            color: '#333',
                            fontSize: { xs: '1.75rem', sm: '2rem', md: '3rem' },
                            fontFamily: 'sans-serif',
                            mb: 2,
                            px: { xs: 1, md: 0 }
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#666',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            maxWidth: '600px',
                            mx: 'auto',
                            fontFamily: 'sans-serif',
                            px: { xs: 2, md: 0 }
                        }}
                    >
                        {subtitle}
                    </Typography>
                </Box>

                {/* Grid de tarjetas de blog */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { 
                            xs: '1fr', 
                            sm: 'repeat(2, 1fr)', 
                            md: 'repeat(3, 1fr)' 
                        },
                        gap: { xs: 3, md: 4 }
                    }}
                >
                    {blogPosts.map((blog) => (
                        <BlogCard 
                            key={blog.id} 
                            blog={blog} 
                            onBlogClick={handleBlogClick}
                        />
                    ))}
                </Box>

                {/* Botón "Ver todos los artículos" */}
                <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 6 } }}>
                    <Button
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        onClick={handleViewAllBlogs}
                        sx={{
                            backgroundColor: colors.primary.orange,
                            color: colors.neutral.white,
                            borderRadius: '8px',
                            px: { xs: 3, md: 4 },
                            py: { xs: 1.5, md: 2 },
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            fontWeight: 600,
                            textTransform: 'none',
                            fontFamily: 'sans-serif',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: colors.accent.yellow,
                                color: 'black',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                            }
                        }}
                    >
                        Ver todos los artículos
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default CanopyBlogPreview;