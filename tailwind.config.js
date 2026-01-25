/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontSize: {
// Encabezados
      '6xl': ['3.75rem', { lineHeight: '1.1' }],      // H1 Desktop - 60px
      '5xl': ['3rem', { lineHeight: '1.15' }],        // H1 Móvil - 48px
      '4xl': ['2.25rem', { lineHeight: '1.2' }],      // H2 Desktop - 36px
      '3xl': ['1.875rem', { lineHeight: '1.25' }],    // H2 Móvil - 30px
      '2xl': ['1.5rem', { lineHeight: '1.3' }],       // H3 Desktop - 24px
      'xl': ['1.25rem', { lineHeight: '1.35' }],      // H3 Móvil - 20px
      
      // Body & Label
      'lg': ['1.125rem', { lineHeight: '1.6' }],      // Body Large - 18px
      'base': ['1rem', { lineHeight: '1.6' }],        // Body Base - 16px (por defecto)
      'sm': ['0.875rem', { lineHeight: '1.5' }],      // Body Small - 14px
      'xs': ['0.75rem', { lineHeight: '1.4' }],       // Label/Caption - 12px 
    },
    extend: {
      colors: {
        primary: '#2D4639',    // Verde Bosque Profundo
        secondary: '#A3C1AD',  // Azul Río Suave
        background: '#F9F7F2', // Crema Orgánico
        accent: '#B87333',     // Ocre Tierra
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        'section-mobile': '4rem', // py-16
        'section-desktop': '6rem', // py-24
      },
      maxWidth: {
        'layout': '1280px', // max-w-7xl
      },
    },
  },
  plugins: [],
}