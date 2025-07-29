// Paleta de colores de Makers Web
// Basada en la paleta de diseño mostrada

export const colors = {
  // Colores primarios
  primary: {
    blue: '#2621F9',      // Azul vibrante - color principal
    orange: '#FE5337',     // Naranja-rojo brillante
    purple: '#270172',     // Índigo/púrpura oscuro
  },

  // Colores secundarios
  secondary: {
    peach: '#FFF1E6',      // Melocotón claro
    lightBlue: '#A0DCFF',  // Azul claro
  },

  // Colores de acento
  accent: {
    yellow: '#EDEA4D',     // Amarillo brillante
  },

  // Colores neutros
  neutral: {
    white: '#FFFFFF',      // Blanco puro
  },

  // Agrupación por uso
  brand: {
    main: '#2621F9',       // Color principal de marca
    secondary: '#FE5337',  // Color secundario de marca
    tertiary: '#270172',   // Color terciario de marca
  },

  // Colores de fondo
  background: {
    primary: '#FFFFFF',    // Fondo principal
    secondary: '#FFF1E6',  // Fondo secundario
    tertiary: '#A0DCFF',   // Fondo terciario
  },

  // Colores de texto
  text: {
    primary: '#270172',    // Texto principal
    secondary: '#2621F9',  // Texto secundario
    accent: '#FE5337',     // Texto de acento
    light: '#FFFFFF',      // Texto claro
  },

  // Colores de acción
  action: {
    primary: '#2621F9',    // Botones principales
    secondary: '#FE5337',  // Botones secundarios
    accent: '#EDEA4D',     // Botones de acento
  },

  // Colores de estado
  state: {
    success: '#EDEA4D',    // Éxito
    warning: '#FE5337',    // Advertencia
    info: '#A0DCFF',       // Información
    error: '#FE5337',      // Error
  }
};

// Exportaciones individuales para uso directo
export const {
  primary,
  secondary,
  accent,
  neutral,
  brand,
  background,
  text,
  action,
  state
} = colors;

// Función helper para obtener colores
export const getColor = (category: keyof typeof colors, variant?: string) => {
  if (variant) {
    return colors[category][variant as keyof typeof colors[typeof category]];
  }
  return colors[category];
};

// Función para obtener colores con opacidad
export const getColorWithOpacity = (color: string, opacity: number) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
