"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { colors } from '../utils/color';

// Esquema de validación con Zod
const formSchema = z.object({
  firstName: z.string().min(1, 'El nombre es requerido'),
  lastName: z.string().min(1, 'El apellido es requerido'),
  company: z.string().min(1, 'La empresa es requerida'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  message: z.string().optional(),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar la política de privacidad',
  }),
});

type FormData = z.infer<typeof formSchema>;

const BookADemo: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      privacyPolicy: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Aquí iría la lógica para enviar el formulario
      console.log('Datos del formulario:', data);
      
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mostrar mensaje de éxito
      alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
      reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
    }
  };

  return (
    <Box sx={{
      backgroundColor: colors.secondary.peach,
    }}>
      <Container maxWidth={false} sx={{
        pb: 8,
        pt: 8,
        overflow: 'hidden',
        minHeight: 'auto',
        position: 'relative',
        background: `linear-gradient(180deg, 
        ${colors.primary.orange} 0%, 
        #e63946 30%, 
        #dc2f3d 60%, 
        #d12432 100%)`,
        borderRadius: '0 0 50px 50px',
      }}>
        <Box
          sx={{
            maxWidth: '1280px',
            mx: 'auto',
            width: '100%',
            minHeight: '400px',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 6 },
            zIndex: 2,
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* Contenido de texto - Lado izquierdo */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: '100%', md: '50%' },
            }}
          >
            {/* Título principal - Versión limpia */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                color: '#ffffff',
                textAlign: { xs: 'center', md: 'left' },
                mb: 2,
                lineHeight: 1.1,
                maxWidth: { xs: '90%', md: '100%' },
                mx: { xs: 'auto', md: 0 },
              }}
            >
              We'd love to give you a tour
            </Typography>

            {/* Párrafo descriptivo - Versión limpia */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                color: '#f3f4f6',
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: '800px',
                mb: 4,
                lineHeight: 1.6,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: { xs: '50%', md: '0' },
                  transform: { xs: 'translateX(-50%)', md: 'none' },
                  width: '80px',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
                },
              }}
            >
              It's time we learn how we can help you optimise your operations and make the most out of your machines. Schedule your live demo with our team now.
            </Typography>
          </Box>

          {/* Formulario - Lado derecho */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              alignItems: 'center',
              maxWidth: { xs: '100%', md: '50%' },
            }}
          >
            <Box sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '12px',
              p: 3,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '400px',
              width: '100%',
            }}>
              
              {/* Texto introductorio */}
              <Typography
                variant="body1"
                sx={{
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  mb: 2,
                  textAlign: 'center',
                }}
              >
                Fill in the form with your contact information and one of our experts will get in touch:
              </Typography>

              {/* Formulario */}
              <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                
                {/* Nombre y Apellido en fila */}
                <Box sx={{ display: 'flex', gap: 1.5, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="First name*"
                        variant="outlined"
                        fullWidth
                        size="small"
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '6px',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#ffffff',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#ffffff',
                            fontSize: '0.875rem',
                            '&.Mui-focused': {
                              color: '#ffffff',
                            },
                          },
                          '& .MuiInputBase-input': {
                            color: '#ffffff',
                            fontSize: '0.875rem',
                          },
                          '& .MuiFormHelperText-root': {
                            color: '#ff6b6b',
                            fontSize: '0.75rem',
                          },
                        }}
                      />
                    )}
                  />
                  
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Last name*"
                        variant="outlined"
                        fullWidth
                        size="small"
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '6px',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#ffffff',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#ffffff',
                            fontSize: '0.875rem',
                            '&.Mui-focused': {
                              color: '#ffffff',
                            },
                          },
                          '& .MuiInputBase-input': {
                            color: '#ffffff',
                            fontSize: '0.875rem',
                          },
                          '& .MuiFormHelperText-root': {
                            color: '#ff6b6b',
                            fontSize: '0.75rem',
                          },
                        }}
                      />
                    )}
                  />
                </Box>

                {/* Empresa */}
                <Controller
                  name="company"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Company*"
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.company}
                      helperText={errors.company?.message}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '6px',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#ffffff',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#ffffff',
                          fontSize: '0.875rem',
                          '&.Mui-focused': {
                            color: '#ffffff',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: '#ffffff',
                          fontSize: '0.875rem',
                        },
                        '& .MuiFormHelperText-root': {
                          color: '#ff6b6b',
                          fontSize: '0.75rem',
                        },
                      }}
                    />
                  )}
                />

                {/* Email */}
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Work email*"
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '6px',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#ffffff',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#ffffff',
                          fontSize: '0.875rem',
                          '&.Mui-focused': {
                            color: '#ffffff',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: '#ffffff',
                          fontSize: '0.875rem',
                        },
                        '& .MuiFormHelperText-root': {
                          color: '#ff6b6b',
                          fontSize: '0.75rem',
                        },
                      }}
                    />
                  )}
                />

                {/* Teléfono */}
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Phone number"
                      variant="outlined"
                      fullWidth
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '6px',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#ffffff',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#ffffff',
                          fontSize: '0.875rem',
                          '&.Mui-focused': {
                            color: '#ffffff',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: '#ffffff',
                          fontSize: '0.875rem',
                        },
                      }}
                    />
                  )}
                />

                {/* Mensaje */}
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={3}
                      fullWidth
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '6px',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#ffffff',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#ffffff',
                          fontSize: '0.875rem',
                          '&.Mui-focused': {
                            color: '#ffffff',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: '#ffffff',
                          fontSize: '0.875rem',
                        },
                      }}
                    />
                  )}
                />

                {/* Checkbox de política de privacidad */}
                <Controller
                  name="privacyPolicy"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                          checked={field.value}
                          size="small"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.5)',
                            '&.Mui-checked': {
                              color: '#ffffff',
                            },
                          }}
                        />
                      }
                      label={
                        <Typography sx={{ color: '#ffffff', fontSize: '0.75rem' }}>
                          I've read and agree to the Privacy Policy.
                        </Typography>
                      }
                      sx={{ mt: 0.5 }}
                    />
                  )}
                />

                                 {/* Botón de envío */}
                 <Button
                   type="submit"
                   variant="contained"
                   disabled={isSubmitting}
                   sx={{
                     background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                     color: '#1f2937',
                     borderRadius: '6px',
                     py: 1,
                     px: 2,
                     fontSize: '0.875rem',
                     fontWeight: 600,
                     textTransform: 'none',
                     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                     mt: 1,
                     border: '1px solid rgba(255, 255, 255, 0.2)',
                     '&:hover': {
                       background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)',
                       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                     },
                     '&:disabled': {
                       background: 'rgba(255, 255, 255, 0.2)',
                       color: 'rgba(255, 255, 255, 0.5)',
                     },
                   }}
                 >
                   {isSubmitting ? 'Enviando...' : 'Submit →'}
                 </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BookADemo; 