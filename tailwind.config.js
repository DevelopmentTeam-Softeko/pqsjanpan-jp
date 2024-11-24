module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        primary: {
          50: '#fef1fa',
          100: '#fee5f7',
          200: '#ffcaf1',
          300: '#ff9fe4',
          400: '#ff64cf',
          500: '#fe36b8',
          600: '#ef1397',
          700: '#d00679',
          800: '#bb096c',
          900: '#8f0c55',
        },
        secondary: {
          50: '#f4f8f9',
          100: '#dbeaec',
          200: '#b7d4d8',
          300: '#8cb3bc',
          400: '#63929e',
          500: '#4a7582',
          600: '#395c68',
          700: '#314a54',
          800: '#2a3e45',
          900: '#1c272b',
        },
      },
    },
  },
  plugins: [],
}