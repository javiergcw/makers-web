'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    Box,
    Container,
    Typography,
    Chip,
    Avatar,
    Button,
    Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getBlogPostBySlug } from '@/data/blogData';
import { colors } from '@/components/utils/color';

export default function BlogDetailPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    
    const blogPost = getBlogPostBySlug(slug);

    if (!blogPost) {
        return (
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography variant="h4" sx={{ textAlign: 'center', color: '#666' }}>
                    Blog post no encontrado
                </Typography>
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Button
                        variant="outlined"
                        onClick={() => router.push('/canopy/blogs')}
                        startIcon={<ArrowBackIcon />}
                    >
                        Volver al blog
                    </Button>
                </Box>
            </Container>
        );
    }

    return (
        <Box sx={{ backgroundColor: colors.secondary.peach, minHeight: '100vh' }}>
            {/* Header con imagen de fondo */}
            <Box
                sx={{
                    position: 'relative',
                    height: '400px',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${blogPost.featuredImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ color: 'white', textAlign: 'center' }}>
                        {/* Tags */}
                        <Box sx={{ mb: 2 }}>
                            {blogPost.tags.map((tag, index) => (
                                <Chip
                                    key={index}
                                    label={tag}
                                    sx={{
                                        backgroundColor: colors.primary.orange,
                                        color: 'white',
                                        mr: 1,
                                        mb: 1,
                                        '&:hover': {
                                            backgroundColor: '#e6452e'
                                        }
                                    }}
                                />
                            ))}
                        </Box>
                        
                        {/* Título */}
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '2rem', md: '3.5rem' },
                                fontFamily: 'sans-serif',
                                mb: 2,
                                lineHeight: 1.2
                            }}
                        >
                            {blogPost.title}
                        </Typography>
                        
                        {/* Meta información */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                            <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                {blogPost.date}
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                •
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                {blogPost.readTime}
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Contenido principal */}
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', lg: 'row' } }}>
                    {/* Contenido del blog */}
                    <Box sx={{ flex: 1 }}>
                        {/* Información del autor */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                mb: 4,
                                p: 3,
                                backgroundColor: colors.neutral.white,
                                borderRadius: 2,
                                border: `1px solid ${colors.primary.orange}20`
                            }}
                        >
                            <Avatar
                                src={blogPost.author.avatar}
                                alt={blogPost.author.name}
                                sx={{ width: 60, height: 60 }}
                            />
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                                    {blogPost.author.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#666' }}>
                                    {blogPost.author.title}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Contenido del blog */}
                        <Box
                            sx={{
                                '& h2': {
                                    fontSize: '1.8rem',
                                    fontWeight: 600,
                                    color: '#333',
                                    mt: 4,
                                    mb: 2,
                                    fontFamily: 'sans-serif'
                                },
                                '& h3': {
                                    fontSize: '1.4rem',
                                    fontWeight: 600,
                                    color: '#333',
                                    mt: 3,
                                    mb: 1.5,
                                    fontFamily: 'sans-serif'
                                },
                                '& p': {
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    color: '#444',
                                    mb: 2,
                                    fontFamily: 'sans-serif'
                                },
                                '& ul, & ol': {
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    color: '#444',
                                    mb: 2,
                                    fontFamily: 'sans-serif',
                                    pl: 3
                                },
                                '& li': {
                                    mb: 1
                                },
                                '& strong': {
                                    fontWeight: 600,
                                    color: '#333'
                                },
                                '& img': {
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: 2,
                                    my: 2
                                },
                                '& div': {
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    color: '#444',
                                    fontFamily: 'sans-serif'
                                }
                            }}
                            dangerouslySetInnerHTML={{ __html: blogPost.content }}
                        />
                    </Box>

                    {/* Sidebar */}
                    <Box sx={{ width: { xs: '100%', lg: '300px' } }}>
                        {/* Botón de regreso */}
                        <Box sx={{ mb: 4 }}>
                            <Button
                                variant="outlined"
                                onClick={() => router.push('/canopy/blogs')}
                                startIcon={<ArrowBackIcon />}
                                sx={{
                                    borderColor: colors.primary.orange,
                                    color: colors.primary.orange,
                                    '&:hover': {
                                        borderColor: '#e6452e',
                                        backgroundColor: `${colors.primary.orange}10`
                                    }
                                }}
                            >
                                Volver al blog
                            </Button>
                        </Box>

                        {/* Información adicional */}
                        <Box
                            sx={{
                                p: 3,
                                backgroundColor: colors.neutral.white,
                                borderRadius: 2,
                                mb: 3,
                                border: `1px solid ${colors.primary.orange}20`
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
                                Información del artículo
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                                    Fecha de publicación
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                    {blogPost.date}
                                </Typography>
                            </Box>
                            
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                                    Tiempo de lectura
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                    {blogPost.readTime}
                                </Typography>
                            </Box>
                            
                            <Box>
                                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                                    Categorías
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {blogPost.tags.map((tag, index) => (
                                                                            <Chip
                                        key={index}
                                        label={tag}
                                        size="small"
                                        sx={{
                                            backgroundColor: `${colors.primary.orange}20`,
                                            color: colors.primary.orange,
                                            fontSize: '0.75rem'
                                        }}
                                    />
                                    ))}
                                </Box>
                            </Box>
                        </Box>

                        {/* Compartir */}
                        <Box
                            sx={{
                                p: 3,
                                backgroundColor: colors.neutral.white,
                                borderRadius: 2,
                                border: `1px solid ${colors.primary.orange}20`
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
                                Compartir artículo
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                                Si te gustó este artículo, compártelo con tu red profesional.
                            </Typography>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: colors.primary.orange,
                                    '&:hover': {
                                        backgroundColor: '#e6452e'
                                    }
                                }}
                            >
                                Compartir en LinkedIn
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
