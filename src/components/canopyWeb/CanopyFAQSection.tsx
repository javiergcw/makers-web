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
        question: "Do we need to install specific sensors to get meaningful insights?",
        answer: "No, you don't need to install specific sensors. Our platform can work with existing sensor data and can integrate with most common industrial sensors. We can also help you identify what additional sensors might be beneficial for your specific use case."
    },
    {
        question: "How long does it take to get started?",
        answer: "Getting started is quick and straightforward. Initial setup typically takes 1-2 weeks, including data integration and platform configuration. You can start seeing insights within the first month of implementation."
    },
    {
        question: "How much data do you require?",
        answer: "We can work with varying amounts of data. For meaningful insights, we recommend at least 3 months of historical data, but we can start with less and build up over time. Our platform is designed to be flexible and scalable."
    },
    {
        question: "Do you provide Canopy integrations?",
        answer: "Yes, we provide comprehensive Canopy integrations. Our platform is designed to work seamlessly with Canopy systems, offering enhanced monitoring, analytics, and predictive capabilities for your Canopy-based operations."
    },
    {
        question: "Can you work with any type of machine?",
        answer: "Absolutely! Our platform is designed to work with any type of industrial machine or equipment. Whether you have CNC machines, robotic systems, conveyor belts, or any other industrial equipment, we can provide valuable insights and monitoring capabilities."
    }
];

const CanopyFAQSection: React.FC = () => {
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
                                        fontWeight: 600,
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

export default CanopyFAQSection;