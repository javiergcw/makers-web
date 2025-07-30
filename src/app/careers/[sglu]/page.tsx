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

export default function CareersBlogDetailPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.sglu as string;
    
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
                        onClick={() => router.push('/careers')}
                        startIcon={<ArrowBackIcon />}
                    >
                        Volver a Careers
                    </Button>
                </Box>
            </Container>
        );
    }

    return (
        <Box sx={{ backgroundColor: colors.secondary.peach }}>
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
                                fontSize: { xs: '2rem', md: '3rem' },
                                fontFamily: 'sans-serif',
                                mb: 2,
                                lineHeight: 1.2
                            }}
                        >
                            {blogPost.title}
                        </Typography>
                        
                        {/* Meta información */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Avatar
                                    src={blogPost.author.avatar}
                                    alt={blogPost.author.name}
                                    sx={{ width: 32, height: 32 }}
                                />
                                <Typography variant="body2">
                                    {blogPost.author.name} • {blogPost.author.title}
                                </Typography>
                            </Box>
                            <Typography variant="body2">
                                {blogPost.date} • {blogPost.readTime}
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Contenido del blog */}
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Box sx={{ 
                    backgroundColor: 'white', 
                    borderRadius: 3, 
                    p: { xs: 3, md: 6 },
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}>
                    {/* Contenido HTML */}
                    <Box
                        sx={{
                            '& h2': {
                                fontSize: '1.8rem',
                                fontWeight: 'bold',
                                color: '#333',
                                mt: 4,
                                mb: 2,
                                fontFamily: 'sans-serif'
                            },
                            '& h3': {
                                fontSize: '1.4rem',
                                fontWeight: '600',
                                color: '#333',
                                mt: 3,
                                mb: 1.5,
                                fontFamily: 'sans-serif'
                            },
                            '& p': {
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                color: '#555',
                                mb: 2,
                                fontFamily: 'sans-serif'
                            },
                            '& ul, & ol': {
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                color: '#555',
                                mb: 2,
                                pl: 3,
                                fontFamily: 'sans-serif'
                            },
                            '& li': {
                                mb: 0.5
                            },
                            '& strong': {
                                fontWeight: '600',
                                color: '#333'
                            },
                            '& img': {
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: 2,
                                my: 2
                            }
                        }}
                        dangerouslySetInnerHTML={{ __html: blogPost.content }}
                    />
                </Box>

                {/* Botón de regreso */}
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Button
                        variant="outlined"
                        onClick={() => router.push('/careers')}
                        startIcon={<ArrowBackIcon />}
                        sx={{
                            borderColor: colors.primary.orange,
                            color: colors.primary.orange,
                            '&:hover': {
                                borderColor: '#e6452e',
                                backgroundColor: 'rgba(230, 69, 46, 0.04)'
                            }
                        }}
                    >
                        Volver a Careers
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
