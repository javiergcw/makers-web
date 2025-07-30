'use client';

import React from 'react';
import { Box } from '@mui/material';
import CanopyLanding from '@/components/canopyWeb/CanopyLanding';
import CanopyValueSection from '@/components/canopyWeb/CanopyValueSection';
import CanopyDashboardWithImage from '@/components/canopyWeb/CanopyDashboardWithImage';
import CanopyScrollImageComponent from '@/components/canopyWeb/CanopyScrollImageComponent';
import CanopySolutionsSection from '@/components/canopyWeb/CanopySolutionsSection';
import CanopyFAQSection from '@/components/canopyWeb/CanopyFAQSection';
import CanopyBlogPreview from '@/components/canopyWeb/CanopyBlogPreview';
import HeroBanner from '@/components/home/hero_banner';

export default function Canopy() {
    return (
        <Box>
            <CanopyLanding />
            <CanopyValueSection />
            <CanopyDashboardWithImage />
            <CanopyScrollImageComponent />
            <CanopySolutionsSection />
            <CanopyFAQSection />
            <CanopyBlogPreview 
                title="Últimos artículos"
                subtitle="Descubre las últimas innovaciones en mantenimiento predictivo y análisis de datos industriales"
                baseRoute="/canopy"
            />
            <HeroBanner
                bannerText="Predicting when and why electrical assets fail"
                buttonText="Start today"
                buttonRedirect="/canopy"
            />
        </Box>
    );
}   