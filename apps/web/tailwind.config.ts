import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#2F6BFF',
          foreground: '#FFFFFF',
          50: '#EBF1FF',
          100: '#D6E3FF',
          200: '#ADC6FF',
          300: '#85AAFF',
          400: '#5B8DFF',
          500: '#2F6BFF',
          600: '#0043E0',
          700: '#0033AA',
          800: '#002277',
          900: '#001144',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: {
          DEFAULT: '#22C55E',
          foreground: '#FFFFFF',
          50: '#F0FDF4',
          100: '#DCFCE7',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
        },
        warning: {
          DEFAULT: '#FA8C16',
          foreground: '#FFFFFF',
          50: '#FFF7E6',
          100: '#FFE7BA',
          500: '#FA8C16',
          600: '#D46B08',
          700: '#AD4E00',
        },
        danger: {
          DEFAULT: '#F5222D',
          foreground: '#FFFFFF',
          50: '#FFF1F0',
          100: '#FFCCC7',
          500: '#F5222D',
          600: '#CF1322',
          700: '#A8071A',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        destructive: {
          DEFAULT: '#F5222D',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: '10px',
        md: '8px',
        sm: '6px',
        DEFAULT: '10px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
