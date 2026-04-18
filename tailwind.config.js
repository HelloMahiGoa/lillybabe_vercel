/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'shimmer': 'shimmer 2.5s linear infinite',
        'hero-todays-float': 'hero-todays-float 4.5s ease-in-out infinite',
        'hero-todays-glow': 'hero-todays-glow 2.8s ease-in-out infinite',
        'hero-todays-shimmer': 'hero-todays-shimmer 2.8s linear infinite',
        'hero-todays-sparkle': 'hero-todays-sparkle 2.2s ease-in-out infinite',
        'hero-todays-breathe': 'hero-todays-breathe 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'hero-todays-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'hero-todays-glow': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(0.96)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        'hero-todays-shimmer': {
          '0%': { transform: 'translateX(-120%) skewX(-12deg)' },
          '100%': { transform: 'translateX(280%) skewX(-12deg)' },
        },
        'hero-todays-sparkle': {
          '0%, 100%': { transform: 'rotate(-6deg) scale(1)', filter: 'drop-shadow(0 0 6px rgba(236,72,153,0.5))' },
          '50%': { transform: 'rotate(8deg) scale(1.12)', filter: 'drop-shadow(0 0 14px rgba(244,114,182,0.9))' },
        },
        'hero-todays-breathe': {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(236,72,153,0.25), inset 0 1px 0 rgba(255,255,255,0.5)' },
          '50%': { boxShadow: '0 6px 28px rgba(236,72,153,0.45), inset 0 1px 0 rgba(255,255,255,0.65)' },
        },
      },
    },
  },
  plugins: [],
}
