'use client';

import React from 'react';
import { Box } from '@mui/material';
import CanopyBlogSection from './CanopyBlogSection';

const CanopyBlogSectionExample: React.FC = () => {
    // Función personalizada para manejar el clic en los blogs
    const handleBlogClick = (slug: string) => {
        console.log(`Blog clicked: ${slug}`);
        
        // Aquí puedes implementar la lógica que necesites:
        // - Navegación a una página de detalle
        // - Apertura de un modal
        // - Envío de analytics
        // - etc.
        
        // Ejemplo: navegación a página de detalle
        // router.push(`/blog/${slug}`);
        
        // Ejemplo: apertura de modal
        // setSelectedBlog(slug);
        // setModalOpen(true);
    };

    return (
        <Box>
            {/* Otros componentes de la página */}
            
            {/* Sección de blog con manejo personalizado */}
            <CanopyBlogSection onBlogClick={handleBlogClick} />
            
            {/* Más componentes */}
        </Box>
    );
};

export default CanopyBlogSectionExample;