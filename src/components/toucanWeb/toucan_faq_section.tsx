'use client';

import React, { useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { colors } from '../utils/color';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What are your AI models doing, how are weights defined, etc?",
        answer: "Our AI models use advanced machine learning algorithms to analyze weather patterns and historical data. The weights are dynamically adjusted based on real-time performance and accuracy metrics. We employ ensemble methods that combine multiple models to ensure robust and reliable forecasts."
    },
    {
        question: "What kind of weather models do you use?",
        answer: "We utilize a combination of numerical weather prediction models, including ECMWF, GFS, and regional models. Our platform integrates multiple data sources and applies proprietary algorithms to enhance forecast accuracy for renewable energy applications."
    },
    {
        question: "What information do you need to get started?",
        answer: "To get started, we need basic information about your renewable energy assets, including location coordinates, capacity, and historical production data. We can also work with existing weather data and will guide you through the integration process."
    },
    {
        question: "How much historical SCADA data is required for your forecasts?",
        answer: "We recommend at least 6-12 months of historical SCADA data for optimal forecast accuracy. However, we can start with as little as 3 months of data and improve our models as more data becomes available. The more historical data we have, the better our predictions become."
    },
    {
        question: "What's the advantage of using your API solution?",
        answer: "Our API solution provides real-time access to accurate weather forecasts and power predictions. It offers seamless integration with existing systems, reduces operational costs, and enables data-driven decision making for renewable energy operations."
    },
    {
        question: "Do you offer free trials?",
        answer: "Yes, we offer free trials to help you evaluate our platform's capabilities. Contact our team to set up a trial period where you can test our forecasting accuracy and integration features with your specific use case."
    }
];

const ToucanFAQSection: React.FC = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            sx={{
                backgroundColor: colors.primary.orange,
                display: 'flex',
                flexDirection: 'column',
                py: { xs: 8, sm: 10, md: 15 }
            }}
        >
            <Container maxWidth={false} sx={{ maxWidth: '1280px', mx: 'auto', px: { xs: 2, sm: 3, md: 0 } }}>
                {/* Título */}
                <Box
                    sx={{
                        backgroundColor: colors.primary.orange,
                        mb: { xs: 3, md: 4 }
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: colors.neutral.white,
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                            fontFamily: 'sans-serif',
                            backgroundColor: colors.primary.orange,
                            lineHeight: { xs: 1.2, md: 1.1 },
                            px: { xs: 1, sm: 2 }
                        }}
                    >
                        Frequently asked questions
                    </Typography>
                </Box>

                {/* Contenedor de FAQ */}
                <Box
                    sx={{
                        maxWidth: '900px',
                        mx: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 2, sm: 3 },
                        position: 'relative',
                        transform: 'translateZ(0)',
                        mt: { xs: 2, sm: 3, md: 4 }
                    }}
                >
                    {faqData.map((item, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                            sx={{
                                backgroundColor: colors.background.primary,
                                borderRadius: { xs: 4, md: 6 },
                                boxShadow: 'none',
                                '&:before': {
                                    display: 'none',
                                },
                                '&.Mui-expanded': {
                                    margin: 0,
                                    boxShadow: 'none',
                                },
                                transition: 'all 0.3s ease-in-out',
                                transform: 'translateZ(0)',
                                overflow: 'hidden'
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <KeyboardArrowDownIcon
                                        sx={{
                                            color: '#000000',
                                            transition: 'transform 0.3s ease',
                                            transform: expanded === `panel${index}` ? 'rotate(180deg)' : 'rotate(0deg)',
                                            fontSize: { xs: '1.5rem', md: '2rem' }
                                        }}
                                    />
                                }
                                sx={{
                                    px: { xs: 2, sm: 3, md: 4 },
                                    py: { xs: 2, sm: 2.5, md: 3 },
                                    '& .MuiAccordionSummary-content': {
                                        margin: 0,
                                    }
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 400,
                                        color: '#000000',
                                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' },
                                        fontFamily: 'sans-serif',
                                        flex: 1,
                                        lineHeight: { xs: 1.3, md: 1.4 }
                                    }}
                                >
                                    {item.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    px: { xs: 2, sm: 3, md: 4 },
                                    pb: { xs: 3, md: 4 },
                                    pt: { xs: 2, md: 3 },
                                    borderTop: `1px solid ${colors.secondary.peach}`,
                                    marginTop: 1
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#000000',
                                        lineHeight: 1.7,
                                        fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                                        fontFamily: 'sans-serif'
                                    }}
                                >
                                    {item.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default ToucanFAQSection; 