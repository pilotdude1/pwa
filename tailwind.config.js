/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        svelteship: {
          ...require('daisyui/src/theming/themes')['[data-theme=svelteship]'],
          primary: '#FF4000',
          'primary-content': '#fefbf6',
          secondary: '#FFA726',
          'secondary-content': '#fefbf6',
          accent: '#FFA726',
          'accent-content': '#FF4000',
          neutral: '#020617',
          'neutral-content': '#fefbf6',
          'base-100': '#fefbf6',
          'base-200': '#faedd6',
          'base-300': '#f5e0c0',
          'base-content': '#020617',
          info: '#3abff8',
          'info-content': '#fefbf6',
          success: '#37d399',
          'success-content': '#fefbf6',
          warning: '#fbbd23',
          'warning-content': '#fefbf6',
          error: '#f77272',
          'error-content': '#fefbf6',
          '--radius-selector': '1rem',
          '--radius-field': '0.5rem',
          '--radius-box': '0.5rem',
          '--size-selector': '0.25rem',
          '--size-field': '0.25rem',
          '--border': '1px',
          '--depth': '1',
          '--noise': '0',
        },
      },
      'light',
      'dark',
      'bumblebee',
      'corporate'
    ],
  },
} 